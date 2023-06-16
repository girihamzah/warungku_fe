import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bayar from './pages/Pembeli/Bayar'
import DashboardPMB from './pages/Pembeli/DashboardPMB'
import Detail from './pages/Pembeli/Detail'
import Home from './pages/Pembeli/Home'
import Home2 from './pages/Pembeli/Home2'
import Kategori from './pages/Pembeli/Kategori'
import LihatSekarang from './pages/Pembeli/LihatSekarang'
import PesananSaya from './pages/Pembeli/PesananSaya'
import Profile from './pages/Pembeli/Profile'
import DashboardPNJL from './pages/Penjual/DashboardPNJL'
import Profil from './pages/Penjual/Profil'
import ProdukSaya from './pages/Penjual/ProdukSaya'
import ProdukTerjual from './pages/Penjual/ProdukTerjual'

const App = () => {
  return (
    <Routes>
      {/* Pembeli */}
      <Route path='/' element={<Home/>} /> 
      <Route path='/register' element={<Home2/>} /> 
      <Route path='/dashboardPMB' element={<DashboardPMB />} />
      <Route path='/lihatsekarang' element={<LihatSekarang/>} /> 
      <Route path='/kategori' element={<Kategori />} /> 
      <Route path='/detail' element={<Detail />} />
      <Route path='/pembayaran' element={<Bayar />} /> 
      <Route path='/EditProfile' element={<Profile/>} /> 
      <Route path='/PesananSaya' element={<PesananSaya/>} /> 
      {/* Penjual */}
      <Route path='dashboardPNJL' element={<DashboardPNJL />} />
      <Route path='/EditProfile2' element={<Profil />} /> 
      <Route path='/ProdukSaya' element={<ProdukSaya />} />
      <Route path='/ProdukTerjual' element={<ProdukTerjual />} />
    </Routes>
    )
}

export default App