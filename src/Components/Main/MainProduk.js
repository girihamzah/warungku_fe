import React, {useState, useEffect} from 'react'
import Plus from '../../img/Plus'
import Card4 from '../Card/Card4'
import Foto3 from '../../img/foto3.jpeg'
import Foto4 from '../../img/foto4.webp'
import Foto5 from '../../img/foto5.jpeg'
import Foto6 from '../../img/foto6.jpeg'
import { message } from 'antd'
import { useLocalStorage } from 'react-use'
import { useGlobal } from '../../context/GlobalContext'
import { usePenjual } from '../../context/PenjualContext'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'

const MainProduk = () => {

    const [isOpen, setIsOpen] = useState(false)

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
            { style: 'currency', currency: 'IDR' }
        ).format(money)
    }

    const [dataUser, setDataUser] = useLocalStorage("user")
    const {dataListKategori} = useGlobal()
    const {dataBarangPen} = usePenjual()

    const [listBarang, setListBarang] = useState()

    const [dataBarang, setDataBarang] = useState([])
    const [namaBarang, setNamaBarang] = useState()
    const [idKategori, setIdKategori] = useState()
    const [deskripsiBarang, setDeskripsiBarang] = useState()
    const [stokBarang, setStokBarang] = useState()
    const [gambarBarang, setGambarBarang] = useState()
    const [hargaBarang, setHargaBarang] = useState()
    const [idpenjual, setIdPenjual] = useState()

    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:3333/api/v1/listbwr.json?idPenjual=${dataUser?.idPenjual}`)
    //     .then(res => {
    //         setDataBarang(res.data)
    //     })
    //     .catch (err => {
    //         console.log(err)
    //     })
    // }, [dataUser])

    // const listBrg = () => {
    //     axios.get(`http://127.0.0.1:3333/api/v1/listbwr.json`,{
    //         idPenjual: dataUser.idUser
    //     })
    //     .then(res => {
    //         setListBarang(res.data)
    //         message.success('Data added successfully')
    //     })
    // }

    const createBarang = () => {
        axios.post(`http://127.0.0.1:3333/api/v1/crtbarang.json`,{
            namaBarang: namaBarang,
            idKategori: idKategori, 
            deskripsiBarang: deskripsiBarang, 
            stokBarang: stokBarang, 
            hargaBarang: hargaBarang, 
            gambarBarang: gambarBarang, 
            idPenjual: dataUser.idUser
        })
        .then(res => {
            setDataBarang(res.data)
            console.log(res.data, 'sini')
            setNamaBarang()
            setIdKategori()
            setDeskripsiBarang()
            setStokBarang()
            setHargaBarang()
            message.success('Data added successfully')
        })
        .catch(err => {
            message.error('Data added failed')
            console.log(err)
        })
    }

    // 1
    function closeModal (){
        setIsOpen(false)
    }
    function openModal (){
        setIsOpen(true)
    }

    return (
        <div className=' mx-auto'>
            <div className=" px-24 pt-[180px] font-DMSans">
                <div className=" flex justify-end">
                    <button onClick={openModal} className=" flex items-center justify-center px-3 py-3 rounded-full hover:bg-kedua duration-300 ease-in-out bg-utama">
                        <Plus />
                        <h1 className=' text-putih text-xs font-bold'>Tambah produk</h1>
                    </button>
                    <Transition show={isOpen} >
                        <Dialog className="relative z-[99999]" onClose={closeModal}>
                            <Transition.Child
                                enter="ease-out duration-1000"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                            <div className="fixed inset-0 bg-black bg-opacity-70 "/>
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className=" w-full max-w-2xl transform overflow-hidden rounded-[20px] bg-putih shadow-md p-12 text-left align-middle transition-all opacity-100 scale-100">
                                            {/* <button onClick={closeModal}><Close /></button> */}
                                            <h3 className=' mb-2 text-4xl font-bold text-kedua'>Tambah <span className=' text-utama'>Produk</span> Anda</h3>
                                            <p className=' mb-8 text-sm text-[#AAAEAE]'>Silahkan Tambah produk anda 👇🏻</p>
                                            <form>
                                                <div className=" mb-8 flex flex-col gap-4">
                                                    <input value={gambarBarang} type='file' onChange={(e) => setGambarBarang(e.target.value)} className=' text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Nama' />
                                                    <input value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)} className=' placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Nama Produk' />
                                                    <select value={idKategori} onChange={(e) => setIdKategori(e.target.value)} name="" id="" className='text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5 text-ketiga appearance-none'>
                                                        <option disabled selected value="">Isi Kategori</option>
                                                        {
                                                            dataListKategori?.map((value, i) => {
                                                                return(
                                                                    <option value="value.nama_kategori">{value.nama_kategori}</option>
                                                                // <option value="">Peralatan Mandi</option>
                                                                // <option value="">Bumbu Dapur</option>
                                                                // <option value="">Minuman</option>
                                                                // <option value="">Kesehatan</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    <input value={stokBarang} onChange={(e) => setStokBarang(e.target.value)} className=' placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Stok' />
                                                    <input value={hargaBarang} onChange={(e) => setHargaBarang(e.target.value)} className=' placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Harga' />
                                                    <textarea value={deskripsiBarang} onChange={(e) => setDeskripsiBarang(e.target.value)} name="" id="" className='placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Deskripsi'></textarea>
                                                </div>
                                                <div className=" flex justify-center items-center">
                                                    <button onClick={createBarang} className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Tambah Produk</button>
                                                </div>
                                            </form>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
                <div className=" mt-12">
                    <div className=" grid grid-cols-5 gap-6">
                        {
                            dataBarangPen?.map((value, i) => {
                                return(
                                    <>
                                        <Card4 
                                        key={i}
                                        foto={value.gambar_barang}
                                        judul={value.nama_barang}
                                        harga={formatRupiah(value.harga_barang)}
                                        />
                                    </>
                                )
                            })
                        }
                        
                        {/* <Card4 
                        foto={Foto4}
                        judul="Sabun Dove Beauty Bar"
                        harga="50.000"/>
                        <Card4 
                        foto={Foto5}
                        judul="Garnier Michelar cleansing whitening"
                        harga="38.000"/>
                        <Card4 
                        foto={Foto6}
                        judul="Garnier Michelar cleansing whitening"
                        harga="38.000"/>
                        <Card4 
                        foto={Foto3}
                        judul="Shampo Head & Shoulders"
                        harga="24.000"/>
                        <Card4 
                        foto={Foto4}
                        judul="Sabun Dove Beauty Bar"
                        harga="50.000"/>
                        <Card4 
                        foto={Foto5}
                        judul="Garnier Michelar cleansing whitening"
                        harga="38.000"/>
                        <Card4 
                        foto={Foto6}
                        judul="Garnier Michelar cleansing whitening"
                        harga="38.000"/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProduk