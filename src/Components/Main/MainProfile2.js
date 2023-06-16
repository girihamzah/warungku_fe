import React from 'react'
import { useState } from 'react'
import Banner2 from '../../img/banner2.jpg'
import Pencil from '../../img/Pencil'
import User1 from '../../img/user1.svg'
import { Dialog, Transition } from '@headlessui/react'

const MainProfile2 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpenFT, setIsOpenFT] = useState(false)

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
     // FTO
    function closeModalFT (){
        setIsOpenFT(false)
    }
    function openModalFT (){
        setIsOpenFT(true)
    }
    return (
        <div className=' mx-auto'>
            <div className=" px-24 pt-36 font-DMSans">
                <div className=" flex flex-col relative">
                    <span className=' w-full h-60'>
                        <img className=' rounded w-full h-full' src={Banner2}/>
                    </span>
                    <div className=" flex items-end absolute gap-4">
                        <span className=" translate-y-[170px] translate-x-12 bg-kedua rounded-full w-32 h-32">
                            <img className=' w-full h-full' src={User1} />
                        </span>
                        <div className=" flex flex-col translate-y-[170px] translate-x-12">
                            <h1 className=' font-bold text-xl'>Foto Profil Toko</h1>
                            <button onClick={openModalFT} className=" flex items-center gap-1 group/2">
                                <Pencil/>
                                <h1 className=' group-hover/2:underline decoration-utama text-xs'>Edit Foto Toko</h1>
                            </button>
                            <Transition show={isOpenFT} >
                                <Dialog className="relative z-[99999]" onClose={closeModalFT}>
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
                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Foto</span> Anda</h3>
                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Foto anda tidak sesuai, anda bisa ubah Foto toko anda di bawah ini 👇🏻</p>
                                                    <form>
                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                            <input className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Nama' type='file' />
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
                    </div>
                    <div className=" pt-36">
                        <div className=" flex flex-col">
                            <table>
                                <tbody >
                                    <tr className=' outline outline-keempat rounded-t-sm'>
                                        <td className=' p-6'>Nama Toko</td>
                                        <td className=' p-6 text-start'>Toko Nadila</td>
                                        <td className=' p-6 flex justify-end'>
                                            <button onClick={openModal} className=' flex items-center gap-1 border px-2 py-1 rounded hover:border-biru group/3'>
                                                <Pencil/>
                                                <h2 className=' group-hover/3:text-biru text-kedua text-xs font-bold'>Edit</h2>
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
                                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Nama</span> Anda</h3>
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Nama anda tidak sesuai, anda bisa ubah nama toko anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Nama' />
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
                                        </td>
                                    </tr>
                                    <tr className=' outline outline-keempat rounded-b-sm'>
                                        <td className=' p-6'>Deskripsi Toko</td>
                                        <td className=' p-6 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean sed. Pharetra sit amet a</td>
                                        <td className=' p-6'>
                                            <div className=" justify-end flex">
                                                <button onClick={openModal2} className=' flex items-center gap-1 border px-2 py-1 rounded hover:border-biru group/3'>
                                                    <Pencil/>
                                                    <h2 className=' group-hover/3:text-biru text-kedua text-xs font-bold'>Edit</h2>
                                                </button>
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
                                                                    {/* <button onClick={closeModal}><Close /></button> */}
                                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Deskripsi</span> Anda</h3>
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Deskripsi anda tidak sesuai, anda bisa ubah Deskripsi anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Deskripsi' />
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
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProfile2