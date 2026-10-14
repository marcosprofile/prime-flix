import "./button.css"

export const Button = ({ variant, children, size, onClick, full = false }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      data-variant={variant}
      data-size={size}
      style={{ "width": full ? "100%" : "max-content"}}
    >
      {children}
    </button>
  )
}
