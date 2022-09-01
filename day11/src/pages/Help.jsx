import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export function Help() {
  useEffect(() => {
    document.title = "Help";
  }, []);

  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/");
  }

  return (
    <div className="bg-[#1f1a25] h-screen justify-center items-center flex flex-col">
      <div className="flex w-full h-1/2 items-center justify-center flex-col">
        <h1 className="text-white pb-4">
          We will send you an email with instructions on how to reset your
          password.
        </h1>
        <input
          className="flex w-1/2 h-12 rounded-md outline-none p-4"
          placeholder="Your email"
          required
        />
      </div>
      <div className="flex w-full h-1/3 items-center justify-center flex-col">
        <input
          onClick={handleSignIn}
          type="submit"
          value="Send email"
          className="cursor-pointer w-1/2 h-16 rounded-md bg-green-300"
        />
      </div>
    </div>
  );
}
