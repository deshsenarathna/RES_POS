import React, { useEffect, useState } from "react";
import sideimage from "../assets/images/auth.jpg"
import logo from "../assets/images/Logo.png"
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth = () => {

  useEffect(() => {
    document.title = "POS | Auth"
  }, [])

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/*Left Section*/}
      <div className="flex-[3] relative flex items-center justify-center bg-cover">
        {/*BG Image*/}
        <img className="w-full h-full object-cover" src={sideimage} alt="auth" />

        {/*Black Overlay*/}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/*Quote Section*/}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere, and they’ll keep coming back."
          <br />
          <span className="block mt-4 text-yellow-400">- Founder of Restro</span>
        </blockquote>
      </div>

      {/*Right Section*/}
      <div className="flex-[2] min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-10 border-2 rounded-full" />
          <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">Cafe D</h1>
        </div>

        <h2 className="text-2xl text-center mt-5 font-semibold text-yellow-400 mb-5">
          {isRegister ? "Employee Registration" : "Employee Login"}
        </h2>

        {/*Components*/}  
        {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}


        <div className="flex justify-center mt-6">
          <p className="text-sm text-[#ababab]">
            {isRegister ? "Already have an account?" :"Don't have an account?"}
            <a onClick={() => setIsRegister(!isRegister)} className="text-yellow-400 font-semibold 
            hover:underline" href="#">
              {isRegister ? "Sign in" : "Sign up"}
            </a>
          </p>
        </div>


      </div>
    </div>
  );
}

export default Auth;
