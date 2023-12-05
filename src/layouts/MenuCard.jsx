import React from "react"
import { FaShoppingCart } from "react-icons/fa"

const MenuCard = ({ Img, title, value }) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg ">
      <div>
        <img src={Img} />
      </div>

      <div>
        <div>
          <h3>{title}</h3>
          <h3>{value}</h3>
        </div>
        <div>
          <div>
            <button>Hot</button>
            <button>Cold</button>
          </div>
          <span>
            <FaShoppingCart size={20} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
