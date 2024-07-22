import React from 'react'
import { ReactDOM } from 'react'
import './App.css'
import { NavButton } from './navButtons'
import TopButton from './TopButtons'
import WritePost from './WritePostSection'
import PostButtons from './PostButtons'
import Publication from './Publications'
import RefreshButton from './RefreshButton'
import { useState, useEffect } from 'react'


const navBarButton = [
  {
    image:'X-logo',
    style:'twitter-logo'
  },
  {
    image: 'home',
    name: 'Home',
    style: 'home-img'
  },
  {
    image: 'explore',
    name:'Explore',
    style:'home-img',
  },
  {
    image:'notifications',
    name:'Notifications',
    style:'home-img'
  },
  {
    image:'message',
    name: 'Messages',
    style: 'home-img'
  },
  {
  image:'list',
  name: 'Lists',
  style: 'home-img'
},
{
  image:'communities',
  name: 'Communities',
  style: 'home-img'
},
{
  image:'X-logo',
  name: 'Premiun',
  style: 'twitter-logo'
},
{
  image:'user',
  name: 'Profile',
  style: 'home-img'
},
{
  image:'more',
  name: 'More',
  style: 'home-img'
},
]

const topButtons = [{
  section: 'For You'
},
{
  section: 'Following'
}
  
]

const writePostSection = [{
  name: 'yo'
}]

const postButtons = [{
  img: 'media',
  formato: 'jpg',
},
{
  img: 'GIF (1)',
  formato: 'png'
},
{
  img: 'Poll',
  formato: 'png'
},
{
  img: 'Emotes',
  formato: 'png'
},
{
  img:'Schedule',
  formato: 'png'
},
{
  img:'Ubication',
  formato: 'png'
}
]

const publications = [
{
  user: 'EstralEsports',
  userName:'Estral Esports',
  img:'estralesportspfp',
  postTime:'1h',
  postContent: 'Gracias por toda la entrega y sacrificio por nuestro equipo mamalón, que el futuro te traiga días llenos de paz y momentos felices. Estaremos apoyándote siempre Mia 🧡',
  postImg: 'post-img-1'
}
]



export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async ()=>
  {
    setIsLoading(true)
    await fetch('http://localhost:3001/posts')
    .then ((response) => response.json())
    .then ((data)=> setData(data))
    
    setIsLoading(false)
  }

  useEffect(()=> {
    fetch('http://localhost:3001/posts')
      .then ((response) => response.json())
      .then ((data)=> setData(data))
  }, []);
  

  return (
    <React.Fragment>
      
      <section className='side-bar'>
        {isLoading && <RefreshButton/> } 
        <div className='App'>
          {
            navBarButton.map((user,i) => {
              return (
                <NavButton
                  handleOnClick={handleRefresh}
                  key={i}
                  image={user.image}
                  name={user.name}
                  style={user.style}
                >
                </NavButton>
              )
            })
          }
        </div>
      </section>

      <section className='main-section'>
        <div className="top-bar">
          {
            topButtons.map ((btn, i) =>{
              return (
                <TopButton
                  className="top-buttons"
                  key={i}
                  section={btn.section}
                >
                </TopButton>
              )
            })
          }
          {

          }
        </div>
        <div className="post">
          <div>
          
          {
            writePostSection.map ((write, i) =>{
              return (
                <WritePost
                key={i}
                name={write.name}
                >
                </WritePost>
              )
            })
          }
          </div>
          <div className="post-buttons">
          {
            postButtons.map ((button, i) =>{
              return (
                <PostButtons
                key={i}
                img={button.img}
                formato={button.formato}
                number={button.number}
                >
                </PostButtons>
              )
            })
          }
          <div className='post-named-button'>
            <button className="post-section-button">
              Post
            </button>
          </div>    
        </div>
      </div>
      <div >
        <div>
          {
            data.map ((publi, i) =>{
              return (
                <Publication
                key={i}
                img={publi.img}
                user={publi.user}
                userName={publi.userName}
                postTime={publi.postTime}
                postContent={publi.postContent}
                postImg={publi.postImg}
                >
                </Publication>
              )
            })
          }
          </div>
          
      </div>
      </section>
      
    </React.Fragment>

  )
}
