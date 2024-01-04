import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import TreeScene from './components/canvas/TreeScene'
import Header from './components/header/Header'
import { ThemeProvider } from './components/theme/theme-provider'


function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header/>
      <Suspense fallback={"Loading..."}><TreeScene/></Suspense>
      <Banner/>
    </ThemeProvider>
  )
}

export default App
