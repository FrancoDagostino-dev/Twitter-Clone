import { useCallback, useState } from "react"

export default function PublicationButton ({image,}) {
  const [number, setNumber] = useState(0)

  const handleLike = ()=> {
    setNumber(number+1)
  }

  return (
    <div className="publication-interactions">
        <button className="publication-content-buttons" onClick={handleLike}>
          <img src={`/IMG/${image}.png`} className="publication-content-img"/>
          <p>{number}</p>
        </button>
    </div>    
  )
}