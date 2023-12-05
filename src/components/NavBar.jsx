import { FaCoffee } from "react-icons/fa"
import { Link } from "react-scroll"
import Button from "../layouts/Button"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai"

const NavBar = () => {
  const navLinks = [
    { title: "Home" },
    { title: "Menu" },
    { title: "About Us" },
    { title: "Reviews" },
  ]

  const [menu, setMenu] = useState(false)

  function menuChange() {
    setMenu(!menu)
  }

  function closeMenu() {
    setMenu(false)
  }

  const displayNav = navLinks.map((link) => (
    <Link
      key={link.title}
      to={link.title}
      spy
      smooth
      duration={500}
      className="group relative cursor-pointer hover:text-brightColor"
      onClick={closeMenu}
    >
      {link.title}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
    </Link>
  ))

  // mobileNav = navLinks.map((link) => {})

  return (
    <header className=" fixed w-full z-50">
      <div>
        <div className=" flex justify-between items-center p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-lg">
          <div className="flex items-center cursor-pointer gap-2">
            <span>
              <FaCoffee />
            </span>
            <h1 className=" text-xl font-medium">BrewHaven</h1>
          </div>
          <div className="hidden md:block text-lg font-medium">
            <nav className="md:flex flex-row items-center gap-8">
              {displayNav}
            </nav>
          </div>
          <div className="hidden lg:flex">
            <Button>Login</Button>
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={23} onClick={menuChange} />
            ) : (
              <AiOutlineMenuUnfold size={23} onClick={menuChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {displayNav}
          <div>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
