import React from 'react'

const Sidebar = () => {
    const Categories = [
        "Education",
        "Health",
        "Tech",
        "Skill",
        "Food",
        "Housing"
    ]
    const Countries = [
        "India",
        "USA",
        "UK",
        "Canada",
        "Nepal"
    ]


    return (
        <>
            <div className="sidebar px-2 mt-1 my-10">

                <p className="filter text-xl font-semibold">Filter</p>
                <p className="mt-5 text-md font-[500]">Categories</p>

                <div className="checkboxe mt-2 text-sm">
                    {Categories.map((element, index) => (
                        <div key={index} className="check flex gap-2">
                            <input className='cursor-pointer' type="checkbox" name={element} id={element} />
                            <p className='cursor-pointer'>{element}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-5 text-md font-[500]">Countries</p>

                <div className="checkboxe mt-2 text-sm">
                    {Countries.map((element, index) => (
                        <div key={index} className="check flex gap-2">
                            <input type="checkbox" name={element} id={element} />
                            <p>{element}</p>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Sidebar