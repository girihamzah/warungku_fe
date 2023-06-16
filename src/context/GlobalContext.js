import axios from "axios"
import { useLocalStorage } from "react-use"
import { useState, createContext, useContext, useEffect } from "react"

const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR' }
  ).format(money)
}

const GlobalContext = createContext(null)

const Global = ({ children }) => {

  const [dataUser, setDataUser] = useLocalStorage("user")

  const [dataListKategori, setDataListKategori] = useState([]);
  const [dataBarangDb, setDataBarangDb] = useState([]);
  const [dataProfile, setDataProfile] = useState([]);
  const [dataListKeranjang, setDataListKeranjang] = useState([]);

  const [idKategori, setIdKategori] = useState();
  const [barangKategori, setBarangKategori] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3333/api/v1/katelist.json`)
      .then(res => {
          setDataListKategori(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, []);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3333/api/v1/listBwrpb.json`)
      .then(res => {
          setDataBarangDb(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, []);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3333/api/v1/detailProfil.json?idUser=${dataUser.idUser}`)
      .then(res => {
          setDataProfile(res.data[0])
      })
      .catch(err => {
          console.log(err)
      })
  }, []);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3333/api/v1/listkranjang.json?idPembeli=${dataUser.idUser}`)
    .then(res => {
        setDataListKeranjang(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    }, [dataUser]);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:3333/api/v1/listbwrbykate.json?idKategori=${idKategori}`)
  //   .then(res => {
  //       console.log(res.data)
  //   })
  //   .catch(err => {
  //       console.log(err)
  //   })
  //   }, [idKategori]);

  const state = {
  
    formatRupiah,

    dataListKategori, setDataListKategori,
    dataBarangDb, setDataBarangDb,
    dataProfile, setDataProfile,
    dataListKeranjang, setDataListKeranjang,

    idKategori, setIdKategori,
    barangKategori, setBarangKategori,

  }

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )

}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error(`useGlobal must be use within a Network Performance`)
  }
  return context
}

export default Global

