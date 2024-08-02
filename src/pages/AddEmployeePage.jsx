import axios from 'axios';
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import TextInputEmployee from '../components/ui/TextInputEmployee';
import Button from '../components/ui/Button';


export default function AddEmployeePage() {
  const [name, setName] = useState("")
  const [division, setDivision] = useState("")
  const [position, setPosition] = useState("")
  const [gender, setGender] = useState("Male")
  const [birth, setBirth] = useState("")
  const [salary, setSalary] = useState("")
  const [contract, setContract] = useState("")
  const [phone, setPhone] = useState("")

  axios.defaults.withCredentials = true
  const navigate = useNavigate();
  
  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const uuid = Cookies.get("uuid")
      if (!uuid) {
        navigate('/')
        throw new Error("User not logged in")
      }
      if (!(name.trim()) || !(division.trim()) || !(position.trim()) || !(gender.trim()) || !(birth.trim()) || !(salary.trim()) || !(contract.trim()) || !(phone.trim())) throw new Error("Please fill all fields");
      const response = await axios.post('http://localhost:8000/employee/add', {
        uuid, name, division, position, gender, birth, salary, contract, phone
      })
      if (response.status !== 201) throw new Error('Failed to add employee. please relogin and try again');
      navigate('/home');
      alert("Employee added successfully");
      console.log(response.data);
    }
    catch (error) {
      console.error(error);
      alert(error);
    }
  }

  const handleRefresh = async () => {
    try {
      const uuid = Cookies.get("uuid");
      if (!uuid) {
        navigate('/')
        throw new Error("User not logged in. Please login before accessing this page.")
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);



  return (
    <DashboardElement>
      <div className='flex justify-center items-center text-center w-full h-[15%] text-3xl font-semibold text-emptracky-blue'>
        <h1 className=''>Add an Employee</h1>
      </div>
      <div className='flex flex-col w-full h-full px-2 md:px-14 '>
        <TextInputEmployee title="Full name :" setValue={setName} type="text" space={true}/>
        <div className='flex gap-2 w-full justify-between'>
          <TextInputEmployee title="Division :" setValue={setDivision} type="text" space={true}/>
          <TextInputEmployee title="Position :" setValue={setPosition} type="text" space={true}/>
        </div>
        <div className='flex flex-col md:flex-row gap-2 w-full justify-between'>
          <div className='w-full'>
            <h1>Gender :</h1>
            <select onChange={(e) => setGender(e.target.value)} className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd px-2 focus:ring-4 focus:ring-inherit focus:ring-emptracky-blue'>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <TextInputEmployee title="Birthdate :" setValue={setBirth} type="date" space={false}/>
        </div>
        <TextInputEmployee title="Salary :" setValue={setSalary} type="number" space={false}/>
        <TextInputEmployee title="Contract :" setValue={setContract} type="number" space={false}/>
        <TextInputEmployee title="Phone Number :" setValue={setPhone} type="number" space={false}/>
        <div className='mt-[3%] md:mt-[35%] lg:mt-[8%]'>
          <Button title="Add Employee" onClick={handleAddEmployee} styleUi="w-full bg-emptracky-blue text-emptracky-fd" />
        </div>
      </div>
    </DashboardElement>
  );
}