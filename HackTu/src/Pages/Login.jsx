import React, { useState } from "react";

const Login = () => {
  const [activeUser, setActiveUser] = useState("public");

  return (
    <section id="login" className="min-h-screen bg-neutral-900 text-white py-20">
        <div className="animate__animated animate__fadeInLeft pb-10 text-center" id="el-b8bbwwd0">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#81C784]" id="el-p5n1zmfn">
        Connect &amp; Login
    </h1>
    <p className="text-xl mb-8 text-gray-300" id="el-dlktycju">
        Access your waste management dashboard - for municipalities and public users.
    </p>
</div>
      <div className="max-w-md mx-auto px-4">
        <div className="bg-neutral-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#81C784]">Login</h2>
          
          <div className="toggle-container mb-8">
            <div className="bg-neutral-700 p-2 rounded-full flex justify-between">
              <button 
                className={`w-1/2 py-2 rounded-full transition-colors user-toggle ${activeUser === "public" ? "bg-[#81C784] text-white" : ""}`}
                onClick={() => setActiveUser("public")}
              >
                Public User
              </button>
              <button 
                className={`w-1/2 py-2 rounded-full transition-colors user-toggle ${activeUser === "municipality" ? "bg-[#81C784] text-white" : ""}`}
                onClick={() => setActiveUser("municipality")}
              >
                Administrator
              </button>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 bg-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C784] text-white" 
                placeholder="Enter your email" 
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input 
                type="password" 
                required 
                className="w-full px-4 py-3 bg-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C784] text-white" 
                placeholder="Enter your password" 
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-neutral-700 border-neutral-600 text-[#81C784] mr-2" />
                Remember me
              </label>
              <a href="#" className="text-[#81C784] hover:text-[#4CAF50]">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#2E7D32] hover:bg-[#4CAF50] text-white py-3 rounded-lg transition-colors font-semibold"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-400">
              Don't have an account? 
              <a href="#register" className="text-[#81C784] hover:text-[#4CAF50] ml-1">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
