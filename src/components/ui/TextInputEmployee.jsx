/* eslint-disable react/prop-types */
const TextInputEmployee = ({ title, setValue, type }) => {
  return (
    <div className='w-full'>
      <h1>{title}</h1>
      <input onChange={(e) => setValue(e.target.value)} type={type} className='border border-emptracky-darkgray w-full rounded-md h-8 bg-emptracky-fd px-2' />
    </div>
  )
}

export default TextInputEmployee