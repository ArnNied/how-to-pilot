import Image from "next/image"
import Link from "next/link"

import CustomImage from "../common/CustomImage"

const Register = () => {
  function inputStyleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 0) {
      e.target.classList.replace("font-bold", "font-normal")
    } else {
      e.target.classList.replace("font-normal", "font-bold")
    }
  }
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/auth/auth-background.jpg')",
      }}
      className="w-full h-screen flex justify-center items-center -mt-20 pt-20"
    >
      <div className="max-w-2xl h-fit flex flex-col px-24 py-8 bg-secondary-base space-y-4 rounded">
        <div className="flex flex-col space-y-1">
          <h3 className="font-bold text-4xl text-white text-center">
            Create a New Account
          </h3>
          <p className="text-white text-center">
            Already a member?{" "}
            <Link href="/login">
              <a className="text-tertiary-orange">Sign In</a>
            </Link>
          </p>
        </div>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col justify-center space-y-3"
          >
            <div className="flex flex-row space-x-3">
              <div className="w-1/2 flex flex-row rounded overflow-hidden">
                <label htmlFor="first_name" className="w-auto p-3 bg-white">
                  <CustomImage
                    src="/assets/icons/auth/auth-names.svg"
                    sizing="w-6 h-6"
                  />
                </label>
                <input
                  onChange={inputStyleChange}
                  id="first_name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 font-bold outline-none placeholder-right"
                />
              </div>
              <div className="w-1/2 flex flex-row rounded overflow-hidden">
                <label htmlFor="last_name" className="w-auto p-3 bg-white">
                  <CustomImage
                    src="/assets/icons/auth/auth-names.svg"
                    sizing="w-6 h-6"
                  />
                </label>
                <input
                  onChange={inputStyleChange}
                  id="last_name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 font-bold outline-none placeholder-right"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="w-1/2 flex flex-row rounded overflow-hidden">
                <label htmlFor="username" className="w-auto p-3 bg-white">
                  <CustomImage
                    src="/assets/icons/auth/auth-username.svg"
                    sizing="w-6 h-6"
                  />
                </label>
                <input
                  onChange={inputStyleChange}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 font-bold outline-none placeholder-right"
                />
              </div>
              <div className="w-1/2 flex flex-row rounded overflow-hidden">
                <label htmlFor="email" className="w-auto p-3 bg-white">
                  <CustomImage
                    src="/assets/icons/auth/auth-email.svg"
                    sizing="w-6 h-6"
                  />
                </label>
                <input
                  onChange={inputStyleChange}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 font-bold outline-none placeholder-right"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="w-1/2 flex flex-row rounded overflow-hidden">
                <label htmlFor="password" className="w-auto p-3 bg-white">
                  <CustomImage
                    src="/assets/icons/auth/auth-password.svg"
                    sizing="w-6 h-6"
                  />
                </label>
                <input
                  onChange={inputStyleChange}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 font-bold outline-none placeholder-right"
                />
              </div>
              <div className="w-1/2 flex flex-row rounded overflow-hidden">
                <label
                  htmlFor="confirm_password"
                  className="w-auto p-3 bg-white"
                >
                  <CustomImage
                    src="/assets/icons/auth/auth-password.svg"
                    sizing="w-6 h-6"
                  />
                </label>
                <input
                  onChange={inputStyleChange}
                  id="confirm_password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 font-bold outline-none placeholder-right"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              <input id="tos" type="checkbox" />
              <label htmlFor="tos" className="text-white">
                I agree to all{" "}
                <span className="text-tertiary-orange">Terms of Service</span>{" "}
                and <span className="text-tertiary-orange">Privacy Policy</span>
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-fit px-8 py-2 bg-primary-base hover:bg-tertiary-orange font-semibold border border-black rounded"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="w-16 h-px border border-white"></div>
          <p className="text-tertiary-orange">Or Continue With</p>
          <div className="w-16 h-px border border-white"></div>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <button>
            <CustomImage src="/assets/icons/auth/google.svg" sizing="w-8 h-8" />
          </button>
          <button>
            <CustomImage
              src="/assets/icons/auth/facebook.svg"
              sizing="w-8 h-8"
            />
          </button>
          <button>
            <CustomImage src="/assets/icons/auth/github.svg" sizing="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
