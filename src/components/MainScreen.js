import React from 'react'
import CardsComponent from './CardsComponent'

const MainScreen = () => {
    return (
        <>

            <div className="grid grid-cols-3 py-3 gap-3 mx-2 space-y-2.5">
                <CardsComponent image={"https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <CardsComponent image={"https://plus.unsplash.com/premium_photo-1699562353506-374d31991522?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <CardsComponent image={"https://images.unsplash.com/photo-1743630459079-ff40cb544dc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <CardsComponent image={"https://images.unsplash.com/photo-1744375212850-cd9da4c1d24d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />



            </div>
        </>
    )
}

export default MainScreen