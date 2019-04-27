import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { Header } from './components/header/Header'
// import { MainHeader } from './components/mainHeader/MainHeader'
import { MediaGallery } from './components/mediaGallery/MediaGallery'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* <MainHeader /> */}
        <MediaGallery />
      </div>
    </>
  )
}

export default App
