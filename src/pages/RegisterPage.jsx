import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/empTrackyLogo.svg"
import axios from 'axios';
import Button from '../components/ui/Button';


const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/users/register', {
        username, email, password
      })

      if (response.status !== 201) throw new Error('Failed to add user to database.')
        navigate("/login")
        console.log(response.data)
    }
    catch (error) {
      console.error(error.response.data.msg)
      alert(error.response.data.msg)
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-no-repeat bg-cover bg-register overflow-hidden font-poppins gap-8">
      <div className='w-[500px] flex flex-col justify-center items-center text-center text-emptracky-fd'>
        <div className='flex gap-3'>
          <img src={logo} />
          <h1 className=" font-bold text-[64px]">EmpTracky</h1>
        </div>
        <p className='text-3xl'>Save time and manage attendance more efficiently</p>
      </div>

      <form className="h-fit w-[583px] bg-emptracky-fd rounded-[20px] flex">

        <div className="h-full w-full justify-center items-center p-12">
          <div className='flex w-full justify-center items-center'>
            <h1 className="text-emptracky-blue font-bold text-[32px] mb-2">Register</h1>
          </div>

          <div>
            <h1 className="text-emptracky-darkgray text-[24px]">Username</h1>
            <input onChange={(e) => setUsername(e.target.value)} className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" />
            <h1 className="text-emptracky-darkgray text-[24px]">Email</h1>
            <input onChange={(e) => setEmail(e.target.value)} className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" />
            {/* <h1 className="text-emptracky-darkgray text-[24px]">Phone Number</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" /> */}
            <h1 className="text-emptracky-darkgray text-[24px]">Password</h1>
            <input onChange={(e) => setPassword(e.target.value)} className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" />
            {/* <h1 className="text-emptracky-darkgray text-[24px]">Confirm Password</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" /> */}

          </div>

          <div className="w-full flex flex-col gap-3 justify-center items-center mt-5">
            <Button title="Sign up!" onClick={handleRegister} textColor="emptracky-f1" bgColor="emptracky-blue" w="full" />

            <h1 className="text-emptracky-darkgray text-[20px] ">Already have an account?
              <span className=" text-emptracky-blue text-decoration-line: underline hover:cursor-pointer w-fit transition-all duration-200 ml-2" onClick={() => navigate("/login")}>
                Login here!
              </span>
            </h1>

          </div>
        </div>

      </form>
    </div>
  )
}

export default RegisterPage