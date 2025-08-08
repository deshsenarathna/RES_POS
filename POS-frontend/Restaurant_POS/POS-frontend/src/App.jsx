import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";


function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];

  return (
    <>
      
       {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/auth" element={<Auth/>}/>
           <Route path="/orders" element={<Orders/>}/>
           <Route path="/tables" element={<Tables/>}/>
           <Route path="/menu" element={<Menu/>}/>
           <Route path="*" element={<div>NOT FOUND</div>}/>
        </Routes>
        
      
    </>
  )
}
function App() {
  return(
    <Router>
    <Layout />
  </Router>
  )
}

export default App;
