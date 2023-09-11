import { Suspense, lazy } from 'react'
import './App.css'
import { HomePage } from './pages/Home.jsx'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/Search.jsx'
import { AboutPage } from './pages/About'

import { Router } from './Router.jsx'
import { Route } from './Route'

//const LazyAboutPage = lazy(() => import('./pages/About.jsx'))


const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  },
  {
    path: '/:lang/about',
    Component: AboutPage
  }
]



function App(){

  return (
    <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={appRoutes} defaultComponent={Page404}>
            <Route path='/' Component={HomePage}/>
            <Route path='/about' Component={AboutPage}/>
          </Router>
        </Suspense>
    </main>
  )
}

export default App