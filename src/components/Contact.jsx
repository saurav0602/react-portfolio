import React from "react";
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1,x: 0}}
    initial={{ opacity: 0, x: 100}}
    transition={{ duration: 0.5}}
     className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-screen-lg p-6 rounded-lg shadow-md">
        <h2 className="text-4xl text-center mb-6">Contact Us</h2>
        <form action="#" method="POST" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-white-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                className="mt-1 block w-full h-10  border-gray-300 rounded-md shadow-sm text-black focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-white-700"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                className="mt-1 block w-full h-10  text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full h-10  text-black border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white-700"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                name="adress"
                required
                className="mt-1 block w-full h-10  text-black border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full  text-black border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-pink-400 via bg-slate-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
