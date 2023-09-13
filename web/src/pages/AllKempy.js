import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { link } from "react-router-dom"

const AllKempy = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect( () => {
    projectFirestore.collection("kempy").get().then( (snapshot) => {

      if (snapshot.empty) {
        setError("Žádné kempy k vypsání")
      } else {
        let result = []
        snapshot.docs.forEach( (oneKemp) => {
          result.push( {id: oneKemp.id, ...oneKemp.data()} )
        })
        setData(result)
      }
    }).catch( (err) => {
      setError(err.message)
    })
  }, [])

  return (
    <section>
      {error && <p>{error}</p>}
    </section>
  )
}

export default AllKempy