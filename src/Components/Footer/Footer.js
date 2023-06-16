import React from 'react'
import Instagram from '../../img/instagram.svg'
import Facebook from '../../img/facebook.svg'
import Twitter from '../../img/twitter.svg'
import Linkedin from '../../img/linkedin.svg'
import VectorF from '../../img/VectorF';

const Footer = () => {
    return (
        <footer className=' mx-auto bg-keenam mt-20 w-full'>
            <div className=" flex items-start justify-between px-24 pt-10 pb-12">
                <div className=" block">
                    <div className=" pb-5">
                        <h1 className=' font-DMSans font-bold text-sm'>Layanan Pelanggan</h1>
                    </div>
                    <div className=" font-DMSans text-sm text-ketujuh flex flex-col gap-2.5">
                        <span>Bantuan</span>
                        <span>Metode Pembayaran</span>
                        <span>Lacak Pesanan Pembeli</span>
                        <span>Lacak Pesanan Penjual</span>
                        <span>Pengambilan Barang & Dana</span>
                    </div>
                </div>
                <div className=" block">
                    <div className=" pb-5">
                        <h1 className=' font-DMSans font-bold text-sm'>Jelajahi WarungKu</h1>
                    </div>
                    <div className=" font-DMSans text-sm text-ketujuh flex flex-col gap-2.5">
                        <span>Bantuan</span>
                        <span>Kebijakan WarungKu</span>
                        <span>Kebijakan Privasi</span>
                        <span>Blog</span>
                        <span>Keamanan & Privasi</span>
                    </div>
                </div>
                <div className=" block">
                    <div className=" pb-5">
                        <h1 className=' font-DMSans font-bold text-sm'>Ikuti Kami</h1>
                    </div>
                    <div className=" font-DMSans text-sm text-ketujuh flex flex-col gap-2.5">
                        <div className=" flex gap-2">
                            <img src={Instagram}/>
                            <span>Instagram</span>
                        </div>
                        <div className=" flex gap-2">
                            <img src={Facebook}/>
                            <span>Facebook</span>
                        </div>
                        <div className=" flex gap-2">
                            <img src={Twitter}/>
                            <span>Twitter</span>
                        </div>
                        <div className=" flex gap-2">
                            <img src={Linkedin}/>
                            <span>LinkedIn</span>
                        </div>
                    </div>
                </div>
                <div className=" block">
                    <div className=" gap-2 flex flex-col">
                        <VectorF/>
                        <h1 className=' text-kedua font-DMSans text-xs text-center'>© WarungKu 2023</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer