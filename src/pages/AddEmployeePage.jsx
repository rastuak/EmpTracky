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

  const uuid = Cookies.get("uuid")
  axios.defaults.withCredentials = true
  const navigate = useNavigate();


  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      if (!name || !division || !position || !gender || !birth || !salary || !contract || !phone) throw new Error("Please fill all fields");
      const response = await axios.post('http://localhost:8000/employee/add', {
        uuid, name, division, position, gender, birth, salary, contract, phone
      })
      if (response.status !== 201) throw new Error('Failed to add employee');
      navigate('/home');
      alert("Employee added successfully");
      console.log(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const handleRefresh = async () => {
    try {
      const uuid = Cookies.get("uuid");
      if (!uuid) {
        navigate('/')
        throw new Error("User not logged in")
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
      <div className='flex-col w-full h-full px-2 md:px-14 '>
        <TextInputEmployee title="Full name :" setValue={setName} type="text"/>
        <div className='flex gap-2 w-full justify-between'>
          <TextInputEmployee title="Division :" setValue={setDivision} type="text" />
          <TextInputEmployee title="Position :" setValue={setPosition} type="text" />
        </div>
        <div className='flex flex-col md:flex-row gap-2 w-full justify-between'>
          <div className='w-full'>
            <h1>Gender :</h1>
            <select onChange={(e) => setGender(e.target.value)} className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd px-2 focus:ring-4 focus:ring-inherit focus:ring-emptracky-blue'>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <TextInputEmployee title="Birthdate :" setValue={setBirth} type="date" />
        </div>
        <TextInputEmployee title="Salary :" setValue={setSalary} type="number" />
        <TextInputEmployee title="Contract :" setValue={setContract} type="number" />
        <TextInputEmployee title="Phone Number :" setValue={setPhone} type="number" />
        <div className='mt-[10%] md:mt-[35%] lg:mt-[8%]'>
          <Button title="Add Employee" onClick={handleAddEmployee} textColor="emptracky-fd" bgColor="emptracky-blue" />
        </div>
      </div>
    </DashboardElement>
  );
}