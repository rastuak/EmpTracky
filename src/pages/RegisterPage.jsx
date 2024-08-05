import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../images/empTrackyLogo.svg"
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const handleSpace = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault()
    if (username === "" || email === "" || password === "" || confirm === "") {
      alert("Please fill in all fields")
      return
    }
    if (password !== confirm) {
      alert("Passwords do not match")
      return
    }
    try {
      const response = await axios.post('http://localhost:8000/users/register', {
        username, email, password
      })
      if (response.status !== 201) throw new Error('Failed to add user to database.');
        navigate("/login")
        console.log(response.data)
    }
    catch (error) {
      console.error(error)
      alert(error.response.data)
    }
  }

  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center bg-no-repeat bg-cover bg-register  overflow-hidden font-poppins gap-12 ">
        <div className='w-[500px] justify-center items-center text-center m-6 space-y-8 text-emptracky-fd hidden rounded-[20px] lg:block object-cover'>
          <div className='flex gap-3'>
            <img src={logo} />
            <h1 className=" font-bold text-[64px]">EmpTracky</h1>
          </div>
          <p className='text-3xl'>Save time and manage employee more efficiently</p>
        </div>
        <div className="relative h-full w-[583px] bg-emptracky-fd rounded-[20px] m-6 space-y-8 flex flex-col">
          <div className="h-full w-full justify-center items-center p-12">
            <div className='flex w-full justify-center items-center'>
              <h1 className="text-emptracky-blue font-bold text-2xl md:text-4xl mb-2">Register</h1>
            </div>
            <div>
              <h1 className="text-emptracky-darkgray text-xl md:text-2xl ">Userame</h1>
              <input onKeyDown={handleSpace} onChange={(e) => setUsername(e.target.value)} className="shadow-md w-full h-12 bg-emptracky-f5 rounded-3xl px-5 outline-emptracky-blue  " />
              <h1 className="text-emptracky-darkgray text-xl md:text-2xl">Email</h1>
              <input onKeyDown={handleSpace} onChange={(e) => setEmail(e.target.value)} className="shadow-md w-full h-12 bg-emptracky-f5 rounded-3xl px-5 outline-emptracky-blue" />
              <h1 className="text-emptracky-darkgray text-xl md:text-2xl">Password</h1>
              <input onChange={(e) => setPassword(e.target.value)} type='password' className="shadow-md w-full h-12 bg-emptracky-f5 rounded-3xl px-5 outline-emptracky-blue" />
              <h1 className="text-emptracky-darkgray text-xl md:text-2xl">Confirm Password</h1>
              <input onChange={(e) => setConfirm(e.target.value)} type='password' className="shadow-md w-full h-12 bg-emptracky-f5 rounded-3xl px-5 outline-emptracky-blue" />
            </div>
            <div className="w-full flex flex-col gap-3 justify-center items-center">
              <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px] mt-7">
                <h1 className="text-emptracky-f1 text-xl" onClick={handleRegister}>Sign up</h1>
              </button>
              <h1 className="text-emptracky-darkgray text-lg text-center">Already have an account?
                <span className=" text-emptracky-blue text-decoration-line: underline hover:cursor-pointer w-fit transition-all duration-200 ml-2" onClick={() => navigate("/login")}>
                  Login here!
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage