/* eslint-disable react/prop-types */
const Button = ( {title, onClick, styleUi, children } ) => {
  return (
    <button onClick={onClick} className={`border px-3 py-2 rounded-3xl shadow-md hover:opacity-90 transition-all duration-200 ${styleUi}`}>
      <p>{title}</p>
      {children}
    </button>
  )
}

export default Button