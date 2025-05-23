import React, { useState, useEffect } from 'react'
import CardsComponent from './CardsComponent'
import axios from 'axios';

const MainScreen = () => {
    const [campaigns, setCampaigns] = useState([])
    const [loading, setLoading] = useState(true)

    async function getCampaigns() {
        try {
            setLoading(true)
            const response = await axios({
                method: "get",
                url: "https://fra.cloud.appwrite.io/v1/databases/68166aa50016fc88f31e/collections/68166b3200261be321e5/documents",
                headers: {
                    "X-Appwrite-Project": process.env.NEXT_PUBLIC_PROJECT_ID,
                    "Content-Type": "application/json",
                    "X-Appwrite-Key": process.env.NEXT_PUBLIC_API_APPWRITE,
                },
            });

            // Sort campaigns by $createdAt in descending order 
            const sortedCampaigns = response.data.documents.sort((a, b) => {
                return new Date(b.$createdAt) - new Date(a.$createdAt);
            });

            setCampaigns(sortedCampaigns);
            console.log("Sorted campaigns:", sortedCampaigns);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCampaigns();
    }, [])

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-700"></div>
                </div>
            ) : campaigns.length === 0 ? (
                <div className="text-center py-10 text-gray-500">No campaigns found</div>
            ) : (
                <div className="grid grid-cols-3 py-3 gap-3 mx-2">
                    {campaigns.map((element, index) => (
                        <CardsComponent
                            key={element.$id}
                            image={element.imageURL}
                            campaignTitle={element.campaignName}
                            campaignGoal={element.campaignGoal}
                            // Pass additional props if needed
                            createdAt={element.$createdAt}
                            id={element.$id}
                            moreInfo={element.moreInfo}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default MainScreen