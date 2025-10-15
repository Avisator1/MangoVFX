import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'

import Home from './pages/Home'
import StorePage from './pages/StorePage'
import Work from './pages/Work'

const App = () => {
  return (
    <ReactLenis root options={{ smooth: true, duration: 1.2 }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<StorePage />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
