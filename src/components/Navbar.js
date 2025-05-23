"use client"
import { ethers } from 'ethers';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
    const router = useRouter()
    const [walletAddress, setWalletAddress] = useState("")
    let signer = null;

    async function connectWalletAndFundraise() {
        try {
            if (window.ethereum == null) {
                console.log("Wallet Not installed!");
                alert("Please install MetaMask or another Ethereum wallet");
                return;
            }

            const provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            const address = signer.address;

            console.log("Connected address:", address);

            // Save to state
            setWalletAddress(address);

            // Save directly to localStorage using the address variable, not the state
            localStorage.setItem('walletAddress', address);

            // Navigate to create campaign page
            router.push('/dashboard');

        } catch (error) {
            console.error("Error connecting wallet:", error);
            alert("Failed to connect wallet");
        }
    }

    function goToHome() {
        router.push('/')
    }
    function goToAbout() {
        router.push('/about');
    }
    function goToContact() {
        router.push('/contact')
    }

    function goToStories() {
        router.push('/success-stories');
    }

    function navigateTo(path) {
        router.push(path);
    }


    return (
        <>
            <div className="navbar h-20 w-full shadow rounded-full bg-white flex justify-between items-center px-10">
                <p className="title text-xl sansation-regular cursor-pointer" onClick={goToHome}>DeCrowFund</p>
                <ul className="menu flex gap-4 text-md items-center">
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out' onClick={goToHome}>Contribute</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out' onClick={goToAbout}>About</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out' onClick={goToStories}>Success Stories</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out' onClick={goToContact}>Contact</li>
                    <li>
                        <button
                            className='bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-1.5 rounded-full text-white cursor-pointer shadow'
                            onClick={connectWalletAndFundraise}
                        >
                            Start Fundraiser
                        </button>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Navbar