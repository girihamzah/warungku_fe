import React from 'react'
import CardT from '../Card/CardT'
import Foto6 from '../../img/foto6.jpeg'
import Plus from '../../img/Plus';

const MainTerjual = () => {
    return (
        <div className=' mx-auto'>
            <div className=" px-24 pt-[180px] font-DMSans">
                <div className=" border-b pb-4 border-b-ketiga w-full justify-between flex items-center">
                    <h1 className=' cursor-pointer text-utama  hover:underline underline underline-offset-[22px]'>Semua</h1>
                    <h1 className=' cursor-pointer text-ketiga hover:underline underline-offset-[22px] hover:text-utama'>Makanan Pokok</h1>
                    <h1 className=' cursor-pointer text-ketiga hover:underline underline-offset-[22px] hover:text-utama'>Bumbu Dapur</h1>
                    <h1 className=' cursor-pointer text-ketiga hover:underline underline-offset-[22px] hover:text-utama'>Kesehatan</h1>
                    <h1 className=' cursor-pointer text-ketiga hover:underline underline-offset-[22px] hover:text-utama'>Minuman</h1>
                    <h1 className=' cursor-pointer text-ketiga hover:underline underline-offset-[22px] hover:text-utama'>Perlengkapan Mandi</h1>
                </div>

                <div className=" relative overflow-x-auto mt-6">
                    <table className=' w-full text-left rounded-full border border-ketiga'>
                        <thead className=' bg-ketiga text-putih w-full'>
                            <tr>
                                <th className=' px-6 py-2'>Produk</th>
                                <th className=' px-6 py-2'>Terjual</th>
                                <th className=' px-6 py-2'>Harga</th>
                                <th className=' px-6 py-2'>Total</th>
                            </tr>
                        </thead>
                        <CardT 
                        produk={Foto6}
                        terjual="x10"
                        harga="20.000"
                        total="30000"/>
                        <CardT 
                        produk={Foto6}
                        terjual="x10"
                        harga="20.000"
                        total="30000"/>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MainTerjual