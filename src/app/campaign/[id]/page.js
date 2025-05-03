"use client"
import React, { useState } from 'react'
import { IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io'
import { FaXTwitter } from "react-icons/fa6";
import Navbar from '@/components/Navbar';
import { BiSolidDonateHeart } from "react-icons/bi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { VscSparkleFilled } from "react-icons/vsc";
import PopupDonateForm from '@/components/PopupDonateForm';


const CampaignPage = () => {
    const value = 0.66;
    const [isDonatePopupOpen, setIsDonatePopupOpen] = useState(false);

    return (
        <>
            <PopupDonateForm isOpen={isDonatePopupOpen} onClose={() => setIsDonatePopupOpen(false)} />
            <div className="mx-10 mt-6 ">
                <Navbar />
            </div>

            <div className="flex gap-4 mx-10 mt-6 mb-12 ">


                <div className="details-section bg-white h-fit w-2/3 px-5 py-6 rounded">

                    <p className="title text-3xl font-semibold">
                        Help Potta Prashanth Recover from a Life-Threatening Brain Hemorrhage
                    </p>
                    <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1746010597/production/images/campaign/906807/liq0crkyzfm7jm2o6qx2_1746010599.jpg" alt="" className='mt-6 rounded w-full h-96 object-cover' />

                    <div className="flex mt-6 justify-between ">
                        <button className="bg-green-600 py-2 px-10 rounded flex gap-3 items-center cursor-pointer text-white ">
                            Share on Whatsapp
                            <IoLogoWhatsapp color='white' size={30} />

                        </button>
                        <button className="bg-blue-600 py-2 px-10 rounded flex gap-3 items-center text-white cursor-pointer">
                            Share on Facebook
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
                            Dear Friends, Well-Wishers, and Kind Supporters,
                            <br /><br />

                            We, the family of Mr. Potta Prashanth, are reaching out with a heartfelt appeal during one of the most challenging times of our lives. Prashanth, aged 34, is a contract engineer working at AMD and the sole breadwinner of our family. He is also a loving husband and father to our 2-year-old son.
                            <br /><br />

                            On 21 April 2024, our lives were upended when Prashanth suffered a sudden and severe brain hemorrhage—medically termed acute intracerebral hematoma, a form of stroke that causes bleeding within the brain tissue. He was rushed to the hospital and underwent an emergency brain surgery that saved his life. Since then, he has been in the Intensive Care Unit (ICU), where he is showing signs of gradual recovery.
                            <br /><br />

                            However, this is only the beginning of a long and difficult journey.
                            Doctors have advised that in approximately three months, Prashanth will require a second major surgery to reconstruct and reinsert a section of his skull that was removed to relieve pressure during the initial operation. Beyond the surgeries, his rehabilitation will be extensive and prolonged—requiring critical care, physiotherapy, medications, and neuro-rehabilitation to help him regain movement, coordination, and independence.
                        </p>
                    </div>

                    <div className="supporters mt-6">
                        <p className="text-xl">Supporting Documents</p>

                        <hr className=" mt-4" />

                        <div className="grid grid-cols-3 mt-6 mb-10 gap-6">

                            <img src="https://www.recordrs.com/wp-content/uploads/2023/06/img-sample-consolidated-medical-record-summ.jpg" alt="" />

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
                                <span className="text-pink-800 text-xl">ETH 28</span> of ETH 90

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