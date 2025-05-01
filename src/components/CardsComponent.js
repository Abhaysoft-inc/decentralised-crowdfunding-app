import React from 'react'

const CardsComponent = ({ image }) => {
    return (
        <div>
            <div className="bg-gray-100 h-[440px] rounded shadow-lg shadow-black px-2 py-2">
                <img src={image} className='h-52 w-full object-cover' alt="" />

                <p className="title mt-2 text-xl font-bold sansation-regular mx-1 ">Money for education for poors</p>
                <p className="text-[11px] mx-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, laudantium.
                </p>

                <p className="text-md mx-1 mt-3 font-semibold">Amount Raised:</p>
                <div className="flex justify-between mx-1">
                    <p className="currentamt text-sm mt-2">$500</p>
                    <p className="requiredAmount">$20000</p>
                </div>
                <div className="progressbar bg-white w-full h-2 mt-2 rounded-full mx-1">
                    <div className="progress bg-blue-500 w-[10%] h-full rounded-full"></div>

                </div>

                <button className="w-full mt-6 bg-blue-500 text-white rounded py-2 cursor-pointer">
                    Contribute
                </button>


            </div>
        </div>
    )
}

export default CardsComponent