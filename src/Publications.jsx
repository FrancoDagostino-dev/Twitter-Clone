import PublicationButton from "./Publication-buttons";

const publicationButton = [{
  image: 'Message icon',
  number: 0,
},
{
  image: 'RT-icon',
  number:0,
},
{
  image: 'Like-icon',
  number: 0,
},
{
  image: 'Stats-icon',
  number: 0,
},
{
  image: 'Bookmark-icon',
  number: 0,
}
]

export default function Publication ({user, userName, img, postTime, postContent, postImg}) {
  return (
    <div className='publication'>
        <div className="pfp-section">
          <img src={img} className="publi-pfp"/>
        </div>

        <div className="publi-user-info">
          <div>
            <p className="publi-user">
              {userName}<span className="publi-user-span">@{user}
                ·
                {postTime}</span>
            </p>
          </div>
          <div>
            <p className="publi-content">
              {postContent}
            </p>
          </div>
          <div>
            <img src={postImg} className="publi-img"/>  
          </div>
          <div className='publication-button-component'>
            {
              publicationButton.map ((publiBtn, i) =>{
                return (
                  <PublicationButton
                  key={i}
                  image={publiBtn.image}
                  number={publiBtn.number}
                  >
                  </PublicationButton>
                )
              })
            }
          </div>
        </div>
        
    </div>
  )
}