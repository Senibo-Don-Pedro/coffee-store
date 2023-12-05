const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-backgroundColor to-brightColor text-black rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">BrewHaven</h1>
          <p className="text-sm">
            Every Cup Tells A Story. Welcome to our coffee haven! Explore our
            aromatic brews today!
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Products
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Espresso
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Espresso
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Espresso
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Senibodonpedro@gmail.com
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              +2348080758943
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">@Copyright (c)</p>
      </div>
    </div>
  )
}

export default Footer
