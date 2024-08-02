/* eslint-disable react/prop-types */
import { Backspace } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { EditInput } from './ui/EditInput';
import Button from './ui/Button';

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
    const birth = document.getElementById("birth").value.trim();
    const division = document.getElementById("division").value.trim();
    const position = document.getElementById("position").value.trim();
    const company = document.getElementById("company").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const phone = document.getElementById("phone").value.trim();
    try {
      if(!birth || !division || !position || !company || !gender || !phone) throw new Error("Please fill all the fields");
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
      <div className='w-[85%] md:w-3/5 lg:w-2/5 h-fit bg-emptracky-darkgray rounded-xl p-4 text-emptracky-fd'>
        <div className='w-full h-fit flex'>
          <button onClick={() => onClose()} className='w-fit'>
            <Backspace size={24} />
          </button>
          <h1 className='w-full text-center text-3xl'>Edit your details</h1>
        </div>
        <div className='px-8 text-md md:text-xl'>
          <div className='flex flex-col gap-4'>
            <EditInput title="Birthdate" type="date" id="birth"/>
            <EditInput title="Company Name" type="text" id="company"/>
            <EditInput title="Division" type="text" id="division"/>
            <EditInput title="Position" type="text" id="position"/>
            <EditInput title="Phone Number" type="number" id="phone"/>
            <div className='flex flex-col gap-2'>
              <label htmlFor='gender'>Gender</label>
              <select id='gender' className='text-emptracky-darkgray rounded-2xl p-2'>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <Button title='Save changes' onClick={handleEditProfile} styleUi="bg-emptracky-blue "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileModal