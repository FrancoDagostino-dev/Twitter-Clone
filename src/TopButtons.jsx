import './App.css'

export default function TopButton ({section}) {
  return (
    <div className="top-bar">
        <div className="top-buttons">
          <button className="top-button">{section}</button>
        </div>
    </div>
  )
} 