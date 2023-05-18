// import logo from './logo.svg';
import {Routes, Route , BrowserRouter , Link} from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import AboutUs from './page/AboutUs';
// import LinkPage from './page/LinkPage';

function App() {
  return (
    <div>
    {/* <HomePage/>
    <AboutUs/> */}
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/AboutUs">AboutUs</Link>
    <Routes>

      {/* <Route path="/" element={<LinkPage/>}> */}
        <Route index element={<HomePage/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>

      {/* </Route> */}
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
