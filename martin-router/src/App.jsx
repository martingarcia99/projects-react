import './App.css'
import { useState, useEffect } from 'react'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '',href)

  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre Nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg" alt="foto de martin" />
        <p>¡Hola! Me llamo Martin y estoy reando un clon de React Router.</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la home</button>
    </>
  )
}

function App(){

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }

  },[])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App