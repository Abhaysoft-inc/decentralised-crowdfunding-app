import React from 'react'

const CardsComponent = ({ image }) => {
    return (
        <div>
            <div className="bg-gray-200 h-96 rounded shadow-lg px-2 py-2">
                <img src={image} className='h-52 w-full object-cover' alt="" />

            </div>
        </div>
    )
}

export default CardsComponent