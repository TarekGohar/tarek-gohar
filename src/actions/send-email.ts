'use server'

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const UserSchema = z
  .object({
    first_name: z.string().min(2).max(50),
    last_name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(5).max(500),
  });

interface SignUpFormState {
  errors: {
    first_name?: string[];
    last_name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
}

export async function sendEmail(prevState: SignUpFormState, formData: FormData) {

  const data = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const result = UserSchema.safeParse(data);


  if (!result.success) {
    return {
        errors: result.error?.flatten().fieldErrors ?? {},
      };
  }

  console.log("Sending email...");


}