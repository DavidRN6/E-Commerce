import { useState } from "react"

function Login() {

  const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4">

      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p id="sign-up" className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

    </form>
  )
}

export default Login;