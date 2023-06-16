import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import VectorR from '../img/VectorR';
import Email from '../img/Email'
import Key from '../img/Key'
import User from '../img/User';
import Telp from '../img/Telp';
import Alamat from '../img/Alamat';
import Option from '../img/Option';
import axios from 'axios';

const Register = () => {

    let Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setNohp] = useState('');
    const [alamat, setAlamat] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const regist = () => {
        axios.post(`http://127.0.0.1:3333/api/v1/crtSign.json`, {
        username: username,
        email: email,
        no_hp : nohp,
        alamat : alamat, 
        password: password,
        role: role,
        })
        .then(res => {
            Navigate("/")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className=" mx-auto">
            <div className=" flex flex-wrap">
                <div className=" w-[45%] min-h-screen flex flex-col py-10 justify-between px-24">
                    <h1 className=' tracking-wider font-Cinzel font-black text-xl xl:text-2xl text-utama'>Warung<span className=' text-kedua'>Ku</span></h1>
                    <div className=" flex justify-center">
                        <VectorR/>
                    </div>
                    <h1 className=' text-center text-lg xl:text-xl tracking-wider font-bold'>Ayo buat akunmu di <span className=' font-Cinzel text-utama font-black'>Warung<span className=' text-kedua'>Ku</span></span></h1>
                </div>
                <div className=" w-[55%] bg-putih drop-shadow-4xl min-h-screen flex flex-col py-10 justify-between px-24">
                    <div className="flex justify-end items-center font-DMSans">
                        <a href='/' className=' text-ketiga  text-xs pr-5'>Sudah Punya Akun?</a>
                        <NavLink to='/'><button className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Masuk</button></NavLink>
                    </div>
                    <div className=" font-DMSans">
                        <h1 className=' font-bold xl:text-xl text-lg text-kedua'>Buat <span className=' text-utama'>Akun!</span></h1>
                        <div className=" xl:pt-10 pt-8">
                            <div className=" flex flex-col">
                                <form action="" className=' flex flex-col gap-6'>
                                    <div className=" w-full flex items-center gap-5">
                                        <span className=' flex items-center w-1/2 border-b border-keempat xl:pb-4 pb-3'>
                                            <User />
                                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Nama Lengkap' className='pl-5 w-full xl:text-sm text-xs text-kedua placeholder:text-ketiga focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                        </span>
                                        <span className=' flex items-center w-1/2 border-b border-keempat xl:pb-4 pb-3'>
                                            <Email />
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' className='pl-5 w-full xl:text-sm text-xs text-kedua placeholder:text-ketiga focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                        </span>
                                    </div>
                                    <div className=" w-full flex items-center gap-5 ">
                                        <span className=' flex items-center border-b w-1/2 border-keempat xl:pb-4 pb-3'>
                                            <Telp />
                                            <input value={nohp} onChange={(e) => setNohp(e.target.value)} type="text" placeholder='No. Telepon' className='pl-5 w-full xl:text-sm text-xs text-kedua placeholder:text-ketiga focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                        </span>
                                        <span className=' flex items-center border-b w-1/2 border-keempat xl:pb-4 pb-3'>
                                            <Alamat />
                                            <input value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" placeholder='Alamat' className='pl-5 w-full xl:text-sm text-xs text-kedua placeholder:text-ketiga focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                        </span>
                                    </div>
                                    <div className=" w-full flex items-center gap-5 ">
                                        <span className=' w-1/2 flex items-center border-b border-keempat xl:pb-4 pb-3'>
                                            <Option />
                                            <select value={role} onChange={e => setRole(e.target.value)} className='  pl-4 w-full focus:outline-none xl:text-sm text-xs text-ketiga'>
                                                <option value="" disabled selected>Isi Role</option>
                                                <option value="true">Penjual</option>
                                                <option value="false">Pembeli</option>
                                            </select>
                                        </span>
                                        <span className=' w-1/2 flex items-center border-b border-keempat xl:pb-4 pb-3'>
                                            <Key /> 
                                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Sandi' className='pl-5 w-full xl:text-sm text-xs text-kedua placeholder:text-ketiga focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                        </span>
                                    </div>

                                </form>
                                <div className=" flex justify-center xl:pt-10 pt-8">
                                    <button onClick={regist} className=' before:bg-putih  before:border-utama border bg-utama flex xl:px-12 xl:py-2 py-2 px-10 items-center text-sm xl:text-base text-putih hover:text-utama rounded-full overflow-hidden relative cursor-pointer transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Daftar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <h1 className=' text-ketiga text-xs'>© WarungKu 2023</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register