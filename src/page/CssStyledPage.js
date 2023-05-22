import AppStyle from "../AppStyle.module.css";
import Logo from '../logo.svg'

// import 
export const CssStyledPage = () => {
  return (
    <div
      style={{
        height: "auto",
        width: "200vw",
        backgroundColor: "rgb(116, 84, 141)",
        // display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <div className={AppStyle.divStyle}>
        This Container containes the external css
      </div>
      <div className={AppStyle.divStyle}>
        This Container containes the external css
      </div>
      <div className={AppStyle.divStyle}>
        This Container containes the external css
      </div>
      <div className={AppStyle.divStyle}>
        This Container containes the external css
      </div>
      <img src={Logo} alt="not found"/>
      <img src={`${process.env.REACT_APP_HOST}logo192.png`} alt="not found"/>
      <h3>{process.env.REACT_APP_HOST}</h3>
      <h3>{process.env.REACT_APP_EXAMPLE_VAR}</h3>
      
    </div>
  );
};
