import axios from 'axios';
import { useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";

export default function AddEmployeePage() {

  return (
    <DashboardElement>
      <div className='flex justify-center items-center w-full h-[15%] text-3xl font-semibold text-emptracky-blue'>
        <h1 className=''>Add an Employee</h1>
      </div>
      <div className='flex-col w-full h-full px-14'>
        <div className='flex-col'>
          <h1>Full Name :</h1>
          <input type='text' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
        </div>
        <div className='flex gap-2 w-full justify-between'>
          <div className='flex-col flex-1'>
            <h1>Division :</h1>
            <input type='text' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
          </div>
          <div className='flex-col flex-1'>
            <h1>Position :</h1>
            <input type='text' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
          </div>
        </div>
        <div className='flex-col'>
          <h1>Gender :</h1>
          <input type='text' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
        </div>
        <div className='flex-col'>
          <h1>Salary :</h1>
          <input type='number' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
        </div>
        <div className='flex-col'>
          <h1>Birthdate :</h1>
          <input type='date' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
        </div>
        <div className='flex-col'>
          <h1>Contract Expiry Year :</h1>
          <input placeholder='eg: 2029' type='number' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
        </div>
        <div className='flex-col'>
          <h1>Phone Number :</h1>
          <input placeholder='eg: 6281214140000' type='number' className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd' />
        </div>
        <div className='flex justify-end mt-4'>
          <button className='border border-emptracky-blue w-24 rounded-md h-8 bg-emptracky-fd text-emptracky-blue shadow-md hover:bg-emptracky-red hover:text-emptracky-fd transition-all duration-200'>
            <p>Reset</p>
          </button>
          <button className='border bg-emptracky-blue w-24 rounded-md h-8 text-emptracky-fd shadow-md hover:bg-[#5E9CC2] transition-all duration-200'>
            <p>Add</p>
          </button>
        </div>
      </div>
    </DashboardElement>
  );
}