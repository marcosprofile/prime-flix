import "./button.css"

export const Button = ({ variant, children, size, onClick }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      data-variant={variant}
      data-size={size}
    >
      {children}
    </button>
  )
}
