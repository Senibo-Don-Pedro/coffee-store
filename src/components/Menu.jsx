import React from "react"
import MenuCard from "../layouts/MenuCard"
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "../assets/index"

const Menu = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>
      <p className="text-center text-lg mb-4 mt-[-2rem] font-bold">
        Indulge in a delightful selection of handcrafted beverages and
        delectable treats. From classic espresso drinks to unique specialty
        concoctions, our menu is designed to satisfy every coffee lover's
        cravings. Explore our menu and discover your new favorite blend.
      </p>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard Img={Img1} title="Espresso" />
        <MenuCard Img={Img2} title="Espresso" />
        <MenuCard Img={Img3} title="Espresso" />
        <MenuCard Img={Img4} title="Espresso" />
        <MenuCard Img={Img5} title="Espresso" />
        <MenuCard Img={Img6} title="Espresso" />
      </div>
    </section>
  )
}

export default Menu
