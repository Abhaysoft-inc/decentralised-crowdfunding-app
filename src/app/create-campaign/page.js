"use client"

import axios from 'axios'
import { ethers } from 'ethers';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import abi from '@/app/ABI.json'
import Router, { useRouter } from 'next/navigation';


const CreateCampaignPage = () => {
    // console.log(abi)
    const router = useRouter();

    const contractAddress = "0x4Ba6aEAa4CAC4372542aE21E23F98571cD9BA8B4";
    const appwrite_api_endpoint = "https://fra.cloud.appwrite.io/v1";


    const [File, setFile] = useState("");
    const [campaignName, setcampaignName] = useState("")
    const [campaignGoal, setcampaignGoal] = useState("")
    const [info, setinfo] = useState("");
    const [Loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(File);


        try {
            setLoading(true)
            const uniqueId = 'campaign_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);


            // saving data to blockchain

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const contractInstance = new ethers.Contract(contractAddress, abi, signer);
            const newCampaign = await contractInstance.createCampaign(campaignName, campaignGoal);
            const confirmation = await newCampaign.wait();
            console.log("Your campaign is successfully listed");
            console.log(newCampaign, confirmation);



            // Uploading image to IPFS

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
            const imageURL = await "https://bronze-payable-wildebeest-639.mypinata.cloud/ipfs/" + response.data.IpfsHash;
            console.log(imageURL);


            // uploading data to database

            const appwriteResponse = await axios({
                method: "post",
                url: "https://fra.cloud.appwrite.io/v1/databases/68166aa50016fc88f31e/collections/68166b3200261be321e5/documents",
                headers: {
                    "X-Appwrite-Project": process.env.NEXT_PUBLIC_PROJECT_ID,
                    "Content-Type": "application/json",
                    "X-Appwrite-Key": process.env.NEXT_PUBLIC_API_APPWRITE,
                },
                data: {
                    documentId: uniqueId,
                    data: {
                        campaignName: campaignName,
                        campaignGoal: parseInt(campaignGoal),
                        moreInfo: info,
                        imageURL: imageURL,
                        walletAddress: signer.address,
                        txHash: confirmation.hash,

                    }

                }

            });

            console.log(appwriteResponse);
            setLoading(false)
            alert("Campaign Creation Successfull!");
            router.push('/');


        } catch (error) {
            console.log(error)

        }
    }

    function goHome() {
        router.push('/')
    }
    return (


        <>
            {/* <div className=''>
                <input multiple type="file" name="file" id="file" className='bg-blue-900 mt-10' onChange={(e) => {
                    setFile(e.target.files);
                }} />
                <button className='bg-blue-900 mx-10' onClick={handleSubmit}>Upload File</button>
            </div> */}
            <div className="mt-6 mx-10">
                <Link href={'/'}>
                    <IoMdArrowRoundBack size={28} className='cursor-pointer' onClick={goHome} /></Link>

                {/* <Navbar /> */}
                <div className="flex justify-center items-center min-h-screen">

                    <div className="bg-white w-fit px-6 py-4 rounded">
                        <p className="text-xl ">Create Campaign</p>
                        <p className="text-sm text-gray-700 mt-1.5">Please ensure that all details are correct.</p>
                        <hr className='mt-3 bg-gray-200 border-0.5 dark:bg-gray-700' />

                        <div className="main mt-6">
                            <p className="text-[15px]">Campaign Name</p>
                            <input type="text" className='border w-full mt-1.5 px-2 py-1 rounded border-gray-300' placeholder='' onChange={(e) => { setcampaignName(e.target.value) }} name='campaignName' />

                            <p className="text-[15px] mt-3">Required Amount (USD)</p>
                            <input type="number" className='border w-full mt-1.5 px-2 py-1 rounded border-gray-300' placeholder='' onChange={(e) => { setcampaignGoal(e.target.value) }} name='campaignGoal' />

                            <p className="text-[15px] mt-3">More Info</p>
                            <textarea type="text" className='border w-full mt-1.5 px-2 py-1 rounded border-gray-300' placeholder='' onChange={(e) => { setinfo(e.target.value) }} name='moreInfo' />

                            <p className="text-[15px] mt-3">Upload Supporting Documents</p>

                            <input type="file" name="file" id="" className='mt-3 bg-gray-100 w-full px-10 py-2 rounded cursor-pointer' onChange={(e) => { setFile(e.target.files[0]) }} />

                            <button className='text-center flex justify-center w-full mt-6 bg-blue-600 text-white py-2 rounded cursor-pointer' onClick={handleSubmit} >
                                {
                                    Loading ? "Creating Campaign...." : "Create Campaign"
                                }


                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CreateCampaignPage