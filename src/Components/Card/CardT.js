import React from 'react'

const CardT = (props) => {
    return (
        <tbody>
            <tr className=' border-b border-b-ketiga'>
                <td><img className=' px-6 py-4 rounded-md w-h-40 h-40' src={props.produk}/></td>
                <td className=' px-6 py-4 text-sm'>{props.terjual}</td>
                <td className=' px-6 py-4 text-sm'>Rp. {props.harga}</td>
                <td className=' px-6 py-4 text-sm'>Rp. {props.total}</td>
            </tr>
        </tbody>
    )
}

export default CardT