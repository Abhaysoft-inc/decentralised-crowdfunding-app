import Navbar from '@/components/Navbar'
import React from 'react'

const AboutPage = () => {
    return (

        <>
            <div className="mx-10 mt-3">

                <Navbar />

                <div className="about mt-6 bg-white px-10 py-6 h-full rounded-lg mb-10">
                    <p className="text-2xl font-semibold">About DeCrowFund</p>

                    <p className="mt-10 mb-10">
                        At <b>DeCrowFund</b> , we believe that powerful ideas deserve a chance to thrive. Whether it’s a groundbreaking product, a creative project, or a life-changing cause, our mission is to connect passionate creators with a supportive global community ready to bring their visions to life. <br /><br />

                        Founded on the principles of transparency, trust, and innovation, <b>DeCrowFund</b> is more than just a crowdfunding platform — it's a launchpad for dreams. We provide creators with the tools, resources, and exposure they need to tell their story, reach their goals, and build lasting relationships with their backers.
                        <br /><br />
                        With secure transactions, a user-friendly interface, and a commitment to community success, we’ve helped fund 10+ projects and raise $5000+ across 5 countries — and we're just getting started.

                        Join us in empowering ideas, one project at a time.
                    </p>
                </div>
            </div>
        </>

    )
}


export default AboutPage