import React from 'react'


const Card3 = (props) => {
    return (
        <div className=" bg-putih shadow-sm p-4">
            <div className=" flex justify-between">
                <div className=" flex items-center gap-4">
                    <span className=' w-16 h-16 '>
                        <img className=' w-full h-full' src={props.foto}/>
                    </span>
                    <div className=" flex flex-col gap-2">
                        <h1>{props.judul}</h1>
                        <h2 className=' text-sm'>{props.jumblah}</h2>
                    </div>
                </div>
                <div className=" flex items-center gap-4">
                    <div className=" flex flex-col gap-1 items-start">
                        <h1 className=' text-kedua'>Total harga</h1>
                        <h2 className=' text-utama text-sm'>{props.harga}</h2>
                    </div>
                    <div className=" flex flex-col gap-1 border-l border-keempat pl-4 items-start">
                        <h1 className=' text-kedua'>Status Pengiriman</h1>
                        <button className=' bg-utama text-putih px-3 py-1 rounded-sm hover:opacity-95 text-xs'>Lacak</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3