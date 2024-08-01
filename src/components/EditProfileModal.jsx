/* eslint-disable react/prop-types */
import { Backspace } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { EditInput } from './ui/EditInput';

const EditProfileModal = ({ isVisible, onClose, id }) => {
  const navigate = useNavigate();
  if (!isVisible) return null

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const uuid = Cookies.get("uuid");
    if (!uuid) {
      navigate('/')
      throw new Error("User not logged in")
    }
    const birth = document.getElementById("birth").value;
    const division = document.getElementById("division").value;
    const position = document.getElementById("position").value;
    const company = document.getElementById("company").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    try {
      const response = await axios.put(`http://localhost:8000/users/${id}`, {
        birth: birth,
        company: company,
        division: division,
        position: position,
        gender: gender,
        phone: phone
      });
      if (response.status !== 200) throw new Error("Failed to edit users data");
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
          <h1 className='w-full text-center text-3xl'>Edit your details</h1>
        </div>
        <form onSubmit={handleEditProfile} className='px-8'>
          <div className='flex flex-col gap-4'>
            <EditInput title="Birthdate" type="date" id="birth"/>
            <EditInput title="Company name" type="text" id="company"/>
            <EditInput title="Division" type="text" id="division"/>
            <EditInput title="Position" type="text" id="position"/>
            <EditInput title="Phone Number" type="number" id="phone"/>
            <div className='flex flex-col gap-2'>
              <label htmlFor='gender'>Gender</label>
              <select id='gender' className='text-emptracky-darkgray'>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className='flex justify-end'>
              <button onClick={handleEditProfile} className='bg-emptracky-blue p-2 rounded-lg'>Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal