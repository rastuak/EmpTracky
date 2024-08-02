/* eslint-disable react/prop-types */
import { Backspace } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Button from './ui/Button';

const DeleteEmployeeModal = ({ isVisible, onClose, id }) => {
  const navigate = useNavigate();
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }

  const handleDeleteEmployee = async (e) => {
    e.preventDefault();
    const uuid = Cookies.get("uuid");
    if (!uuid) {
      navigate('/')
      throw new Error("User not logged in")
    }
    try {
      const response = await axios.delete(`http://localhost:8000/employee/${id}`)
      if (response.status !== 200) throw new Error("Failed to edit employee data");
      console.log(response.data);
      onClose();
      navigate('/home')
    } catch (error) {
      console.error(error);
      onClose();
    }
  };

  return (
    <div onClick={handleClose} id='wrapper' className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[80%] md:w-1/3 h-fit bg-emptracky-darkgray rounded-xl p-4 text-emptracky-fd'>
        <div className='w-full h-fit flex'>
          <button onClick={() => onClose()} className='w-fit'>
            <Backspace size={24} />
          </button>
          <h1 className='w-full text-center text-2xl md:text-3xl'>Delete this employee?</h1>
        </div>
        <div className='w-full h-full mt-10 text-center justify-center items-center'>
          <p className='text-lg md:text-xl mb-4'>Are you sure want to delete this employee?</p>
          <Button onClick={handleDeleteEmployee} title="Delete permanently" bgColor="emptracky-red" textColor="emptracky-fd" />
          </div>
      </div>
    </div>
  )
}

export default DeleteEmployeeModal