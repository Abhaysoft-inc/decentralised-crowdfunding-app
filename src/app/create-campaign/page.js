"use client"
import axios from 'axios'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";


const CreateCampaignPage = () => {
    const [File, setFile] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(File);

        try {
            const data = new FormData();
            data.set("file", File);

            const response = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: data,
                headers: {
                    pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
                    pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
                }
            });
            console.log("https://bronze-payable-wildebeest-639.mypinata.cloud/ipfs/" + response.data.IpfsHash);

        } catch (error) {
            console.log(error)

        }
    }




    return (
        // <div className=''>
        //     <input type="file" name="file" id="file" className='bg-blue-900 mt-10' onChange={(e) => {
        //         setFile(e.target.files[0]);
        //     }} />
        //     <button className='bg-blue-900 mx-10' onClick={handleSubmit}>Upload File</button>
        // </div>

        <>
            <div className="mt-6 mx-10">
                <Link href={'/'}>
                    <IoMdArrowRoundBack size={28} className='cursor-pointer' /></Link>

                {/* <Navbar /> */}
                <div className="flex justify-center items-center min-h-screen">

                    <div className="bg-white w-fit px-6 py-4 rounded">
                        <p className="text-xl ">Create Campaign</p>
                        <p className="text-sm text-gray-700 mt-1.5">Please ensure that all details are correct.</p>
                        <hr className='mt-3 bg-gray-200 border-0.5 dark:bg-gray-700' />

                        <div className="main mt-6">
                            <p className="text-[15px]">Campaign Name</p>
                            <input type="text" className='border w-full mt-1.5 px-2 py-1 rounded border-gray-300' placeholder='' />

                            <p className="text-[15px] mt-3">Required Amount (USD)</p>
                            <input type="number" className='border w-full mt-1.5 px-2 py-1 rounded border-gray-300' placeholder='' />

                            <p className="text-[15px] mt-3">Upload Supporting Documents</p>

                            <input type="file" name="files" id="" className='mt-3 bg-gray-100 w-full px-10 py-2 rounded cursor-pointer' />

                            <button className='text-center flex justify-center w-full mt-6 bg-blue-600 text-white py-2 rounded cursor-pointer'>
                                Create Campaign

                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CreateCampaignPage