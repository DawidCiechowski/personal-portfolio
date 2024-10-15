'use client';

import React from "react";

const Contact = () => {
     const [formData, setFormData] = React.useState({
       name: "",
       email: "",
       message: "",
     });
     const [loading, setLoading] = React.useState(false);
     const [error, setError] = React.useState<string | null>(null);
     const [success, setSuccess] = React.useState(false);

     const handleChange = (
       e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
       setFormData({
         ...formData,
         [e.target.name]: e.target.value,
       });
     };

     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setLoading(true);
       setError(null);
       setSuccess(false);

       // Assuming validation and form submission here
       // Simplified for brevity

       try {
         const response = await fetch("/api/sendEmail", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         });

         if (!response.ok) {
           const { message } = await response.json();
           throw new Error(message || "Failed to send emails");
         }

         setSuccess(true);
         setFormData({
           name: "",
           email: "",
           message: "",
         });
       } catch (err: any) {
         setError(err.message);
       } finally {
         setLoading(false);
       }
     };

  return (
    <div className=" tw-py-[10rem] tw-px-[6%] lg:tw-px-[12%] tw-w-screen tw-justify-center tw-flex tw-flex-col tw-items-center">
      <h2 className="tw-text-[5rem] tw-text-main-color tw-border-b-4 tw-rounded-sm tw-border-b-main-color tw-solid tw-font-semibold tw-mb-6 tw-text-center sm:tw-text-3xl">
        Contact Me;
      </h2>
      <form onSubmit={handleSubmit} className="tw-space-y-6">
        {/* Name Input */}
        <div className="tw-w-screen tw-items-center tw-flex tw-flex-col">
          <label className="tw-block tw-text-[2rem] tw-font-medium tw-text-text-color sm:tw-text-[2.5rem]">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name..."
            value={formData.name}
            onChange={handleChange}
            required
            className="focus:tw-shadow-glow-sm tw-w-1/2 sm:tw-w-1/3 tw-bg-main-color tw-text-black tw-mt-1 tw-block tw-p-3 tw-border tw-rounded-md tw-shadow-sm focus:tw-border-black tw-text-[1.8rem] tw-font-medium sm:tw-text-[1.4rem]"
          />
        </div>

        {/* Email Input */}
        <div className="tw-w-screen tw-items-center tw-flex tw-flex-col ">
          <label className="tw-block tw-text-[2rem] tw-font-medium tw-text-text-color sm:text-base">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter emaill..."
            required
            className="focus:tw-shadow-glow-sm tw-w-1/2 sm:tw-w-1/3 tw-bg-main-color tw-text-black tw-mt-1 tw-block tw-p-3 tw-border tw-rounded-md focus:tw-border-black tw-text-[1.8rem] tw-font-medium sm:tw-text-[1.4rem]"
          />
        </div>

        {/* Message Input */}
        <div className="tw-w-screen tw-items-center tw-flex tw-flex-col">
          <label className="tw-block tw-text-[2rem] tw-font-medium tw-text-text-color sm:text-base">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter message..."
            required
            className="focus:tw-shadow-glow-sm tw-w-1/2 sm:tw-w-1/3 tw-bg-main-color tw-text-black tw-mt-1 tw-block tw-p-3 tw-border tw-rounded-md tw-shadow-sm focus:tw-border-black tw-text-[1.8rem] tw-font-medium sm:tw-text-[1.4rem]"
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <div className="tw-w-screen tw-items-center tw-flex tw-flex-col">
          <button
            type="submit"
            disabled={loading}
            className="tw-w-1/4 lg:tw-w-1/12 tw-bg-black tw-border-main-color tw-border-solid tw-border-2 tw-text-white tw-py-3 tw-rounded-md hover:tw-bg-main-color hover:tw-shadow-glow-sm tw-mt-16 hover:tw-text-black tw-duration-300  tw-transition hover:tw-scale-110 tw-text-[1.4rem] sm:tw-text-[1.8rem]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Error and Success Messages */}
          {error && (
            <p className="tw-text-red-500 tw-mt-4 tw-text-center">{error}</p>
          )}
          {success && (
            <p className="tw-text-green-500 tw-mt-4 tw-text-center">
              Message sent successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
