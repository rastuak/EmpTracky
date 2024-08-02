/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import axios from 'axios';

const DeleteEmployeeModal = ({ isVisible, onClose }) => {
    const navigate = useNavigate();
    if (!isVisible) return null

    const handleLogout = () => {
        axios.get("http://localhost:8000/users/logout")
            .then(() => {
                console.log("Logged out");
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose()
    }

    return (
        <div onClick={handleClose} id='wrapper' className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[80%] md:w-1/5 h-fit bg-emptracky-darkgray rounded-xl p-4 text-emptracky-fd'>
                <div className='w-full h-full text-center justify-center items-center'>
                    <p className='text-xl mb-6'>Are you sure want to Logout?</p>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <Button title="Cancel" onClick={onClose} textColor="emptracky-fd" bgColor="emptracky-blue"/>
                        <Button title="Logout Now!" onClick={handleLogout} textColor="emptracky-fd" bgColor="emptracky-red"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteEmployeeModal