import React from 'react'
import Bayar from '../../img/bayar.svg'
import User1 from '../../img/user1.svg'
import Foto1 from '../../img/foto1.png'
import { NavLink } from 'react-router-dom'
import Protection from '../../img/protection.svg'

const MainBayar = () => {
    return (
        <div className=' mx-auto'>
            <div className=" flex flex-wrap px-24 font-DMSans pt-32">
                <div className=" flex w-9/12 ">
                    <div className=" flex flex-col gap-8 ">
                        <h1 className=' font-bold text-xl'>Beli Sekarang!</h1>
                        <div className=" flex justify-center items-center bg-keempat p-5 rounded gap-5 bg-gradient-to-t from-[#FFF8E7] to-putih">
                            <img src={Bayar}/>
                            <h1 className=' text-[#7C7C7C] font-bold'>Ini halaman terakhir dari proses belanjamu.Pastikan semua sudah benar, ya. :)</h1>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <h1 className=' font-bold text-base'>Barang yg dibeli</h1>
                            <div className=" flex-col flex gap-1">
                                <div className=" flex items-center gap-3">
                                    <span className=' w-5 h-5'>
                                        <img className=' w-full h-full' src={User1}/>
                                    </span>
                                    <span className=' font-bold'>User 1</span>
                                </div>
                                <h2 className=' text-[11px] text-kedua'>Jakarta Barat</h2>
                            </div>
                            <div className=" flex items-center gap-4">
                                <span className=' w-16 h-16'>
                                    <img className=' rounded w-full h-full' src={Foto1}/>
                                </span>
                                <div className=" flex flex-col">
                                    <h1 className=' text-sm'>Minyak Goreng Murah Bimoli,Sania</h1>
                                    <h2 className=' text-sm font-bold text-utama'>Rp.46.000</h2>
                                </div>
                            </div>
                        </div>
                        <span className=' border-4 rounded-full border-keempat'></span>
                        <div className=" flex flex-col">
                            <h1 className=' pb-3 text-base font-bold'>Pengiriman dan pembayaran</h1>
                            <div className=" flex flex-col border border-keempat p-5 gap-2">
                                <div className=" flex items-center gap-2">
                                    <span className=' rounded text-[10px] py-1 px-2 bg-utama text-putih'>Utama</span>
                                    <h1 className=' text-[10px]'><span className=' font-bold'>Rumah</span> - Aditya Angga (08053635263)</h1>
                                </div>
                                <h1 className=' text-[10px]'>Batutulis, Kec. Bogor Sel., Kota Bogor, Jawa Barat lawanggintung kp sawah RT 04 RW 06 GG Mandiri</h1>
                            </div>
                            <div className=" flex justify-between border border-keempat p-5 ">
                                <div className=" flex flex-col gap-1">
                                    <h1 className=' text-[10px] font-bold'>Pilih Transaksi</h1>
                                    <div className="border border-keempat rounded py-2 px-3 text-[10px] w-full">
                                        <select className=' outline-none' name="" id="">
                                            <option value="">Kuris Rekomendasi (Rp.11.000)</option>
                                            <option value="">Kuris J&T (Rp.11.000)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-1">
                                    <h1 className=' text-[10px] font-bold'>Ongkos Kirim</h1>
                                    <div className="border border-keempat rounded py-2 px-3 text-[10px] w-full">
                                        <select className=' outline-none' name="" id="">
                                            <option value="">Kuris Rekomendasi (Rp.11.000)</option>
                                            <option value="">Kuris J&T (Rp.11.000)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex w-3/12 ">
                    <div className=" w-full drop-shadow-7xl h-fit bg-putih rounded p-5">
                        <h1 className=' font-bold text-sm'>Ringkasan Belanja</h1>
                        <div className=" flex justify-between text-xs pt-3 text-kedua">
                            <h1>Total barang (2 barang)</h1>
                            <h1>Rp.46.000</h1>
                        </div>
                        <div className=' border border-keempat rounded-full my-3'></div>
                        <button className=" flex items-center justify-center rounded py-2 w-full hover:bg-opacity-95 bg-utama gap-1">
                            <img src={Protection} />
                            <NavLink to="" className=' text-center font-bold text-md text-putih'>Bayar</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBayar