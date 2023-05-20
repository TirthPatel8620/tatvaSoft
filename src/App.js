// import logo from './logo.svg';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import AboutUs from "./page/AboutUs";
import NotFound from "./page/NotFound";
import { CssStyledPage } from "./page/CssStyledPage";
// import LinkPage from './page/LinkPage';

function App() {
  return (
    <div>
      {/* <HomePage/>
    <AboutUs/> */}
      <BrowserRouter
        style={{
          padding: 10,
        }}
      >
        <Link
          to="/"
          style={{
            padding: 10,
          }}
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          style={{
            padding: 10,
          }}
        >
          AboutUs
        </Link>
        <Link
          to="/CssStyledPage"
          style={{
            padding: 10,
          }}
        >
          CssStyledPage
        </Link>
        <Link
          to="/explore"
          style={{
            padding: 10,
          }}
        >
          Explore
        </Link>
        <Link
          to="/Contact"
          style={{
            padding: 10,
          }}
        >
          Contact
        </Link>
        <Routes>
          {/* <Route path="/" element={<LinkPage/>}> */}
          <Route index element={<HomePage />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="CssStyledPage" element={<CssStyledPage />} />
          <Route path="*" element={<NotFound />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
