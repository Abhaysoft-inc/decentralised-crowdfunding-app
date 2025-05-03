'use client'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaEthereum } from 'react-icons/fa'

const PopupDonateForm = ({ isOpen = false, onClose = () => { } }) => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donating', amount, 'ETH with message:', message);
        // Add donation logic here
    }

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>

            <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose}></div>

            {/* Form container */}
            <div className="w-[500px] bg-white rounded-lg shadow-xl p-6 z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaEthereum className="text-blue-500" />
                        Make a Donation
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <IoMdClose size={24} className='cursor-pointer' />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                            Amount (ETH)
                        </label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="0.05"
                            step="0.01"
                            min="0.01"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message (Optional)
                        </label>
                        <textarea
                            id="message"
                            placeholder="Add a message of support..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-24 resize-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-3 text-white font-medium bg-gradient-to-r from-pink-700 to-pink-800 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            Donate Now
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            Sepolia ETH accepted only. This transaction will trigger your wallet.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PopupDonateForm