import React from "react"
import ReviewCard from "../layouts/ReviewCard"
import face1 from "../assets/face1.png"
import face2 from "../assets/face2.png"

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24">
        Customer's Reviews
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8 ">
        <ReviewCard img={face1} title="John Snow" />
        <ReviewCard img={face2} title="Aboki Malay" />
        <ReviewCard img={face1} title="Aminu Suraji" />
      </div>
    </div>
  )
}

export default Review
