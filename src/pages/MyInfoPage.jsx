import { Eye, EyeSlash } from "@phosphor-icons/react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";

import male from "../assets/images/male.svg"
import female from "../assets/images/female.svg"
import { useNavigate } from "react-router-dom";
import EditProfileModal from "../components/EditProfileModal";
import Button from "../components/ui/Button";

export default function MyInfoPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [toggleEmail, setToggleEmail] = useState(true)
  const [togglePhone, setTogglePhone] = useState(true)
  const [showEdit, setShowEdit] = useState(false)
  axios.defaults.withCredentials = true
  
  const handleMyProfile = async () => {
    try {
      const uuid = Cookies.get("uuid");
      if (!uuid) {
        navigate('/')
        throw new Error("User not logged in")
      }
      const response = await axios.get(`http://localhost:8000/users/${uuid}`);
      if (response.status !== 200) throw new Error("Failed to get profile data");
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleMyProfile();
  }, []);

  return (
      <DashboardElement>
        <div className="flex flex-col w-full h-[27%] bg-gradient-to-r from-[#00366B] to-[#6CABC6] px-2 md:px-14 pt-5 pb-3 justify-center items-end">
          <div className="text-emptracky-fd text-lg font-medium">
            <h1 className="text-xl md:text-3xl font-semibold text-end">{data.username}</h1>
            <div className="text-sm md:text-lg flex gap-2 justify-end items-center">
              <p>{toggleEmail ? "******" : data.email}</p>
              <button onClick={() => setToggleEmail(!toggleEmail)}>
                {toggleEmail ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          <div className="text-sm md:text-lg flex gap-2 justify-end items-center">
              <p>{togglePhone ? "******" : data.phone}</p>
              <button onClick={() => setTogglePhone(!togglePhone)}>
                {togglePhone ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[65%] flex flex-row justify-center md:justify-end">
          <div className="flex flex-col gap-3 h-full w-[80%] md:w-[55%] justify-center font-semibold text-md md:text-lg">
            <h1>Birthdate : <span className="font-medium"> {data.birth} </span>  </h1>
            <h1>Company name : <span className="font-medium"> {data.company} </span> </h1>
            <h1>Division : <span className="font-medium"> {data.division} </span>  </h1>
            <h1>Position : <span className="font-medium"> {data.position} </span> </h1>
            <h1>Gender : <span className="font-medium"> {data.gender} </span> </h1>
          </div>
        </div>
        <div className="w-full h-[7%] flex flex-row justify-end items-end p-6 gap-3 text-emptracky-fd">
        <Button onClick={() => setShowEdit(true)} bgColor='emptracky-blue' textColor='emptracky-fd' title='Edit profile'/>
        </div>
        <div className="absolute flex justify-center items-center bg-emptracky-f7 opacity-0 md:opacity-100 shadow-lg rounded-2xl overflow-hidden h-[250px] w-[250px] top-36 left-24">
        {(data.gender === "Male") ? <img className="hidden md:block" src={male} /> : null}
        {(data.gender === "Female") ? <img className="hidden md:block" src={female} /> : null}
        </div>
      <EditProfileModal isVisible={showEdit} onClose={() => setShowEdit(false) } id={Cookies.get("uuid")} />
      </DashboardElement>
  
  );
}