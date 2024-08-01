/* eslint-disable react/prop-types */
import { Backspace } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Button from './ui/Button';
import { EditInput } from './ui/EditInput';

const EditEmployeeModal = ({ isVisible, onClose, id }) => {
  const navigate = useNavigate();
  if (!isVisible) return null

  const handleEditEmployee = async (e) => {
    e.preventDefault();
    const uuid = Cookies.get("uuid");
    if (!uuid) {
      navigate('/')
      throw new Error("User not logged in")
    }
    const birth = document.getElementById("birth").value;
    const division = document.getElementById("division").value;
    const position = document.getElementById("position").value;
    const salary = document.getElementById("salary").value;
    const contract = document.getElementById("contract").value;
    try {
      const response = await axios.put(`http://localhost:8000/employee/${id}`, {
        birth: birth,
        division: division,
        position: position,
        salary: salary,
        contract: contract
      });
      if (response.status !== 200) throw new Error("Failed to edit employee data");
      console.log(response.data);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
      onClose();
    }
  };

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }

  return (
    <div onClick={handleClose} id='wrapper' className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-2/5 h-fit bg-emptracky-darkgray rounded-xl p-4 text-emptracky-fd'>
        <div className='w-full h-fit flex'>
          <button onClick={() => onClose()} className='w-fit'>
            <Backspace size={24} />
          </button>
          <h1 className='w-full text-center text-3xl'>Edit employee details</h1>
        </div>
        <form onSubmit={handleEditEmployee} className='px-8'>
          <div className='flex flex-col gap-4'>
            <EditInput title="Birthdate" type="date" id="birth" />
            <EditInput title="Division" type="text" id="division" />
            <EditInput title="Position" type="text" id="position" />
            <EditInput title="Salary" type="number" id="salary" />
            <EditInput title="Contract expiry year" type="number" id="contract" />
            <Button title="Save changes" onClick={handleEditEmployee} textColor="emptracky-f1" bgColor="emptracky-blue" w="full" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployeeModal