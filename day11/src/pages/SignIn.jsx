import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Eye, EyeClosed } from "phosphor-react";

export function SignIn() {
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };

  function handleSignUp() {
    navigate("/sign-up");
  }

  function handleHelp() {
    navigate("/help");
  }

  return (
    <div className="bg-[#1f1a25] h-screen justify-center items-center flex flex-col">
      <div className="flex flex-col items-center justify-around w-full h-full">
        <div className="flex w-full h-2/3 items-center justify-around flex-col">
          <input
            className="flex w-1/2 h-12 rounded-md outline-none p-4"
            placeholder="User or Email"
            required
          />
          <div className="flex flex-col items-center w-full">
            <div className="shadow flex items-center justify-center w-full">
              <input
                className="flex w-[926px] h-12 outline-none p-4"
                placeholder="Password"
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
                required
              />
              <button
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className="pr-1 bg-white rounded-r-md h-full"
              >
                {values.showPassword ? (
                  <Eye size={30} color="#030202" />
                ) : (
                  <EyeClosed size={30} color="#030202" />
                )}
              </button>
            </div>
            <div className="flex justify-between w-1/2">
              <label className="flex pt-4 w-40 justify-between">
                <input type="checkbox" className="" />
                <p className="text-white">Remember me</p>
              </label>
              <button onClick={handleHelp} className="flex items-end">
                <p className="text-white underline underline-offset-2">
                  Need help ?
                </p>
              </button>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Sign In"
          className="cursor-pointer w-1/2 h-16 rounded-md bg-green-300"
        />
        <div className="flex flex-row">
          <p className="text-white">New to the platform?</p>
          <button onClick={handleSignUp} className="ml-2">
            <p className="text-white underline underline-offset-2">
              Sign up Now
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
