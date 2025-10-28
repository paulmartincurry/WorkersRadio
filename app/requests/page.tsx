'use client';
import { useState } from 'react';

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a full implementation you'd send the data to your API here.
    setSubmitted(true);
  };

  return (
    <main className="max-w-lg mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Send a Request</h1>
      {submitted ? (
        <p className="text-olive">Thanks! Comrade LoFi will review your message soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-1 font-mono text-sm" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              maxLength={80}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-mono text-sm" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              maxLength={80}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-mono text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message (max 240 characters)"
              maxLength={240}
              required
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-unionRed text-white px-4 py-2 rounded shadow hover:bg-red-600"
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
