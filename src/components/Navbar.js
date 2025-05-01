import React from 'react'

const Navbar = () => {
    return (
        <>

            <div className="navbar h-20 w-full shadow rounded-full bg-white flex justify-between items-center px-10">
                <p className="title text-xl sansation-regular">DeCrowFund</p>
                <ul className="menu flex gap-4 text-md items-center">
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>Contribute</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>About</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>Success Stories</li>
                    <li className='cursor-pointer hover:text-blue-950 hover:ease-in-out'>Contact</li>
                    {/* <li><button className='bg-blue-500 px-4 py-1.5 rounded-full text-white cursor-pointer hover:bg-gradient-to-r from-blue-600 to-violet-600 shadow'>Login</button></li> */}
                    <li><button className='bg-blue-500 px-4 py-1.5 rounded-full text-white cursor-pointer hover:bg-gradient-to-r from-blue-600 to-violet-600 shadow'>Connect Wallet</button></li>

                </ul>



            </div>

        </>
    )
}

export default Navbar