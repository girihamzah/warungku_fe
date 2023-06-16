import React, { useEffect } from 'react'
import Card2 from '../Card/Card2'
import Foto1 from '../../img/foto1.png'
import Foto2 from '../../img/foto2.png'
import axios from 'axios'
import { useGlobal } from '../../context/GlobalContext'

const MainKategori = () => {

    const { idKategori, setIdKategori, barangKategori, setBarangKategori } = useGlobal()
    
    console.log(idKategori)

    
    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:3333/api/v1/listbwrbykate.json?idKategori=${props.id_kategori}`)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [props.id_kategori]);



    return (
        <div className=' mx-auto'>
            <div className="px-24 pt-[180px] font-DMSans">
                <div className=" grid grid-cols-4 gap-9">
                            <Card2 
                            foto = {Foto1}
                            name = "Minyak Goreng Murah Bimoli,Sania"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto2}
                            name = "Telur Ayam Negeri 250gr 250 500gr 500 1kg 1 kg 1/4"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto1}
                            name = "Minyak Goreng Murah Bimoli,Sania"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto2}
                            name = "Telur Ayam Negeri 250gr 250 500gr 500 1kg 1 kg 1/4"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto1}
                            name = "Minyak Goreng Murah Bimoli,Sania"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto2}
                            name = "Telur Ayam Negeri 250gr 250 500gr 500 1kg 1 kg 1/4"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto1}
                            name = "Minyak Goreng Murah Bimoli,Sania"
                            harga = "Rp 46.000"/>
                            <Card2 
                            foto = {Foto2}
                            name = "Telur Ayam Negeri 250gr 250 500gr 500 1kg 1 kg 1/4"
                            harga = "Rp 46.000"/>
                </div>
                <div className="pt-8 flex justify-center items-center">
                    <button className=' bg-utama text-putih py-4 px-16 rounded-lg font-bold hover:bg-opacity-95'>Muat Lebih Banyak</button>
                </div>
            </div>
        </div>
    )
}

export default MainKategori