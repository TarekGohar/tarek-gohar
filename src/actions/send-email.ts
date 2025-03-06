'use server'

import { z } from "zod";
import { redirect } from "next/navigation";

interface SignUpFormState {
  errors: {
    first_name?: string[];
    last_name?: string[];
    email?: string[];
    message?: string[];
    phone?: string[];
    _form?: string[];
  };
}

const UserSchema = z
  .object({
    first_name: z.string().min(2).max(50),
    last_name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    message: z.string().min(1).max(1000),
  });



export async function sendEmail(prevState: SignUpFormState, formData: FormData) {

    const data = {
        first_name: formData.get("first_name") as string,
        last_name: formData.get("last_name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
    };

    const result = UserSchema.safeParse(data);


    if (!result.success) {
        return {
            errors: result.error?.flatten().fieldErrors ?? {},
        };
    }


    const webhookURL = process.env.EMAIL_WEBHOOK_URL;

    try {
  
      const webhookURL = process.env.DISCORD_WEBHOOK_URL; // Store in .env file
  
      // Prepare the message for Discord
      const discordMessage = {
        content: `New Form Submission\n\nName: ${data.first_name + " " + data.last_name}\nEmail: ${data.email}\nPhone Number: ${data.phone}\nMessage: ${data.message}\n\n-------------------------`,
      };
  
      // Send the notification to Discord
      const response = await fetch(webhookURL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordMessage),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message to Discord");
      }
  
    } catch (error) {
      throw new Error("Failed to send message to Discord");
    }

    

    console.log("Sent email.");
    redirect("/get-a-quote/success");
}