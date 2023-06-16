import React from 'react'
import Trash2 from '../../img/Trash2'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Items from '../../img/Items.svg'
import Close from '../../img/Close'


const Card4 = (props4) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    // 1
    function closeModal (){
        setIsOpen(false)
    }
    function openModal (){
        setIsOpen(true)
    }

    // 2
    function closeModal2 (){
        setIsOpen2(false)
    }
    function openModal2 (){
        setIsOpen2(true)
    }

    return (
        <div className=" w-full h-full bg-putih rounded-xl drop-shadow-5xl pb-5">
            <div className=" flex flex-col gap-4">
                <div className=" flex flex-col gap-3">
                    <span className=' w-full h-56'>
                        <img className=' w-full h-full rounded-t-lg' src={props4.foto}/>
                    </span>
                    <h1 className=' px-4 pt-3 font-bold text-md text-kedua tracking-wide'>{props4.judul}</h1>
                </div>
                <div className=" px-4 flex items-center justify-between">
                    <h1 className='font-medium text-utama text-sm max-w-[145px]'>Rp {props4.harga}</h1>
                    <div className=" flex items-center gap-x-2">
                        <button onClick={openModal2}>
                            <Trash2 />
                        </button>
                        <span className=' w-4 bg-ketiga h-[1px] rounded-full rotate-90'></span>
                        <button onClick={openModal}>
                            <svg className=' stroke-biru w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                        
                        </button>
                    </div>
                </div>
            </div>
            {/* delete */}
            <Transition show={isOpen2} >
                <Dialog className="relative z-[99999]" onClose={closeModal2}>
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
                                    <div className=" w-96">
                                        <div className=" mb-3 flex items-center justify-end">
                                            <button onClick={closeModal2}><Close /></button>
                                        </div>
                                        <div className=" flex gap-6 flex-col items-center justify-center">
                                            <img src={Items}/>
                                            <h1 className=' text-black text-xl font-medium'>Yakin?</h1>
                                            <h1 className=' text-kedua '>Data kamu akan di hapus permanent</h1>
                                            <div className=" flex mt-10 gap-4 justify-center items-center">
                                                <button onClick={closeModal2} className=" bg-biru py-1 px-4 rounded-full duration-300 ease-in-out hover:bg-keempat group">
                                                    <h1  className=' text-putih duration-300 ease-in-out group-hover:text-black'>Kembali</h1>
                                                </button>
                                                <button className=" bg-merah py-1 px-4 rounded-full duration-300 ease-in-out hover:bg-keempat group">
                                                    <h1 className=' text-putih duration-300 ease-in-out group-hover:text-black'>Hapus</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* edit */}
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
                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Produk</span> Anda</h3>
                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Produk anda tidak sesuai, anda bisa ubah prodik toko anda 👇🏻</p>
                                    <form>
                                        <div className=" mb-8 flex flex-col gap-4">
                                            <input type='file' className=' text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Nama' />
                                            <input className=' placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Nama Produk' />
                                            <select name="" id="" className='text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5 text-ketiga appearance-none'>
                                                <option disabled selected value="">Isi Kategori</option>
                                                <option value="">Makanan Pokok</option>
                                                <option value="">Peralatan Mandi</option>
                                                <option value="">Bumbu Dapur</option>
                                                <option value="">Minuman</option>
                                                <option value="">Kesehatan</option>
                                            </select>
                                            <input className=' placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Stok' />
                                            <input className=' placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Harga' />
                                            <textarea name="" id="" className='placeholder:text-ketiga text-sm w-full focus:outline-none border-b border-b-kelima placeholder:focus:text-kelima focus:border-b-keempat py-3.5' placeholder='Deskripsi'></textarea>
                                        </div>
                                        <div className=" flex justify-center items-center">
                                            <button className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Edit</button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>    
    )
}

export default Card4