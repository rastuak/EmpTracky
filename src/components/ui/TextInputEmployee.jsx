/* eslint-disable react/prop-types */
const TextInputEmployee = ({ title, setValue, type, space }) => {

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0 && type === 'number') {
      e.preventDefault();
    }
  };

  const handleSpace = (event) => {
    if (space === false) {
      if (event.key === ' ') {
        event.preventDefault();
      }
      if ( type === 'number' && ((event.key === 'e') || (event.key === '-')) ) {
        event.preventDefault();
      }
    }
  };
  return (
    <div className='w-full'>
      <h1>{title}</h1>
      <input onPaste={preventPasteNegative} min='0' onKeyDown={handleSpace} onChange={(e) => setValue(e.target.value)} type={type} className='border border-emptracky-darkgray w-full rounded-xl h-7 md:h-10 bg-emptracky-fd px-2' />
    </div>
  )
}

export default TextInputEmployee