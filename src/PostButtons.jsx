import { useState } from "react"


export default function PostButtons ({img, formato,}) {

  

  return (
    <div>
      <div className="post-sources">
        <button className="button-source">
          <img src={`/IMG/${img}.${formato}`} className="button-img"/>
        </button>
      </div>
    </div>
  )
}