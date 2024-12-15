import { useState } from "react";

export default function AuthPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Register Data:", form.email);
  };

  return (
    <div className=" min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Login Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username or email address
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 text-black border-gray-300 rouded focus:ring-black"
                onChange={handleChange}
              />
              <label className="ml-2 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full  text-black border border-black py-2 rounded-md"
            >
              Log In
            </button>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Lost Your Password?
            </a>
          </form>
        </div>

        {/* Signup Section */}
        <div className="p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
                onChange={handleChange}
              />
            </div>
            <p className="text-sm text-gray-600">
              A link to set a new password will be sent to your email address.
              <p>

            
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in ours </p>
              <a href="#" className="text-black underline">
                {" "}
                privacy policy.
              </a>
            </p>
            <button
              type="submit"
              className="w-full  text-black border border-black py-2 rounded-md "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}