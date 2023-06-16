import axios from "axios";
import { useLocalStorage } from "react-use"
import {useState, createContext, useContext, useEffect} from "react"

const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR'}
    ).format(money)
}

const PenjualContext = createContext(null)

const Penjual = ({ children }) => {
    
    const [dataUser, setDataUser] = useLocalStorage("user")

    const [dataBarangPen, setDataBarangPen] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:3333/api/v1/listbwr.json?idPenjual=${dataUser.idUser}`)
        .then(res =>{
            setDataBarangPen(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [dataUser]);

    const state = {
        
        formatRupiah,

        dataBarangPen, setDataBarangPen
    }

    return (
        <PenjualContext.Provider value={state}>
            {children}
        </PenjualContext.Provider>
    )
}

export const usePenjual = () => {
    const context = useContext(PenjualContext)
  if (context === undefined) {
    throw new Error(`usePenjual must be use within a Network Performance`)
  }
  return context
}

export default Penjual