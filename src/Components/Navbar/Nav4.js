import React from 'react'
import Search from '../../img/search.svg'
import Keranjang from '../../img/keranjang.svg'
import Notif from '../../img/notif.svg'
import Line from '../../img/line.svg'
import Hamburger from '../../img/hamburger.svg'
import Foto1 from '../../img/foto1.png'
import Foto2 from '../../img/foto2.png'
import { NavLink } from 'react-router-dom'
import User1 from '../../img/user1.svg'
import Chart from '../../img/Chart'
import User3 from '../../img/User3'
import Wislist from '../../img/Wislist';
import Keluar from '../../img/Keluar'
import Pencil from '../../img/Pencil'
import Centang from '../../img/Centang'
import Logout from '../Logout'
import { useGlobal } from '../../context/GlobalContext'


const Nav = () => {

    const { dataProfile, formatRupiah, dataListKeranjang } = useGlobal()

    return (
        <header className='mx-auto z-10 fixed w-full bg-putih drop-shadow-5xl '>
            <div className=" flex items-center justify-between px-16 py-8 ">
                <div className=" flex">
                    <NavLink to='/dashboardPNJL'><h1 className=' tracking-wider font-Cinzel font-black text-utama text-xl'>Warung<span className=' text-kedua'>Ku</span></h1></NavLink>
                </div>
                <div className=" flex items-center ">
                    <div className=" flex items-center relative">
                        <input type="text" placeholder='Cari di WarungKu...' className=' border rounded-l-lg border-keempat w-[596px] font-DMSans text-xs text-kedua placeholder:text-ketiga focus:placeholder:text-keempat py-2 pl-4 focus:outline-none'/>
                        <button className=' absolute w-8 h-full flex items-center justify-center right-0 rounded-r-lg bg-utama'>
                            <img src={Search}/>
                        </button>
                    </div>
                </div>
                <div className=" flex items-center gap-4 ">
                    <button className=' group'>
                        <img className=' group-hover:bg-keempat rounded py-1 px-2' src={Keranjang}/>
                        <div className=" hidden absolute right-44 group-hover:block pt-4 ">
                            <div className=' bg-putih drop-shadow-6xl rounded-b-lg block font-DMSans px-4 py-3'>
                                <div className=" flex items-end gap-44">
                                    <h1 className=' font-bold text-sm'>Keranjang ({dataListKeranjang.length})</h1>
                                    <NavLink to='/lihatsekarang'><h1 className=' text-utama font-bold text-xs hover:underline'>Lihat Sekarang</h1></NavLink>
                                </div>
                                {
                                    dataListKeranjang?.map((value, i) => {
                                        return (
                                            <div className=" flex flex-col">
                                                <div className=" border border-keempat mt-2 w-full rounded-full"></div>
                                                <div className=" flex justify-between items-end pt-2 group/edit">
                                                    <div className=" flex gap-3">
                                                        <div className=" w-14 h-14 rounded-sm overflow-hidden">
                                                            <img className=' w-full h-full' src={value.gambar_barang}/>
                                                        </div>
                                                        <div className=" flex flex-col justify-between">
                                                            <h1 className=' text-xs font-bold max-w-[170px] text-start group-hover/edit:text-utama duration-300 ease-in-out'>{value.nama_barang}</h1>
                                                            <h1 className=' text-[10px] text-start'>{value.jumlah_beli} Barang</h1>
                                                        </div>
                                                    </div>
                                                    <h1 className=' text-xs font-bold text-utama'>{formatRupiah(value.harga_total)}</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </button>
                    <button>
                        <img src={Notif} />
                    </button>
                    <span>
                        <img src={Line} />
                    </span>
                    <button className=' group'>
                        <img className=' group-hover:bg-keempat rounded py-1 px-2' src={Hamburger}/>
                        <div className=" hidden absolute right-16 group-hover:block pt-4 ">
                            <div className=' bg-putih drop-shadow-6xl rounded-b-lg block font-DMSans px-4 py-3'>
                                <div className=" flex items-start justify-center gap-4">
                                    <button className=' w-10 h-10 rounded-full '>
                                        <img className=' w-full h-full' src={User1}/>
                                    </button>
                                    <div className=" flex flex-col">
                                        <h1 className=' font-semibold text-sm'>{dataProfile.username}</h1>
                                        <NavLink to='/EditProfile2'><div className=" flex items-center text-start gap-1 group/2 decoration-utama">
                                            <Pencil/>
                                            <h1 className=' group-hover/2:underline decoration-utama text-xs'>Edit Profile</h1>
                                        </div></NavLink>
                                    </div>
                                </div>
                                <div className=" flex flex-col pt-5 gap-2">
                                    <div className=" flex items-center gap-3 py-1 hover:bg-utama rounded group/1">
                                        <Chart/>
                                        <h1 className=' text-sm group-hover/1:text-putih text-ketiga'>Beranda</h1>
                                    </div>
                                    <NavLink to='/EditProfile2'><div className=" flex items-center gap-3 py-1 hover:bg-utama rounded group/1">
                                        <User3/>
                                        <h1 className=' text-sm group-hover/1:text-putih text-ketiga'>Profil Saya</h1>
                                    </div></NavLink>
                                    <NavLink to='/ProdukSaya'><div className=" flex items-center gap-3 py-1 hover:bg-utama rounded group/1">
                                        <Wislist/>
                                        <h1 className=' text-sm group-hover/1:text-putih text-ketiga'>Produk Saya</h1>
                                    </div></NavLink>
                                    <NavLink to='/ProdukTerjual'><div className=" flex items-center gap-3 py-1 hover:bg-utama rounded group/1">
                                        <Centang />
                                        <h1 className=' text-sm group-hover/1:text-putih text-ketiga'>Produk Terjual</h1>
                                    </div></NavLink>
                                    <span className=' rounded-full border-b border-keempat flex'></span>
                                    <Logout />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Nav