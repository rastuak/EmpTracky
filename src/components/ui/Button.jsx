/* eslint-disable react/prop-types */
const Button = ( {title, onClick, textColor, bgColor, children } ) => {
  return (
    <button onClick={onClick} className={`w-full border bg-${bgColor} px-3 py-2 rounded-md text-${textColor} shadow-md hover:opacity-90 transition-all duration-200`}>
      <p>{title}</p>
      {children}
    </button>
  )
}

export default Button