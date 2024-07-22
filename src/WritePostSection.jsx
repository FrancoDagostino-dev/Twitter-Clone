import './App.css'

export default function WritePost ({name}) {
  return (
    <div>
        <div className="post-content">
          <img src={`/IMG/${name}.jpg`} className="post-img" />
          <input type="text" className="content-input" placeholder="What is happening?! " />
      </div>
    </div>
  )
}


