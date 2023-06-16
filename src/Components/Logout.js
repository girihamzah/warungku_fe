import React from 'react'
import axios from 'axios'
import Keluar from '../img/Keluar'
import { useNavigate } from 'react-router-dom'
import AuthProvider, { useAuth } from '../context/AuthContext'

export default function Logout() {

    const { dataUser } = useAuth()

    let Navigate = useNavigate();

    const onLogout = () => {
      const email = {
        email: dataUser?.email
      }
        
      axios.post(`http://127.0.0.1:3333/api/v1/logoutApp.json`, email)
        .then(_ => {
          localStorage.removeItem("user")
          localStorage.removeItem('token')
          Navigate("/")
        })
        .catch(_ => { })
    };

  return (
    <>
      <AuthProvider>
        <div onClick={onLogout} className=" flex items-center gap-3 py-1 hover:bg-utama rounded group/1">
          <Keluar/>
          <h1 className=' text-sm group-hover/1:text-putih text-ketiga'>Keluar</h1>
        </div>
      </AuthProvider>
    </>
  )
}
