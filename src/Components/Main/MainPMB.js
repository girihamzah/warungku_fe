import React from 'react'
import Banner from '../../img/banner.png'
import Arrowleft from '../../img/arrowleft.svg'
import Arrowright from '../../img/arrowright.svg'
import CardD from '../Card/CardD'
import Card2 from '../Card/Card2'
import Foto1 from '../../img/foto1.png'
import Foto2 from '../../img/foto2.png'
import Beras from '../../img/beras.png'
import { useGlobal } from '../../context/GlobalContext'
import MainKategori from './MainKategori'

const MainPMB = () => {

    const { dataListKategori, dataBarangDb, idKategori, setIdKategori } = useGlobal()

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
            { style: 'currency', currency: 'IDR' }
        ).format(money)
    }

    return (
        <div className=' mx-auto'>
            <div className=" px-24 pt-32 font-DMSans">
                <div className=" w-full h-64 flex relative group cursor-pointer">
                    <div className=" flex items-center opacity-0 group-hover:opacity-100 duration-300 ease-out">
                        <button className=' hover:w-12 hover:h-12 left-0 duration-300 ease-in group-hover:-left-6 absolute w-10 h-10 rounded-full bg-putih drop-shadow-8xl flex items-center justify-center'>
                            <img  src={Arrowleft}/>
                        </button>
                    </div>
                    <img className=' w-full h-full rounded-lg object-cover' src={Banner}/>
                    <div className=" flex items-center opacity-0 group-hover:opacity-100 duration-300 ease-out">
                        <button className=' hover:w-12 hover:h-12 right-0 duration-300 ease-in group-hover:-right-6 absolute w-10 h-10 rounded-full bg-putih drop-shadow-8xl flex items-center justify-center'>
                            <img src={Arrowright}/>
                        </button>
                    </div>
                </div>
                <div className=" mt-8 px-5 rounded-lg bg-putih drop-shadow-7xl">
                    <div className=" w-full pt-6">
                        <h1 className=' font-bold text-xl'>Kategori Pilihan</h1>
                    </div>
                    <div className=" py-8">
                        <div className=" grid grid-cols-5 gap-10 ">
                            {
                                dataListKategori?.map((value, i) => {
                                    return (
                                        <>
                                            <CardD 
                                            key = {i}
                                            gambar = {value.gambar_barang}
                                            link = "/kategori"
                                            title = {value.nama_kategori} 
                                            onClick = {_ => setIdKategori(value.id_kategori)}
                                            />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col pt-8">
                    <div className=" flex items-center gap-4">
                        <h1 className=' font-bold text-xl'>Produk Rekomendasi</h1>
                        <h1 className=' hover:underline cursor-pointer text-utama text-sm'>Lihat semua</h1>
                    </div>
                    <div className=" grid grid-cols-4 gap-9 pt-8">
                        {
                            dataBarangDb?.map((value, i) => {
                                return (
                                    <Card2
                                    key={i}
                                    link2 = "/detail"
                                    foto = {value.gambar_barang}
                                    name = {value.nama_barang}
                                    harga = {formatRupiah(value.harga_barang)} />
                                )
                            })
                        }
                    </div>
                    <div className="pt-8 flex justify-center items-center">
                        <button className=' bg-utama text-putih py-4 px-16 rounded-lg font-bold hover:bg-opacity-95'>Muat Lebih Banyak</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPMB