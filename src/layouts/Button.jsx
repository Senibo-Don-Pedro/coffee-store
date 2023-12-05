const Button = ({ children }) => {
  return (
    <button className="px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-3xl">
      {children}
    </button>
  )
}

export default Button
