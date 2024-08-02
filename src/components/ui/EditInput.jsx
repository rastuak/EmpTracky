/* eslint-disable react/prop-types */
export const EditInput = ({ title, type, id, space  }) => {
  const handleSpace = (event) => {
    if (space === false) {
      if (event.key === ' ') {
        event.preventDefault();
      }
      if (type === 'number' && event.key === 'e') {
        event.preventDefault();
      }
    }
  };
  return (
    <div className='flex flex-col gap-0.5 md:gap-2'>
      <label htmlFor={id}>{title}</label>
      <input onKeyDown={handleSpace} className='text-emptracky-darkgray rounded-xl p-2 px-3 md:h-auto h-8' type={type} id={id} />
    </div>
  )
}
