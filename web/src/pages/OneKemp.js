import { useParams } from "react-router-dom"

const OneKemp = () => {
  const { movieId } = useParams()

  return (
    <div>{ movieId }</div>
  )
}

export default OneKemp