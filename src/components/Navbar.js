"use client"
import { ethers } from 'ethers';
import {
    useRouter
} from 'next/navigation'
import React, { useState } from 'react'




const Navbar = () => {
    const router = useRouter()

    const [walletAddress, setWalletAddress] = useState("")

    let signer = null;

    let provider;

    async function connectWalletAndFundraise() {

        if (window.ethereum == null) {
            console.log("Wallet Not installed!");
            provider = ethers.getDefaultProvider();

        }
        else {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            console.log(signer.address)
            await setWalletAddress(signer.address);
            await localStorage.setItem('walletAddress', walletAddress);
            router.push('/create-campaign')


        }




    }




    function goToHome() {
        router.push('/')
    }
    return (
        <>

            <div className="navbar h-20 w-full shadow rounded-full bg-white flex justify-between items-center px-10">
                <p className="title text-xl sansation-regular cursor-pointer" onClick={goToHome}>DeCrowFund</p>
                <ul className="menu flex gap-4 text-md items-center">
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>Contribute</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>About</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>Success Stories</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>Contact</li>
                    {/* <li><button className='bg-blue-500 px-4 py-1.5 rounded-full text-white cursor-pointer hover:bg-gradient-to-r from-blue-600 to-violet-600 shadow'>Login</button></li> */}
                    <li><button className='bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-1.5 rounded-full text-white cursor-pointer shadow' onClick={connectWalletAndFundraise}>Start Fundraiser</button></li>
                    {/* <li><button className='bg-blue-500 px-4 py-1.5 rounded-full text-white cursor-pointer hover:bg-gradient-to-r from-blue-600 to-violet-600 shadow'>Connect Wallet</button></li> */}

                </ul>



            </div>

        </>
    )
}

export default Navbar