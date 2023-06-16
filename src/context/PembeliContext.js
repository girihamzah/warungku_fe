import axios from "axios"
import { useLocalStorage } from "react-use"
import { useState, createContext, useContext, useEffect } from "react"

const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR' }
  ).format(money)
}

const PembeliContext = createContext(null)

const Pembeli = ({ children }) => {

  const [dataUser, setDataUser] = useLocalStorage("user")

  const [dataListPesanan, setDataListPesanan] = useState([]);
  const [pesananDikemas, setPesananDikemas] = useState([]);
  const [pesananDikirim, setPesananDikirim] = useState([]);
  const [pesananDiterima, setPesananDiterima] = useState([]);

  const [visDikemas, setVisDikemas] = useState(true);
  const [visDikirim, setVisDikirim] = useState(false);
  const [visDiterima, setVisDiterima] = useState(false);

  useEffect(() => {
        axios.get(`http://127.0.0.1:3333/api/v1/listOrder.json?idPembeli=${dataUser.idUser}`)
        .then(res => {
            setDataListPesanan(res.data)
            setPesananDikemas(res.data.dikemas)
            setPesananDikirim(res.data.dikirim)
            setPesananDiterima(res.data.divterima)
        })
        .catch(err => {
            console.log(err)
        })
    }, [dataUser]);

  const state = {
  
    formatRupiah,

    dataListPesanan, setDataListPesanan,
    pesananDikemas, setPesananDikemas,
    pesananDikirim, setPesananDikirim,
    pesananDiterima, setPesananDiterima,

    visDikemas, setVisDikemas,
    visDikirim, setVisDikirim,
    visDiterima, setVisDiterima,

  }

  return (
    <PembeliContext.Provider value={state}>
      {children}
    </PembeliContext.Provider>
  )

}

export const usePembeli = () => {
  const context = useContext(PembeliContext)
  if (context === undefined) {
    throw new Error(`usePembeli must be use within a Network Performance`)
  }
  return context
}

export default Pembeli

