"use client";

import { sendEmail } from "@/actions/send-email";
import React, { useActionState, useEffect, useState } from "react";
import LoadingBar from "../LoadingBar";

const FORM_TITLE_SPACING = ".5rem";
const FORM_SPACING = "2rem";
const BACKGROUND =
  "linear-gradient(rgba(255, 255, 255, 0.1),  rgba(8, 145, 178, 0.02) 100%)";
const BACKGROUND_ERROR =
  "linear-gradient(rgba(255, 255, 255, 0.1),  rgba(239, 68, 68, 0.02) 100%)";

const BORDER = "2px solid rgb(240, 240, 240, 1)";
const BORDER_FOCUS = "2px solid rgb(21, 94, 117, .8)";
const BORDER_ERROR = "2px solid rgba(239, 68, 68, 0.8)";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [formState, formAction] = useActionState<any, FormData>(sendEmail, {
    errors: {},
  });

  const [formValues, setFormValues] = useState({
    first_name: formState.values?.first_name || "",
    last_name: formState.values?.last_name || "",
    email: formState.values?.email || "",
    phone: formState.values?.phone || "",
    message: formState.values?.message || "",
  });

  // Update formValues when inputs change
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    setLoading(false);
  }, [formState?.errors]);

  return (
    <form
      action={formAction}
      className={`flex flex-col items-start justify-start max-w-[40rem] w-full h-full`}
      style={{ gap: FORM_SPACING }}>
      {/* First Name */}
      <div className={`w-full `}>
        <h2
          className="uppercase font-medium pl-2 w-full lg:max-w-[40rem] text-cyan-900 text-left lg:text-lg"
          style={{ marginBottom: FORM_TITLE_SPACING }}>
          First Name
        </h2>
        <input
          name="first_name"
          type="text"
          value={formValues.first_name}
          placeholder="Enter your first name"
          className="pl-2 h-[3rem] rounded-none w-full text-cyan-800 placeholder:text-neutral-200"
          style={{
            background: formState?.errors?.first_name
              ? BACKGROUND_ERROR
              : BACKGROUND,
            transitionDuration: "0.3s",
            borderBottom: formState?.errors?.first_name ? BORDER_ERROR : BORDER,
            outline: "none",
          }}
          onFocus={(e) =>
            (e.target.style.borderBottom = formState?.errors?.first_name
              ? BORDER_ERROR
              : BORDER_FOCUS)
          }
          onBlur={(e) =>
            (e.target.style.borderBottom = formState?.errors?.first_name
              ? BORDER_ERROR
              : BORDER)
          }
          onChange={handleChange}
        />
      </div>

      {/* Last Name */}
      <div className={`w-full`} style={{ marginBottom: FORM_TITLE_SPACING }}>
        <h2
          className="uppercase font-medium pl-2 w-full lg:max-w-[40rem] text-cyan-900 text-left lg:text-lg"
          style={{ marginBottom: FORM_TITLE_SPACING }}>
          Last Name
        </h2>
        <input
          name="last_name"
          type="text"
          value={formValues.last_name}
          placeholder="Enter your last name"
          className="pl-2 h-[3rem] rounded-none w-full text-cyan-800 placeholder:text-neutral-200"
          style={{
            background: formState?.errors?.last_name
              ? BACKGROUND_ERROR
              : BACKGROUND,
            transitionDuration: "0.3s",
            borderBottom: formState?.errors?.last_name ? BORDER_ERROR : BORDER,
            outline: "none",
          }}
          onFocus={(e) =>
            (e.target.style.borderBottom = formState?.errors?.last_name
              ? BORDER_ERROR
              : BORDER_FOCUS)
          }
          onBlur={(e) =>
            (e.target.style.borderBottom = formState?.errors?.last_name
              ? BORDER_ERROR
              : BORDER)
          }
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className={`w-full`} style={{ marginBottom: FORM_TITLE_SPACING }}>
        <h2
          className="uppercase font-medium pl-2 w-full lg:max-w-[40rem] text-cyan-900 text-left lg:text-lg"
          style={{ marginBottom: FORM_TITLE_SPACING }}>
          Email
        </h2>
        <input
          name="email"
          type="text"
          value={formValues.email}
          placeholder="Enter your last name"
          className="pl-2 h-[3rem] rounded-none w-full text-cyan-800 placeholder:text-neutral-200"
          style={{
            background: formState?.errors?.email
              ? BACKGROUND_ERROR
              : BACKGROUND,
            transitionDuration: "0.3s",
            borderBottom: formState?.errors?.email ? BORDER_ERROR : BORDER,
            outline: "none",
          }}
          onFocus={(e) =>
            (e.target.style.borderBottom = formState?.errors?.email
              ? BORDER_ERROR
              : BORDER_FOCUS)
          }
          onBlur={(e) =>
            (e.target.style.borderBottom = formState?.errors?.email
              ? BORDER_ERROR
              : BORDER)
          }
          onChange={handleChange}
        />
      </div>

      {/* Phone Number */}
      <div className={`w-full`} style={{ marginBottom: FORM_TITLE_SPACING }}>
        <h2
          className="uppercase font-medium pl-2 w-full lg:max-w-[40rem] text-cyan-900 text-left lg:text-lg"
          style={{ marginBottom: FORM_TITLE_SPACING }}>
          Phone Number
        </h2>
        <input
          name="phone"
          type="text"
          value={formValues.phone}
          placeholder="Enter your phone number"
          className="pl-2 h-[3rem] rounded-none w-full text-cyan-800 placeholder:text-neutral-200"
          style={{
            background: formState?.errors?.phone
              ? BACKGROUND_ERROR
              : BACKGROUND,
            transitionDuration: "0.3s",
            borderBottom: formState?.errors?.phone ? BORDER_ERROR : BORDER,
            outline: "none",
          }}
          onFocus={(e) =>
            (e.target.style.borderBottom = formState?.errors?.phone
              ? BORDER_ERROR
              : BORDER_FOCUS)
          }
          onBlur={(e) =>
            (e.target.style.borderBottom = formState?.errors?.phone
              ? BORDER_ERROR
              : BORDER)
          }
          onChange={handleChange}
        />
      </div>
      <div className={`w-full`} style={{ marginBottom: FORM_TITLE_SPACING }}>
        <h2
          className="uppercase font-medium pl-2 w-full lg:max-w-[40rem] text-cyan-900 text-left lg:text-lg"
          style={{ marginBottom: FORM_TITLE_SPACING }}>
          Message
        </h2>
        <textarea
          name="message"
          placeholder="Enter details about your project"
          value={formValues.message}
          className="pl-2 min-h-[10rem] rounded-none w-full text-cyan-800 placeholder:text-neutral-200"
          style={{
            background: formState?.errors?.message
              ? BACKGROUND_ERROR
              : BACKGROUND,
            transitionDuration: "0.3s",
            borderBottom: formState?.errors?.message ? BORDER_ERROR : BORDER,
            outline: "none",
          }}
          onFocus={(e) =>
            (e.target.style.borderBottom = formState?.errors?.message
              ? BORDER_ERROR
              : BORDER_FOCUS)
          }
          onBlur={(e) =>
            (e.target.style.borderBottom = formState?.errors?.message
              ? BORDER_ERROR
              : BORDER)
          }
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        onClick={() => setLoading(true)}
        className="w-full h-[3rem] text-white uppercase tracking-wider bg-cyan-900 focus:bg-cyan-950">
        {loading ? (
          <div className="w-[7rem] mx-auto">
            <LoadingBar color="#FFFFFF" bars={350} length={350} />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
