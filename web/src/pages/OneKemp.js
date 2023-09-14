import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const OneKemp = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { movieId } = useParams()

  useEffect( () => {
    projectFirestore.collection("kempy").doc(movieId).get().then( (document) =>
    {
      if (document.exists) {
        setData(document.data())
      } else {
        setError("Nenašli jsme tento kemp")
      }
    }).catch( (err) => {
      setError(err.message)
    })
  }, [])

  return ( <section>
    <h1>{data.title}</h1>
    <p>{data.maxPeople}</p>
    <p>{data.minPeople}</p>
  </section>
  )
}

export default OneKemp