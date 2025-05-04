"use client";

import CardsComponent from '@/components/CardsComponent';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Client, Databases, Query } from 'appwrite';

const DashboardPage = () => {
    const [address, setaddress] = useState(""); // State for wallet address
    const [campaigns, setCampaigns] = useState([]); // State for campaigns
    const [loading, setLoading] = useState(true); // State for loading
    const router = useRouter();

    const nav = () => {
        router.push('/create-campaign');
    };

    // Initialize Appwrite client
    const client = new Client()
        .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your Appwrite endpoint
        .setProject("68166a8600078d7c085b"); // Your Appwrite project ID

    const databases = new Databases(client);

    useEffect(() => {
        // Get wallet address from localStorage when the component mounts
        const storedAddress = localStorage.getItem("walletAddress");
        setaddress(storedAddress);

        if (storedAddress) {
            fetchUserCampaigns(storedAddress);
        } else {
            setLoading(false); // Stop loading if no wallet address is found
        }
    }, []);

    const fetchUserCampaigns = async (walletAddress) => {
        try {
            setLoading(true);

            // Fetch campaigns created by the current wallet
            const response = await databases.listDocuments(
                "68166aa50016fc88f31e", // Database ID
                "68166b3200261be321e5", // Collection ID
                [
                    Query.equal("walletAddress", walletAddress) // Filter by walletAddress
                ]
            );

            setCampaigns(response.documents || []);
            console.log("User campaigns:", response.documents);
        } catch (error) {
            console.error("Error fetching user campaigns:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mt-6 mx-10">
                <Navbar />
            </div>

            <div className="dashboard mt-7 mx-12 mb-10">
                <div className="flex justify-between">
                    <p className="text-2xl">Your Campaigns</p>
                    <button
                        className="px-6 py-2 rounded-full bg-blue-500 text-white"
                        onClick={nav}
                    >
                        Create Campaign
                    </button>
                </div>

                {loading ? (
                    <div className="mt-10 flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : campaigns.length === 0 ? (
                    <div className="mt-10 bg-white p-10 rounded-md text-center">
                        <p className="text-gray-500 text-lg">You haven't created any campaigns yet.</p>
                        <button
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                            onClick={nav}
                        >
                            Create Your First Campaign
                        </button>
                    </div>
                ) : (
                    <div className="mt-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-6 rounded">
                        {campaigns.map((campaign) => (
                            <CardsComponent
                                key={campaign.$id}
                                id={campaign.$id}
                                image={campaign.imageURL}
                                campaignTitle={campaign.campaignName}
                                campaignGoal={campaign.campaignGoal}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default DashboardPage;