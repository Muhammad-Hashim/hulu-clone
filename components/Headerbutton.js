import React from 'react'

function Headerbutton() {
    return (
        <>
            <div className='text-white text-xs flex gap-4 font-medium   capitalize antialiased' >

                <button className="hover:bg-gray-500 h-8 w-16 ">HOME</button>
                <button className="hover:bg-gray-500 h-8 w-16 " >LIVE</button>
                <button className="hover:bg-gray-500 h-8 w-16 " >TV</button>
                <button className="hover:bg-gray-500 h-8 w-16  " >MOVIES</button>
                <button className="hover:bg-gray-500 h-8 w-16 " >SPORT</button>
                <button className="hover:bg-gray-500 h-8 w-16 " >HUBS</button>
            </div>
        </>
    )
}

export default Headerbutton