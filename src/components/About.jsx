import React from "react"
import Button from "../layouts/Button"
import Coffee from "../assets/Coffee.jpg"

const About = () => {
  return (
    <div className="sm:min-h-screen flex flex-col items-center justify-start lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-9  mb-8">
        About Us
      </h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img src={Coffee} className="rounded-lg" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>
            At BrewHaven, we are more than just a coffee shop, we're a community
            dedicated to the art of coffee. Our journey began with a simple
            idea: to provide a welcoming space where people can connect over
            exceptional coffee.
          </p>
          <p>
            Learn about our commitment to quality, sustainability, and the
            passion that fuels our baristas.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default About
