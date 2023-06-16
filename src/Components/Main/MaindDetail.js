import React from 'react'
import Foto1 from '../../img/foto1.png'
import { NavLink } from 'react-router-dom';

const MaindDetail = () => {
    return (
        <div className=' mx-auto'>
            <div className=" px-24 pt-32 font-DMSans">
                <div className=" flex justify-between items-start">
                    <div className=" flex">
                        <span className=' w-64 h-72'>
                            <img className=' rounded w-full h-full' src= {Foto1}/>
                        </span>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <h1 className=' font-bold text-2xl'>Minyak Goreng Murah Bimoli,Sania</h1>
                        <h2 className=' text-utama font-bold text-2xl'>Rp 46.000</h2>
                        <div className=" flex flex-col gap-5">
                            <div className=' border-y border-keempat flex items-center w-full gap-5 py-2'>
                                <h1 className=' text-utama text-center underline hover:underline underline-offset-[14px] cursor-pointer decoration-utama hover:text-utama duration-150 ease-in-out'>Detail</h1>
                                <h1 className=' text-[#9F9F9F] text-center hover:underline underline-offset-[14px] cursor-pointer decoration-utama hover:text-utama duration-150 ease-in-out'>Info Penting</h1>
                            </div>
                            <div className=" max-w-sm text-[#9F9F9F]">
                                <h1>Kondisi: Baru</h1>
                                <h1>Berat Satuan: 900 g</h1>
                                <h1>Kategori: Minyak</h1>
                                <h1>Etalase: minyak</h1>
                                <span>minyak goreng harumas 1 litermurah,terjangkau,silakan order!!😄😄 stoknya ada 24,produk baru,mumpung masih hangat!!!catatan:barang baru,bagus, pengemasan memakai plastik/bubble wrap,dengan kardus.pengiriman aman, apabila ada kerusakan selama pengiriman maka diluar tanggung jawab kami.Tidak ada pengembalian,kecuali kesalahan dari toko kami.mohon diperhatikan ya!! 🙏🙏</span>
                            </div>
                        </div>
                    </div>
                    <div className=" w-60 drop-shadow-7xl h-fit bg-putih rounded p-5">
                        <div className=" flex justify-between items-center text-xs text-kedua">
                            <h1 className=' text-sm'>Subtotal</h1>
                            <h1 className=' text-xs font-bold text-utama'>Rp.46.000</h1>
                        </div>
                        <div className=' border border-keempat rounded-full my-3'></div>
                        <div className=" flex flex-col items-center justify-center gap-3">
                            <button className=' text-center text-xs rounded py-3 w-full hover:bg-opacity-95 bg-utama font-bold text-putih'>+Keranjang</button>
                            <NavLink to='/pembayaran' className=' text-center text-xs rounded py-3 w-full border border-utama font-bold text-utama'>Beli Langsung</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaindDetail