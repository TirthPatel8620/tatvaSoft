import { Button, TextField, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import appStyle from "../AppStyle.module.css"
function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const SignIn = () => {
  const navigate = useNavigate();
  const navigateToHome=()=>{
    console.log("clicked");
    navigate("/");
  }
  return (
    <div className={appStyle.Container}>
      <div className={appStyle.NamePlate}>
        
          <Avatar {...stringAvatar("Vinit Mehta")} />
          <h4>Vinit Mehta</h4>
        
      </div>
      <div className={appStyle.MContainer}>
        <h2>Sign In</h2>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button variant="outlined" onClick={navigateToHome}>
          SignIn
        </Button>
      </div>
    </div>
  );
};
