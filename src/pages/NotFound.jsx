import { ArrowRight } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-emptracky-blue to-[#B1B1B4] text-emptracky-fd font-medium'>
      <h1 className='text-7xl text-center'>Lost your way?</h1>
      <p className='text-3xl w-1/2 text-center mt-12'>Sorry, we can’t find that page. You’ll find lots to explore on the landing page.</p>
      <button onClick={() => navigate("/")} className='bg-emptracky-blue w-fit h-fit p-2 rounded-xl flex gap-2 mt-16 hover:bg-[#4689B1] hover:text-emptracky-f7 transition-all duration-200'>
        <p>Explore</p>
        <ArrowRight size={26}/>
      </button>
    </div>
  )
}

export default NotFound