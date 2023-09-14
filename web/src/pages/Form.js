import { useState } from "react"
import { projectFirestore } from "../firebase/config"


const Form = () => {
  const [kempTitle, setKempTitle] = useState("")
  const [kempMinAge, setKempMinAge] = useState(null)
  const [kempMaxAge, setKempMaxAge] = useState(null)


  const submitForm = async (event) => {
    event.preventDefault()

    console.log(kempTitle, kempMinAge, kempMaxAge)

    const newKemp = {
        title: kempTitle,
        minage: parseInt(kempMinAge),
        maxage: parseInt(kempMaxAge)
      }
  
  
      try {
        await projectFirestore.collection("kempy").add(newKemp)
        setKempTitle("")
        setKempMinAge("")
        setKempMaxAge("")
      } catch (err) {
        console.log(err.message)
      }
  
  }


  return <section>
    <form onSubmit={submitForm} >
      <input
        type="text"
        placeholder="Název kempu"
        onChange={ (e) => setKempTitle(e.target.value) }
        value={kempTitle}
      />


      <input
        type="number"
        placeholder="Minimální počet osob"
        min="1"
        onChange={(e) => setKempMinAge(e.target.value)}
        value={kempMinAge}
      />


      <input
        type="number"
        placeholder="Maximální počet osob"
        min="1"
        onChange={ (e) => setKempMaxAge(e.target.value) }
        value={kempMaxAge}
      />


      <input type="submit" value="Přidat kemp" />


    </form>
  </section>
}


export default Form