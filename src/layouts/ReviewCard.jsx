import React from "react"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { FaQuoteRight } from "react-icons/fa"

const ReviewCard = ({ img, title }) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img src={img} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <div className="flex">
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarHalf className="text-brightColor" />
          </div>
        </div>
        <span className="ml-20">
          <FaQuoteRight className="text-backgroundColor" size={42} />
        </span>
      </div>
      <p>
        "I stumbled upon BrewHaven and was instantly captivated by the inviting
        atmosphere. The aroma of freshly ground beans and the friendly staff
        made my first visit unforgettable. The Ethiopian Yirgacheffe blend was
        an absolute delight, smooth, aromatic, and truly a testament to the
        quality of their beans. My daily coffee ritual has found a new home
        here."
      </p>
    </div>
  )
}

export default ReviewCard
