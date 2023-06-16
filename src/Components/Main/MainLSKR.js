import React from 'react'
import Foto1 from '../../img/foto1.png'
import Foto2 from '../../img/foto2.png'
import ButtonMin from '../../img/ButtonMin'
import ButtonPlus from '../../img/ButtonPlus';
import Line2 from '../../img/line2.svg'
import Trash from '../../img/trash.svg'
import User1 from '../../img/user1.svg'
import { NavLink } from 'react-router-dom';
import { useGlobal } from '../../context/GlobalContext';

const MainLSKR = () => {

    const { formatRupiah, dataListKeranjang } = useGlobal()

    return (
        <div className=' mx-auto w-full'>
            <div className=" flex flex-wrap px-24 font-DMSans">
                <div className=" flex w-9/12 pt-[180px]">
                    <div className=" w-full">
                        <div className=" flex items-center">
                            <input id="draft" className="peer/draft w-5 h-5 checked:accent-putih  " name='status' type="checkbox" />
                            <label for="draft" className=" ml-5 text-sm select-none">Pilih Semua</label>
                        </div>
                        <div className=" pt-8 flex flex-col gap-12 pr-20">
                            {
                                dataListKeranjang?.map((value, i) => {
                                    return (
                                        <div className=" flex">
                                            <div className=" pr-5 pt-[102px]">
                                                <input id="draft" className="peer/draft w-5 h-5 checked:accent-putih  " name='status' type="checkbox" />
                                            </div>
                                            <div className=" bg-putih drop-shadow-7xl rounded w-full">
                                                <div className="px-5 py-3 border-b flex items-center gap-3 border-keempat">
                                                    <span className=' w-5 h-5 rounded-full'>
                                                        <img src={User1}/>
                                                    </span>
                                                    <h1 className='text-xs font-bold'>{value.nama_penjual}</h1>
                                                </div>
                                                <div className=" flex items-center justify-between px-5 py-11">
                                                    <div className=" flex items-center">
                                                        <span className=' w-12 h-12'>
                                                            <img className=' w-full h-full' src={value.gambar_barang}/>
                                                        </span>
                                                        <div className=" flex flex-col pl-4 gap-1">
                                                            <h1 className=' text-xs font-bold'>{value.nama_barang}</h1>
                                                            <h1 className=' text-xs font-bold'>{formatRupiah(value.harga_barang)}</h1>
                                                        </div>
                                                    </div>
                                                    <div className=" flex items-center">
                                                        <div className=" flex items-center gap-3">
                                                            <div className=" flex">
                                                                <button><ButtonMin /></button>
                                                                <div className=' flex flex-col items-center justify-end'>
                                                                    <h1 className=' text-xs'>{value.jumlah_beli}</h1>
                                                                    <div className=' w-12 border border-keempat rounded-full'></div>
                                                                </div>
                                                                <button><ButtonPlus /></button>
                                                            </div>
                                                            <img src={Line2}/>
                                                            <button><img src={Trash}/></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className=" flex w-3/12 pt-[232px]">
                    <div className=" w-full drop-shadow-7xl h-fit bg-putih rounded p-5">
                        <h1 className=' font-bold text-sm'>Ringkasan Belanja</h1>
                        <div className=" flex justify-between text-xs pt-3 text-kedua">
                            <h1>Total barang (2 barang)</h1>
                            <h1>Rp.46.000</h1>
                        </div>
                        <div className=' border border-keempat rounded-full my-3'></div>
                        <div className=" flex items-center justify-center">
                            <NavLink to="/pembayaran" className=' text-center rounded py-2 w-full hover:bg-opacity-95 bg-utama font-bold text-md text-putih'>Beli(2)</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLSKR