import React, { useState, useEffect } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import Email from '../img/Email'
import Key from '../img/Key'
import VectorL from '../img/VectorL'
import axios from 'axios'
import { useLocalStorage } from "react-use"
import { useAuth } from '../context/AuthContext'

const Login = () => {

    const { dataUser, setDataUser, token, setToken } = useAuth()

    let Navigate = useNavigate();

    const [inputan, setInputan] = useState();
    const [password, setPassword] = useState();

    const log = () => {
        axios.post(`http://127.0.0.1:3333/api/v1/loginApp.json`, {
            input : inputan,
            password : password
        })
        .then(res => {
            setToken(res.data.token)
            setDataUser(res.data.user)
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            if(res.data.user.role === 'true'){
                Navigate("/DashboardPNJL")
            }else{
                Navigate("/DashboardPMB")
            }
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <div className="mx-auto">
            <div className=" flex flex-wrap">
                <div className=" w-[45%] min-h-screen flex flex-col py-10 justify-between px-24">
                    <h1 className=' font-Cinzel tracking-wider font-black text-xl xl:text-2xl text-utama'>Warung<span className=' text-kedua'>Ku</span></h1>
                    <div className=" flex justify-center">
                        <VectorL/>
                    </div>
                    <h1 className=' text-center text-lg xl:text-xl tracking-wider font-bold'>Selamat datang di <span className=' font-Cinzel text-utama font-black'>Warung<span className=' text-kedua'>Ku</span></span></h1>
                </div>
                <div className=" w-[55%] bg-putih drop-shadow-4xl min-h-screen flex flex-col py-10 justify-between px-24">
                    <div className="flex justify-end items-center font-DMSans">
                        <a href='/' className=' text-ketiga text-xs pr-5'>Belum Punya Akun?</a>
                        <NavLink to='/register'><button className=' before:bg-utama  border border-utama flex px-7 py-1.5 items-center text-xs text-utama hover:text-putih rounded-full overflow-hidden relative cursor-pointer font-bold transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Daftar</button></NavLink>
                    </div>
                    <div className=" font-DMSans">
                        <h1 className=' font-bold xl:text-xl text-lg text-kedua'>Silahkan <span className=' text-utama'>Masuk!</span></h1>
                        <div className=" xl:pt-10 pt-8">
                            <div className=" flex flex-col">
                                <form action="">
                                    <span className=' flex items-center border-b border-keempat xl:pb-4 pb-3'>
                                        <Email/>
                                        <input value={inputan} onChange={e => setInputan(e.target.value)} type="text" placeholder='No. Telepon/NamaLengkap/Email' className='pl-5 w-full xl:text-sm text-xs placeholder:text-ketiga text-kedua focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                    </span>
                                    <span className=' flex items-center border-b border-keempat xl:pb-4 pt-6 pb-3'>
                                        <Key />
                                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Kata Sandi' className='pl-5 w-full xl:text-sm text-xs placeholder:text-ketiga text-kedua focus:outline-none focus:border-kelima focus:placeholder:text-kelima'/>
                                    </span>
                                </form>
                                <div className=" flex justify-center xl:pt-10 pt-8">
                                    {/* <NavLink to='/dashboardPMB'> */}
                                        <button onClick={log} className=' before:bg-putih  before:border-utama border bg-utama flex xl:px-12 xl:py-2 py-2 px-10 items-center text-sm xl:text-base text-putih hover:text-utama rounded-full overflow-hidden relative cursor-pointer transition-all duration-100 ease-in-out z-[1]  before:inline-block before:translate-y-full before:left-0 before:w-[100%] before:h-[300%] before:absolute before:rounded-full before:z-[-1] before:transition-transform before:ease-in before:duration-300 hover:transition-colors hover:duration-500 hover:ease-in hover:before:-translate-y-0  focus:outline-none text-white'>Masuk</button>
                                    {/* </NavLink> */}
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

export default Login