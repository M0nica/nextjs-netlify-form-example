import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        Submit Another Response
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form
      className="container"
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
      />
      <label htmlFor="company">Company *</label>
      <input id="company" name="company" required type="text" />
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required />
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div className="container">
      <Head>
        <title>NextJS + Netlify Forms Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Contact Us</h1>

      <main>{formVisible ? ContactForm : ConfirmationMessage}</main>
      <footer>NextJS + Netlify Forms Example by Monica Powell</footer>
      <style jsx global>
        {`
          html,
          body {
            font-size: 18px;
            background-color: #dbd8f4;
            color: #27004e;
            padding: 1em;
            margin: 1em;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          h1 {
            text-transform: uppercase;
          }
          .container {
            display: flex;
            flex-direction: column;
            width: 80%;
            grid-row-gap: 0.5em;
          }
          label {
            font-size: 1.2em;
          }
          input[type="text"],
          input[type="email"],
          textarea {
            font-size: 24px;
          }
          button {
            max-width: 400px;
            margin: 0 auto;
            color: #f3f0ee;
            background-color: #022f94de;
            border: none;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            text-transform: uppercase;
            border-radius: 10px;
          }
          button:hover {
            background-color: #051f58de;
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
