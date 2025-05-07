"use client"
import React, { useEffect, useState } from 'react'
import { IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io'
import { FaXTwitter } from "react-icons/fa6";
import Navbar from '@/components/Navbar';
import { BiSolidDonateHeart } from "react-icons/bi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { VscSparkleFilled } from "react-icons/vsc";
import PopupDonateForm from '@/components/PopupDonateForm';
import { useParams } from 'next/navigation';
import axios from 'axios';

const CampaignPage = () => {
    const params = useParams();
    const campaignId = params.id;
    const value = 0.66;
    const [isDonatePopupOpen, setIsDonatePopupOpen] = useState(false);
    const [fetchedData, setfetchedData] = useState(null);
    const [loading, setloading] = useState(true); // Set initial loading to true

    async function fetchedCampaignDate() {
        try {
            setloading(true);

            const response = await axios({
                method: "get",
                url: `https://fra.cloud.appwrite.io/v1/databases/68166aa50016fc88f31e/collections/68166b3200261be321e5/documents/${campaignId}`,
                headers: {
                    "X-Appwrite-Project": process.env.NEXT_PUBLIC_PROJECT_ID,
                    "Content-Type": "application/json",
                    "X-Appwrite-Key": process.env.NEXT_PUBLIC_API_APPWRITE,
                },
            });

            console.log(response.data);
            setfetchedData(response.data);
        } catch (e) {
            console.log(e);
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        fetchedCampaignDate();
    }, [campaignId]);

    // Show loading state
    if (loading) {
        return (
            <>
                <div className="mx-10 mt-6">
                    <Navbar />
                </div>
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-700"></div>
                </div>
            </>
        );
    }

    // Show error state if data wasn't loaded
    if (!fetchedData) {
        return (
            <>
                <div className="mx-10 mt-6">
                    <Navbar />
                </div>
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-8 py-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">Campaign Not Found</h2>
                        <p>We couldn't find the campaign you're looking for. It may have been removed or doesn't exist.</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <PopupDonateForm isOpen={isDonatePopupOpen} onClose={() => setIsDonatePopupOpen(false)} />
            <div className="mx-10 mt-6">
                <Navbar />
            </div>

            <div className="flex gap-4 mx-10 mt-6 mb-12">
                <div className="details-section bg-white h-fit w-2/3 px-5 py-6 rounded">
                    <p className="title text-3xl font-semibold">
                        {fetchedData.campaignName}
                    </p>
                    <img src={fetchedData.imageURL} alt="" className='mt-6 rounded w-full h-96 object-cover' />

                    <div className="flex mt-6 justify-between gap-2 ">
                        <button className="bg-green-600 py-2 px-10 rounded flex gap-3 items-center cursor-pointer text-white ">
                            Share on Whatsapp
                            <IoLogoWhatsapp color='white' size={30} />

                        </button>
                        <button className="bg-blue-600 py-2 px-10 rounded flex gap-3 items-center text-white cursor-pointer">
                            Share on Facebookz
                            <IoLogoFacebook color='white' size={30} />

                        </button>
                        <button className="bg-black py-2 px-10 rounded flex gap-3 items-center text-white cursor-pointer">
                            Share on X
                            <FaXTwitter color='white' size={30} />

                        </button>
                    </div>

                    <div className="creator-section flex">




                    </div>

                    <div className="story mt-10">
                        <p className="text-xl">Story</p>
                        <hr className='mt-3' />

                        <p className="mt-6">
                            {fetchedData.moreInfo}
                            {/* {fetchedData.campaignIndexOnChain} */}

                        </p>
                    </div>

                    <div className="supporters mt-6">
                        <p className="text-xl">Supporting Documents</p>

                        <hr className=" mt-4" />

                        <div className="grid grid-cols-3 mt-6 mb-10 gap-6">

                            <img src={
                                fetchedData.imageURL
                            } alt="" />

                            <img src="https://www.recordrs.com/wp-content/uploads/2023/06/img-sample-consolidated-medical-record-summ.jpg" alt="" />

                            <img src="https://www.recordrs.com/wp-content/uploads/2023/06/img-sample-consolidated-medical-record-summ.jpg" alt="" />

                            <img src="https://www.recordrs.com/wp-content/uploads/2023/06/img-sample-consolidated-medical-record-summ.jpg" alt="" />


                        </div>


                    </div>

                    <div className="supporters mt-6">
                        <p className="text-xl">Current Supporters</p>

                        <hr className=" mt-4" />

                        <ul className="list-disc mx-6 mt-4">
                            <li>0x8bD54A059C03D090650e139c501d74c6f162d305 - (20 ETH)</li>
                        </ul>
                    </div>

                </div>

                <div className="donate-section   w-1/3 rounded bg-white px-6 py-4 h-fit pb-5">

                    <div className="flex items-center gap-3">
                        <BiSolidDonateHeart size={24} />
                        <p className="text-2xl">Donate</p>
                    </div>

                    <div className="flex mt-7 mx-2 gap-6 items-center">
                        <div className="w-30">
                            <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} className='' />
                        </div>

                        <div className="">
                            <p className="">Raised</p>
                            <p className="text-lg font-semibold">
                                <span className="text-pink-800 text-xl">ETH 28</span> of ETH {fetchedData.campaignGoal}

                            </p>
                        </div>



                    </div>
                    <button
                        onClick={() => setIsDonatePopupOpen(true)}
                        className="text-white bg-gradient-to-r from-pink-700 to-pink-800 rounded-full w-full mt-6 py-2 text-xl cursor-pointer"
                    >
                        Donate Now!
                    </button>
                    <p className="text-center text-sm mt-2">Sepolia ETH accepted only</p>

                    <div className="ai-summary mt-6">
                        <p className="flex items-center gap-2 font-semibold"><VscSparkleFilled /> AI Summary</p>

                        <p className="text-[14px] desc mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum pariatur, voluptates omnis quas adipisci et iste quos at dolorem.
                        </p>
                    </div>






                </div>

            </div>


        </>
    )
}

export default CampaignPage