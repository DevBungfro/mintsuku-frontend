import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.mintsuku.dev/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          inquiry: formData.get('inquiry'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 2000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto sm:w-[40%] w-[90%] my-10">
        <h1 style={{ fontFamily: 'Mustica-Medium' }} className="text-3xl font-bold text-white mb- inline-block">
          Contact Me
          <div className='h-1 rounded-md w-[100%] mt-1 mb-6 bg-[#7e5af2]'></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 text-gray-400 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-[#7e5af2]"
                  required
                />
              </div>

              <div className="mb-4">
              <label htmlFor="department" className="block text-gray-400 font-bold mb-2">
                Inquiry
              </label>
              <select
                id="inquiry"
                name="inquiry"
                className="w-full px-4 py-2 bg-transparent border text-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-[#7e5af2]"
                required
              >
                <option value="" disabled selected>Select an inquiry type</option>
                <option value="general">General Inquiry</option>
                <option value="web-development">Web Development</option>
                <option value="software-development">Software Development</option>
                <option value="bug-report">Bug Report</option>
                <option value="collaboration">Collaboration Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-transparent border text-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-[#7e5af2]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full text-gray-400 px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="loader"></div>
                </div>
              ) : (
                <div className="mt-2">
                  <button
                    type="submit"
                    className={`bg-[#7e5af2] text-white w-[100%] font-semibold px-4 py-2 rounded-md  focus:outline-none focus:shadow-outline-blue`}
                  >
                    {sent ? 'Sent!' : error ? 'Error sending email' : 'Send'}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
