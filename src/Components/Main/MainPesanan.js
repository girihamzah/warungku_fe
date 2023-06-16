import React from 'react'
import Box from '../../img/Box'
import Truck from '../../img/Truck'
import User from '../../img/user1.svg'
import Wislist2 from '../../img/Wislist2'
import Card3 from '../Card/Card3'
import Foto1 from '../../img/foto1.png'
import Foto2 from '../../img/foto2.png'
import { usePembeli } from '../../context/PembeliContext'
import { useLocalStorage } from 'react-use'

const MainPesanan = () => {

    const [dataUser, setDataUser] = useLocalStorage("user")

    const { formatRupiah, pesananDikemas, pesananDikirim, pesananDiterima, visDikemas, setVisDikemas, visDikirim, setVisDikirim, visDiterima, setVisDiterima, } = usePembeli()

    return (
        <div className=' mx-auto'>
            <div className=" px-24 pt-36 font-DMSans">
                <div className=" flex flex-wrap ">
                    <div className=" flex w-1/4">
                        <div className=" w-4/5 h-fit bg-putih drop-shadow-7xl rounded py-3">
                            <div className=" flex flex-col px-4">
                                <div className=" flex items-center gap-5">
                                    <span className=' w-12 h-12'>
                                        <img className=' w-full h-full' src={User} />
                                    </span>
                                    <div className=" flex flex-col">
                                        <h1 className=' text-sm font-bold'>Hamba Allah</h1>
                                        <h1 className=' text-xs'>Kota Bogor</h1>
                                    </div>
                                </div>
                            </div>
                            <span className=' flex w-full border border-keempat rounded-full my-5'></span>  
                            <div className="px-4 gap-5 flex flex-col">
                                <button className=" flex items-center gap-3 group/3">
                                    <Box/>
                                    <h1 className=' group-hover/3:text-utama text-utama'>Dikemas</h1>
                                </button>
                                <button  className=" flex items-center gap-3 group/3">
                                    <Truck/>
                                    <h1 className=' group-hover/3:text-utama text-ketiga'>Dikirim</h1>
                                </button>
                                <button  className=" flex items-center gap-3 group/3">
                                    <Wislist2/>
                                    <h1 className=' group-hover/3:text-utama text-ketiga'>Diterima</h1>
                                </button>
                            </div>                          
                        </div>
                    </div>
                    <div className=" flex w-3/4">
                        <div className=" w-full">
                            <div className=" py-[26px]">
                                <h1 className=' font-bold text-xl'> Daftar Transaksi</h1>
                            </div>
                            <div className=" border border-keempat rounded p-4">
                                <div className=" flex flex-col gap-5">
                                    <h1 className=' font-bold'>Produk Dikemas</h1>
                                        {
                                            pesananDikemas?.map((value, i) => {
                                                return (
                                                    <Card3
                                                        foto = {value.gambar_barang}
                                                        judul= {value.nama_barang}
                                                        jumblah = {value.jumlah_beli}
                                                        harga = {formatRupiah(value.harga_total)}
                                                    />
                                                )
                                            })
                                        }
                                </div>
                            </div>
                            <div className=" border border-keempat rounded p-4">
                                <div className=" flex flex-col gap-5">
                                    <h1 className=' font-bold'>Produk Dikirim</h1>
                                        {
                                            pesananDikirim?.map((value, i) => {
                                                return (
                                                    <Card3
                                                        foto = {value.gambar_barang}
                                                        judul= {value.nama_barang}
                                                        jumblah = {value.jumlah_beli}
                                                        harga = {formatRupiah(value.harga_total)}
                                                    />
                                                )
                                            })
                                        }
                                </div>
                            </div>
                            <div className=" border border-keempat rounded p-4">
                                <div className=" flex flex-col gap-5">
                                    <h1 className=' font-bold'>Produk Diterima</h1>
                                        {
                                            pesananDiterima?.map((value, i) => {
                                                return (
                                                    <Card3
                                                        foto = {value.gambar_barang}
                                                        judul= {value.nama_barang}
                                                        jumblah = {value.jumlah_beli}
                                                        harga = {formatRupiah(value.harga_total)}
                                                    />
                                                )
                                            })
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPesanan