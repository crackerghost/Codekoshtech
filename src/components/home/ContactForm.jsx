import React, { useState } from "react";
const ContactForm = () => {
  const [resultMessage, setResultMessage] = useState("");
  const [messageClass, setMessageClass] = useState("text-gray-500");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const json = JSON.stringify(formObject);
    setResultMessage("Please wait...");
    setMessageClass("text-gray-500 ml-4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const jsonResponse = await response.json();
      if (response.status === 200) {
        setResultMessage(jsonResponse.message);
        setMessageClass("text-green-500");
      } else {
        setResultMessage(jsonResponse.message);
        setMessageClass("text-red-500");
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
      setMessageClass("text-red-500");
    } finally {
      e.target.reset();
      setTimeout(() => {
        setResultMessage("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="e6d3898d-ed03-4b2d-990c-ee23d102c011"
      />
      <input type="hidden" name="from_name" value="New Inquiry Received" />
      <input
        type="hidden"
        name="subject"
        value="New Submission from Codekoshtech"
      />
      <input
        type="checkbox"
        name="botcheck"
        id=""
        style={{ display: "none" }}
      />
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-gray-100"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border-b focus:border-b bg-transparent py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-blue-500  focus:shadow-md"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-gray-100"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-md border-b py-3 px-6 text-base bg-transparent font-medium text-gray-400 outline-none focus:border-blue-500  focus:shadow-md focus:border-b"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-gray-100"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          required
          placeholder="Your Message"
          className="w-full resize-none rounded-md border-b focus:border-b bg-transparent py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-blue-500  focus:shadow-md"
        ></textarea>
      </div>

      <button
        type="submit"
        className="inline-block text-white  uppercase font-bold py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent"
      >
        Submit
      </button>

      <span
        className={`text-base text-center mt-2 ${messageClass}`}
        id="result"
      >
        {resultMessage}
      </span>
    </form>
  );
};

export default ContactForm;
