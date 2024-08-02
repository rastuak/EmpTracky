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
    const birth = document.getElementById("birth").value.trim();
    const division = document.getElementById("division").value.trim();
    const position = document.getElementById("position").value.trim();
    const salary = document.getElementById("salary").value.trim();
    const contract = document.getElementById("contract").value.trim();
    try {
      if (!birth || !division || !position || !salary || !contract) throw new Error("Please fill all fields");
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
      alert(error);
      onClose();
    }
  };

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }

  return (
    <div onClick={handleClose} id='wrapper' className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[85%] md:w-3/5 lg:w-2/5 h-fit bg-emptracky-darkgray rounded-xl p-4 text-emptracky-fd'>
        <div className='w-full h-fit flex'>
          <button onClick={() => onClose()} className='w-fit'>
            <Backspace size={24} />
          </button>
          <h1 className='w-full text-center text-xl md:text-3xl'>Edit employee details</h1>
        </div>
        <div className='px-8 text-md md:text-xl p-2'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <EditInput space={false} title="Birthdate" type="date" id="birth" />
            <EditInput space={true} title="Division" type="text" id="division" />
            <EditInput space={true} title="Position" type="text" id="position" />
            <EditInput space={false} title="Salary" type="number" id="salary" />
            <EditInput space={false} title="Contract expiry year" type="number" id="contract" />
            <Button title="Save changes" onClick={handleEditEmployee} styleUi="bg-emptracky-blue text-emptracky-f1 w-full mt-3 md:mt-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditEmployeeModal