// import logo from './logo.svg';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./page/HomePage";
import AboutUs from "./page/AboutUs";
import NotFound from "./page/NotFound";
import { CssStyledPage } from "./page/CssStyledPage";
import MuiSignin from "./page/MuiSignin";
import { SignIn } from "./page/SignIn";
import { EditProduct } from "./page/EditProduct";
import { Registration } from "./page/Registration";
import Login from "./page/Login";
import { Footer } from "./component/Footer";
// import LinkPage from './page/LinkPage';

function App() {
  return (
    <div className="page-container">
      {/* <HomePage/>
    <AboutUs/> */}
      <ToastContainer />
      <div>
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
            to="/MuiSignin"
            style={{
              padding: 10,
            }}
          >
            MuiSignin
          </Link>
          <Link
            to="/SignIn"
            style={{
              padding: 10,
            }}
          >
            SignIn
          </Link>
          <Link
            to="/EditProduct"
            style={{
              padding: 10,
            }}
          >
            EditProduct
          </Link>
          <Link
            to="/Registration"
            style={{
              padding: 10,
            }}
          >
            Registration
          </Link>
          <Link
            to="/Login"
            style={{
              padding: 10,
            }}
          >
            Login
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
            <Route path="MuiSignin" element={<MuiSignin />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="EditProduct" element={<EditProduct />} />
            <Route path="Registration" element={<Registration />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
