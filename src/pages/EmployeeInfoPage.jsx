import { useState, useEffect, Fragment } from "react";

import { Eye, EyeSlash } from "@phosphor-icons/react";
import DashboardElement from "../components/ui/DashboardElement";
import EditEmployeeModal from "../components/EditEmployeeModal";
import axios from "axios";
import Cookies from 'js-cookie';

import { useParams, useNavigate } from "react-router-dom";
import female from "../assets/images/female.svg";
import male from "../assets/images/male.svg";
import DeleteEmployeeModal from "../components/DeleteEmployeeModal";
import Button from "../components/ui/Button";

export default function EmployeeInfoPage() {
  const navigate = useNavigate();
  const { employeeid } = useParams();
  const [data, setData] = useState([]);
  const [togglePhone, setTogglePhone] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEmployeePage = async () => {
    try {
      const uuid = Cookies.get("uuid");
      if (!uuid) {
        navigate('/')
        throw new Error("User not logged in")
      }
      const response = await axios.get(`http://localhost:8000/employee/${employeeid}`);
      if (response.status !== 200) throw new Error("Failed to get employee data");
      console.log(response.data);
      if ( uuid !== response.data.user_id) {
        navigate('/')
        throw new Error("User not authorized")
      }
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleEmployeePage();
  }, []);

  return (
    <Fragment>
      <DashboardElement>
        <div className="flex flex-col w-full h-[27%] bg-gradient-to-r from-[#00366B] to-[#6CABC6] px-2 md:px-14 pt-5 pb-3 justify-center items-end">
          <div className="text-emptracky-fd text-lg font-medium w-full">
            <h1 className="text-lg md:text-3xl font-semibold text-end">{data.name}</h1>
            <div className="text-sm md:text-xl flex gap-2 justify-end items-center">
              <p>{togglePhone ? "******" : data.phone}</p>
              <button onClick={() => setTogglePhone(!togglePhone)}>
                {togglePhone ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[65%] flex flex-row justify-center md:justify-end">
          <div className="flex flex-col gap-3 h-full w-[85%] md:w-[60%] justify-center font-semibold text-md md:text-lg">
            <h1>Gender : <span className="font-medium"> {data.gender} </span>  </h1>
            <h1>Birthdate : <span className="font-medium"> {data.birth} </span>  </h1>
            <h1>Division : <span className="font-medium"> {data.division} </span> </h1>
            <h1>Position : <span className="font-medium"> {data.position} </span> </h1>
            <h1>Salary : <span className="font-medium"> {String(data.salary)} </span> </h1>
            <h1>Contract expiry year : <span className="font-medium"> {data.contract} </span> </h1>
          </div>
        </div>
        <div className="absolute flex justify-center opacity-0 md:opacity-100 items-center bg-emptracky-f7 shadow-lg rounded-2xl overflow-hidden h-[250px] w-[250px] top-36 left-24">
          {(data.gender === "Male") ? <img src={male} /> : null}
          {(data.gender === "Female") ? <img src={female} /> : null}
        </div>
        <div className="w-full h-[7%] flex flex-row justify-end items-end p-6 gap-3 text-emptracky-fd">
        <Button title="Edit Employee" onClick={() => setShowEdit(true)} textColor="emptracky-f1" bgColor="emptracky-blue" />
        <Button title="Delete Employee" onClick={() => setShowDelete(true)} textColor="emptracky-f1" bgColor="emptracky-red" />
        </div>
      </DashboardElement>
      <EditEmployeeModal isVisible={showEdit} onClose={() => setShowEdit(false)} id={data.id} />
      <DeleteEmployeeModal isVisible={showDelete} onClose={() => setShowDelete(false)} id={data.id} />
    </Fragment>
  );
}