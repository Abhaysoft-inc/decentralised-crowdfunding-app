"use client"
import axios from 'axios'
import React, { useState } from 'react'


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
                    pinata_api_key: "fafe2e0756d2b7c1653f",
                    pinata_secret_api_key: "423d75c3f431ffb8dd5faaf5ae25dae7de0383d5699cdd64baa8727f753d765e",
                }
            });
            console.log("https://bronze-payable-wildebeest-639.mypinata.cloud/ipfs/" + response.data.IpfsHash);

        } catch (error) {
            console.log(error)

        }
    }


    return (
        <div className='bg-black h-screen text-red-50 '>
            <input type="file" name="file" id="file" className='bg-blue-900 mt-10' onChange={(e) => {
                setFile(e.target.files[0]);
            }} />
            <button className='bg-blue-900 mx-10' onClick={handleSubmit}>Upload File</button>
        </div>
    )
}

export default CreateCampaignPage