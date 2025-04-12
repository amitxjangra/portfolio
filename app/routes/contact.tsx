import { useCallback, useState } from "react";
import { ButtonCircle } from "~/welcome/components/ButtonCircle";
import "app/styles/contact.css";
import emailjs from "@emailjs/browser";

const validateField = (name: string, value: string) => {
  switch (name) {
    case "name":
      return value.trim().length >= 2;

    case "email":
      // Simple email regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    case "subject":
      return value.trim().length >= 3;

    case "message":
      return value.trim().length >= 5;

    default:
      return true; // For any unhandled field
  }
};

export default function Contact() {
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      // setTouched((prev) => ({ ...prev, [name]: true }));
      setValue((prev) => ({ ...prev, [name]: value }));

      const isValid = validateField(name, value);
      setError((prev) => ({ ...prev, [name]: !isValid }));
    },
    []
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setTouched((prev) => ({ ...prev, [name]: true }));

      const isValid = validateField(name, value);
      setError((prev) => ({ ...prev, [name]: !isValid }));
    },
    []
  );

  const handleSubmitClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isSubmitting) {
        e.preventDefault();
        return;
      }
      const submitButton = document.getElementById(
        "submit-button"
      ) as HTMLButtonElement;
      submitButton.click();
    },
    [isSubmitting]
  );
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, email, subject, message } = value;
      const isValidName = validateField("name", name);
      const isValidEmail = validateField("email", email);
      const isValidSubject = validateField("subject", subject);
      const isValidMessage = validateField("message", message);
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      setError({
        name: !isValidName,
        email: !isValidEmail,
        subject: !isValidSubject,
        message: !isValidMessage,
      });
      if (isValidName && isValidEmail && isValidSubject && isValidMessage) {
        let form = document.querySelector("form") as HTMLFormElement;
        emailjs
          .sendForm("service_f3fnlcq", "template_vi3t56r", form, {
            publicKey: import.meta.env.VITE_EMAILJS,
          })
          .then(
            (res) => {
              if (res.status === 200) {
                setStatus("SUCCESS");
              }
            },
            (error) => {
              setStatus("FAILED");
            }
          )
          .finally(() => {
            setTimeout(() => {
              setStatus(null);
            }, 5000);
          });
      }
    },
    [value]
  );

  return (
    <div className="p-5 flex flex-col gap-5 max-w-full my-10 md:max-w-2/3 md:mx-auto md:mb-20 lg:max-w-1/2 ">
      <div className="text-4xl font-bold">Get in touch.</div>
      <p className="text-lg font-[500]">
        Got a project in mind or just want to say hi? I’m all ears! And if
        you’re looking to hire, let’s make something awesome together — feel
        free to reach out!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className={`form-input ${error.name ? "input-error" : ""}`}
            placeholder="Name"
            name="name"
            required
            value={value.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={error.name ? "true" : "false"}
          />
          {error.name && touched.name && (
            <div className="error-msg">Please enter a valid name.</div>
          )}
        </div>
        <div className="input-container">
          <input
            className={`form-input ${error.email ? "input-error" : ""}`}
            placeholder="Email"
            name="email"
            required
            value={value.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={error.email ? "true" : "false"}
          />
          {error.email && touched.email && (
            <div className="error-msg">Please enter a valid email.</div>
          )}
        </div>
        <div className="input-container">
          <input
            className={`form-input ${error.subject ? "input-error" : ""}`}
            placeholder="Subject"
            name="subject"
            required
            value={value.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={error.subject ? "true" : "false"}
          />
          {error.subject && touched.subject && (
            <div className="error-msg">Please enter a subject.</div>
          )}
        </div>
        <div className="input-container">
          <textarea
            className={`form-input ${error.message ? "input-error" : ""}`}
            placeholder="Message"
            name="message"
            required
            value={value.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={error.message ? "true" : "false"}
          />
          <div className="absolute bottom-2 right-5 text-[0.6rem] font-[500]">
            {value.message.length}/1000
          </div>
          {error.message && touched.message && (
            <div className="error-msg">Please enter a message.</div>
          )}
        </div>
        <div
          className="pt-5"
          onClick={(e) => handleSubmitClick(e)} // Trigger submit button click when div is clicked
        >
          <ButtonCircle
            height={52}
            circleColor="#e5e5e5"
            content={
              <text className="flex font-bold z-4 pl-7 pr-7 pt-3.5 pb-3.5">
                Send Message &nbsp; &rarr;
              </text>
            }
          />
        </div>
        <button
          id="submit-button"
          type="submit"
          style={{ display: "none" }} // Hide the button, we only want the div to trigger the form submit
        />
        {status === "SUCCESS" && (
          <div className="mt-10 bg-green-100 p-2 text-green-800 rounded-md">
            Message sent successfully!
          </div>
        )}
        {status === "FAILED" && (
          <div className="mt-10 bg-red-100 p-2 text-red-800 rounded-md">
            Unable to send message. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}
