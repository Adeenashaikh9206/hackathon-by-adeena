import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Get In Touch With Us
        </h1>
        <p className="text-lg text-gray-600">
        For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-center">
        {/* Left Section - Contact Information */}
        <div className="space-y-8 flex flex-col items-center">
          {/* Address */}
          <div className="flex items-center text-center">
            <FaMapMarkerAlt className="text-3xl text-black mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">236 5th SE Avenue, New <br />York NY10000, United <hr /> States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center text-center">
            <FaPhoneAlt className="text-3xl text-black mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center text-center">
            <FaClock className="text-3xl text-black mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Working Time</h2>
              <p className="text-gray-600">Monday-Friday: 9:00 - <hr /> 22:00 <br />
              Saturday-Sunday: 9:00 - <hr /> 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
          <form>
            {/* Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Hi! i’d like to ask about"
            
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2  text-black text-lg font-semibold rounded-full border border-black-600 hover:bg-white transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
