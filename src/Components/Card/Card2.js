import React from 'react'
import { NavLink } from 'react-router-dom';

const Card2 = (props1) => {
    return (
        <NavLink to={props1.link2}><div className=" w-full h-full bg-putih drop-shadow-7xl pb-5">
            <div className=" flex flex-col justify-between gap-20">
                <div className=" flex flex-col gap-3">
                    <span className=' w-full h-40'>
                        <img className=' w-full h-full rounded-t-lg' src={props1.foto}/>
                    </span>
                    <h1 className=' pl-3 pt-3 font-bold text-xs tracking-wider max-w-[205px]'>{props1.name}</h1>
                </div>
                <div className=" flex items-center">
                    <h1 className=' pl-3 pt-3 font-bold text-utama text-xs tracking-wider max-w-[145px]'>{props1.harga}</h1>
                </div>
            </div>
        </div></NavLink>
    )
}

export default Card2