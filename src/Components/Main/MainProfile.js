import React, { useState, useEffect } from 'react'
import Banner2 from '../../img/banner2.jpg'
import Pencil from '../../img/Pencil'
import User1 from '../../img/user1.svg'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { useGlobal } from '../../context/GlobalContext'


const MainProfile = () => {

    const { dataProfile, setDataProfile } = useGlobal()

    const [profileNama, setProfileNama] = useState();
    const [profileNoHp, setProfileNoHp] = useState();
    const [profileEmail, setProfileEmail] = useState();
    const [profileAlamat, setProfileAlamat] = useState();
    const [profilePw, setProfilePw] = useState();
    
    const [columnEdit, setColumnEdit] = useState();
    const [valueEdit, setValueEdit] = useState();

    useEffect(() => {
        setProfileNama(dataProfile.username);
        setProfileNoHp(dataProfile.no_hp);
        setProfileEmail(dataProfile.email);
        setProfileAlamat(dataProfile.alamat);
    }, [dataProfile]);

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)
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
    // 3
    function closeModal3 (){
        setIsOpen3(false)
    }
    function openModal3 (){
        setIsOpen3(true)
    }
    // 4
    function closeModal4 (){
        setIsOpen4(false)
    }
    function openModal4 (){
        setIsOpen4(true)
    }
     // 5
    function closeModal5 (){
        setIsOpen5(false)
    }
    function openModal5 (){
        setIsOpen5(true)
    }
     // FTO
    function closeModalFT (){
        setIsOpenFT(false)
    }
    function openModalFT (){
        setIsOpenFT(true)
    }
    
    const updateProfile = () => {
        axios.post(`http://127.0.0.1:3333/api/v1/updateProfile.json`, {
            idUser: dataProfile.id_user,
            column: columnEdit,
            value: valueEdit
        })
        .then(res => {
            setDataProfile(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updatePw = () => {
        axios.post(`http://127.0.0.1:3333/api/v1/forgetPass.json`, {
            idUser: dataProfile.id_user,
            password: profilePw
        })
        .then(res => {
            setDataProfile(res.data)
        })
        .catch(err => {
            console.log(err)
        })
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
                            <h1 className=' font-bold text-xl'>{profileNama}</h1>
                            <button onClick={openModalFT} className=" flex items-center gap-1 group/2">
                                <Pencil/>
                                <h1 className=' group-hover/2:underline decoration-utama text-xs'>Edit Foto Profile</h1>
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
                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Foto anda tidak sesuai, anda bisa ubah Foto profil anda di bawah ini 👇🏻</p>
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
                                        <td className=' p-6'>Nama</td>
                                        <td className=' p-6 text-start'>{profileNama}</td>
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
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Nama anda tidak sesuai, anda bisa ubah nama profil anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input defaultValue={profileNama} onChange={e => [setValueEdit(e.target.value), setColumnEdit('username')]} className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Nama' />
                                                                        </div>
                                                                        <div className=" flex justify-center items-center">
                                                                        <button onClick={updateProfile} className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Edit</button>
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
                                    <tr className=' outline outline-keempat'>
                                        <td className=' p-6'>Email</td>
                                        <td className=' p-6 text-start'>{profileEmail}</td>
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
                                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Email</span> Anda</h3>
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Email anda tidak sesuai, anda bisa ubah Email anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input defaultValue={profileEmail} onChange={e => [setValueEdit(e.target.value), setColumnEdit('email')]} className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Email' />
                                                                        </div>
                                                                        <div className=" flex justify-center items-center">
                                                                        <button onClick={updateProfile} className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Edit</button>
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
                                    <tr className=' outline outline-keempat'>
                                        <td className=' p-6'>No. Telepone</td>
                                        <td className=' p-6 text-start'>{profileNoHp}</td>
                                        <td className=' p-6'>
                                            <div className=" justify-end flex">
                                                <button onClick={openModal3} className=' flex items-center gap-1 border px-2 py-1 rounded hover:border-biru group/3'>
                                                    <Pencil/>
                                                    <h2 className=' group-hover/3:text-biru text-kedua text-xs font-bold'>Edit</h2>
                                                </button>
                                                <Transition show={isOpen3} >
                                                <Dialog className="relative z-[99999]" onClose={closeModal3}>
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
                                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Telp</span> Anda</h3>
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Telp anda tidak sesuai, anda bisa ubah Telp anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input defaultValue={profileNoHp} onChange={e => [setValueEdit(e.target.value), setColumnEdit('no_hp')]} className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Telp' />
                                                                        </div>
                                                                        <div className=" flex justify-center items-center">
                                                                        <button onClick={updateProfile} className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Edit</button>
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
                                    <tr className=' outline outline-keempat'>
                                        <td className=' p-6'>Alamat</td>
                                        <td className=' p-6 text-start'>{profileAlamat}</td>
                                        <td className=' p-6'>
                                            <div className=" justify-end flex">
                                                <button onClick={openModal4} className=' flex items-center gap-1 border px-2 py-1 rounded hover:border-biru group/3'>
                                                    <Pencil/>
                                                    <h2 className=' group-hover/3:text-biru text-kedua text-xs font-bold'>Edit</h2>
                                                </button>
                                                <Transition show={isOpen4} >
                                                <Dialog className="relative z-[99999]" onClose={closeModal4}>
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
                                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Alamat</span> Anda</h3>
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Alamat anda tidak sesuai, anda bisa ubah Alamat anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input defaultValue={profileAlamat} onChange={e => [setValueEdit(e.target.value), setColumnEdit('alamat')]} className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Alamat' />
                                                                        </div>
                                                                        <div className=" flex justify-center items-center">
                                                                        <button onClick={updateProfile} className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Edit</button>
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
                                    <tr className=' outline outline-keempat rounded-b-sm'>
                                        <td className=' p-6'>Kata Sandi</td>
                                        <td className=' p-6 text-start'>********</td>
                                        <td className=' p-6'>
                                            <div className=" justify-end flex">
                                                <button onClick={openModal5} className=' flex items-center gap-1 border px-2 py-1 rounded hover:border-biru group/3'>
                                                    <Pencil/>
                                                    <h2 className=' group-hover/3:text-biru text-kedua text-xs font-bold'>Edit</h2>
                                                </button>
                                                <Transition show={isOpen5} >
                                                <Dialog className="relative z-[99999]" onClose={closeModal5}>
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
                                                                    <h3 className=' mb-2 text-4xl font-bold text-kedua'>Ubah <span className=' text-utama'>Password</span> Anda</h3>
                                                                    <p className=' mb-8 text-sm text-[#AAAEAE]'> Silahkan Apabila Password anda tidak sesuai, anda bisa ubah Password anda di bawah ini 👇🏻</p>
                                                                    <form>
                                                                        <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                                            <input onChange={e => setProfilePw(e.target.value)} className=' w-full focus:outline-none border-b border-b-ketiga focus:border-b-keempat py-3.5' placeholder='Password' type='password' />
                                                                        </div>
                                                                        <div className=" flex justify-center items-center">
                                                                        <button onClick={updatePw} className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Edit</button>
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

export default MainProfile