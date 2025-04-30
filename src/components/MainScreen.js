import React from 'react'
import CardsComponent from './CardsComponent'

const MainScreen = () => {
    return (
        <>

            <div className="grid grid-cols-3 py-3 gap-3 mx-2 space-y-2.5">
                <CardsComponent />
                <CardsComponent />
                <CardsComponent />
                <CardsComponent />



            </div>
        </>
    )
}

export default MainScreen