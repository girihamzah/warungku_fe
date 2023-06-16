import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const CardD = (props) => {
    return (
        // <Link to={props.link}>
            <div onClick={props.onClick} className=" w-full h-full flex flex-col items-center justify-center border-keempat rounded-lg border py-6">
                <span className=' w-16 h-24'>
                    <img className=' w-full h-full' src={props.gambar}/>
                </span>
                <h1 className=' pt-4 font-bold text-xs'>{props.title}</h1>
            </div>
        // </Link>
    )
}

export default CardD