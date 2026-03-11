import { Outlet } from 'react-router-dom'
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import ScrollToTop from './component/other/ScrollToTop'
import InTop from './component/other/InTop'
function App() {
  return (
    <>
    <InTop />
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
