import { useState } from "react";

import DashboardElement from "../components/ui/DashboardElement";
import { Eye, EyeSlash } from "@phosphor-icons/react";

import male from "../assets/images/male.svg"
import female from "../assets/images/female.svg"

export default function MyInfoPage() {
  const [toggleEmail, setToggleEmail] = useState(false)
  const [togglePhone, setTogglePhone] = useState(false)

  // const [name, setName] = useState("");

  return (
    <DashboardElement>
      <div className="flex flex-col w-full h-[27%] bg-gradient-to-r from-[#00366B] to-[#6CABC6] rounded-t-[10px] px-14 pt-5 pb-3 justify-center items-end">
        <div className="text-emptracky-fd text-lg font-medium">
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <div className="flex gap-2 justify-end items-center">
            <p>{toggleEmail ? "******" : data.email}</p>
            <button onClick={() => setToggleEmail(!toggleEmail)}>
              {toggleEmail ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <p>{togglePhone ? "******" : data.phone}</p>
            <button onClick={() => setTogglePhone(!togglePhone)}>
              {togglePhone ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[70%] flex flex-row justify-end">
        <div className="flex flex-col gap-3 h-full w-[60%] justify-center font-semibold text-lg">
          <h1>Birthdate : <span className="font-medium"> {data.birth} </span>  </h1>
          <h1>Company name : <span className="font-medium"> {data.company} </span> </h1>
          <h1>Position : <span className="font-medium"> {data.position} </span> </h1>
        </div>
      </div>
      <div className="absolute flex justify-center items-center bg-emptracky-f7 shadow-lg rounded-2xl overflow-hidden h-[250px] w-[250px] top-36 left-24">
        {(data.gender === "Male") ? <img src={male} /> : null}
        {(data.gender === "Female") ? <img src={female} /> : null}
      </div>
    </DashboardElement>
  );
}

const data = {
  name: "Kautsar Faradika Faisal",
  email: "rastuakfaisal@gmail.com",
  phone: "628812322357",
  gender: "Male",
  birth: "2004-09-02",
  company: "Astra",
  position: "Software Engineer"
}
