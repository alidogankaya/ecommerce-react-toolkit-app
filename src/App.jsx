import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Page from './containers/Page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Basket from './pages/Basket';





function App() {

  return (
    < >
           <Router>
        <Navbar />
        <Page>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Page>
      </Router>
      <Footer/>
    </>
  )
}

export default App
