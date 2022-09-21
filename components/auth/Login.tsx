import Image from "next/image"
import Link from "next/link"

import CustomImage from "../common/CustomImage"

const Login = () => {
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
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="p-4 bg-primary-base rounded-full">
            <CustomImage
              src="/assets/icons/auth/login-icon.svg"
              sizing="w-12 h-12"
            />
          </div>

          <h3 className="font-bold text-4xl text-white text-center">Login</h3>
        </div>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="flex flex-row rounded overflow-hidden">
              <label htmlFor="username" className="w-auto bg-primary-base p-3">
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
                placeholder="Username / Email"
                className="w-72 py-3 px-3 bg-white font-bold outline-none"
              />
            </div>
            <div className="flex flex-row rounded overflow-hidden">
              <label htmlFor="password" className="w-auto bg-primary-base p-3">
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
                className="w-72 py-3 px-3 bg-white font-bold outline-none"
              />
            </div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-row justify-center items-center space-x-2">
                <input id="remember_me" type="checkbox" />
                {/* TODO: STYLING FOR CHECKED STATE */}
                <label htmlFor="remember_me" className="text-white">
                  Remember me
                </label>
              </div>
              <Link href="#">
                <a className="text-white underline">Forgot Password ?</a>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-fit px-8 py-2 bg-primary-base hover:bg-tertiary-orange font-semibold border border-black rounded"
              >
                Sign In
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

export default Login
