import React from "react"
import Button from "../layouts/Button"
import Img from "../assets/coffeeheader.png"

const Home = () => {
  return (
    <section>
      <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-backgroundColor to-brightColor">
        <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
          <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
            Welcome to BrewHaven, where every cup tells a story!{" "}
          </h1>
          <p>
            Immerse yourself in the rich aroma of freshly brewed coffee and
            experience a journey of flavors crafted just for you. Start your day
            right with a perfect cup of coffee from our passionate baristas.
          </p>
          <div className=" flex flex-row gap-6">
            <Button>Add to cart</Button>
            <Button>More Menu</Button>
          </div>
        </div>

        <div className="relative">
          <img src={Img} />
        </div>
      </div>
    </section>
  )
}

export default Home
