/* eslint-disable react/prop-types */
export const EditInput = ({ title, type, id  }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id}>{title}</label>
      <input className='text-emptracky-darkgray' type={type} id={id} />
    </div>
  )
}
