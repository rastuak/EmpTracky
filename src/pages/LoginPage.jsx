import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import login from "../images/bgLogin.svg"
import Button from "../components/ui/Button";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  axios.defaults.withCredentials = true;

  const handleSpace = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      if (username === "" || password === "") {
        alert("Please fill in all fields")
        return
      }
        const response = await axios.post('http://localhost:8000/users/login', {
        username, password
      })
      if (response.status !== (201)) throw new Error('Failed to login. Check your credentials')
      navigate("/home")
      console.log(response.data)
    }
    catch (error) {
      console.error(error)
      alert(error.response.data)
    }
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-[#619DC2] to-emptracky-f5 overflow-hidden font-poppins">
      <div className=" relative flex flex-col m-6 space-y-8 bg-emptracky-fd rounded-[20px] md:flex-row justify-center items-center">
        <div className="relative">
          <img src={login}
            className="w-full h-full hidden rounded-l-[20px] md:block object-cover" />
        </div>
        <form onSubmit={handleLogin} className="h-full w-4/5 md:w-[60%] m-6 space-y-8 flex flex-col">
          <div>
            <h1 className="text-emptracky-blue font-bold text-2xl md:text-4xl">WELCOME BACK!</h1>
            <h1 className="text-emptracky-darkgray md:text-2xl text-xl mb-2">Please login to your account</h1>
          </div>
          <div>
            <h1 className="text-emptracky-darkgray text-xl md:text-2xl">Username</h1>
            <input onKeyDown={handleSpace} onChange={(e) => setUsername(e.target.value)} className="shadow-md w-full h-12 bg-emptracky-f5 rounded-3xl px-5 outline-emptracky-blue" />
            <h1 className="text-emptracky-darkgray text-xl md:text-2xl mt-4">Password</h1>
            <input onChange={(e) => setPassword(e.target.value)} type='password' className="shadow-md w-full h-12 bg-emptracky-f5 rounded-3xl px-5 outline-emptracky-blue " />
          </div>
          <div className="flex flex-col gap-3 justify-center items-center mt-12 text-center">
            <Button title="Sign in" onClick={handleLogin} styleUi="bg-emptracky-blue text-emptracky-fd w-full text-xl" />
            <h1 className="text-emptracky-darkgray text-lg mb-2 ">Dont have an account?
              <span className="text-emptracky-blue text-decoration-line: underline hover:cursor-pointer w-fit transition-all duration-200 ml-2" onClick={() => navigate("/register")}>
                Register here!
              </span>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}