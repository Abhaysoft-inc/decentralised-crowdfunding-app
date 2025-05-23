"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const CardsComponent = ({ image, campaignTitle, campaignGoal, id, moreInfo }) => {
    const router = useRouter()

    function viewCampaign() {
        router.push(`/campaign/${id || 'abc-def'}`)
    }

    return (
        <div className="h-full">
            <div className="bg-gray-100 rounded shadow-lg shadow-black px-2 py-2 flex flex-col h-full">
                {/* Fixed height for image section */}
                <div className="h-52 overflow-hidden">
                    <img src={image} className='h-full w-full object-cover' alt="" />
                </div>

                {/* Content with flex-grow to absorb varying heights */}
                <div className="flex-grow flex flex-col">
                    {/* Title with minimum height */}
                    <div className="min-h-[60px] mt-2">
                        <p className="title text-xl font-bold sansation-regular mx-1">{campaignTitle}</p>
                    </div>

                    {/* Description with fixed height and overflow hidden */}
                    <div className="h-10 overflow-hidden mx-1">
                        <p className="text-[11px]">
                            {moreInfo.slice(1, 88) + ' ......'}
                        </p>
                    </div>

                    {/* Stats section with mt-auto to push to bottom of flex container */}
                    <div className="mt-auto">
                        <p className="text-md mx-1 mt-3 font-semibold">Amount Raised:</p>
                        <div className="flex justify-between mx-1">
                            <p className="currentamt text-sm mt-2">${0}</p>
                            <p className="requiredAmount">${campaignGoal}</p>
                        </div>
                        <div className="progressbar bg-white w-full h-2 mt-2 rounded-full mx-1">
                            <div className="progress bg-blue-500 w-[0.1%] h-full rounded-full"></div>
                        </div>

                        <button
                            className="w-full mt-6 bg-blue-500 text-white rounded py-2 cursor-pointer"
                            onClick={viewCampaign}
                        >
                            Contribute
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsComponent