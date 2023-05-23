import { Button, TextField } from "@mui/material";
// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
// import LogoutIcon from "@mui/icons-material/Logout";
import { Formik, Form } from "formik";
// import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import appStyle from "../AppStyle.module.css";
// import { useState } from "react";

// function stringAvatar(name) {
//   return {
//     children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//   };
// }

export const SignIn = () => {
  const navigate = useNavigate();
  function navigateToHome(value) {
    console.log("clicked");
    console.log("form submitted:", value);

    navigate("/");
  }
  const initialValue = {
    name: "",
    email: "",
  };
  // const [name, setName] = useState("Vinit Mehta");
  // const [email, setEmail] = useState("@gmail.com");

  return (
    <div className={appStyle.Container}>
      {/* <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div className={appStyle.NamePlate}>
            <div {...bindTrigger(popupState)}>
              {/* <Avatar {...stringAvatar("Vinit Mehta")} /> */}
      {/* <h4>{name}</h4> */}
      {/* </div>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <span>Vinit Mehta</span>
                <LogoutIcon onClick={navigateToHome}></LogoutIcon>
              </div>
            </Popover>
          </div> */}

      {/* </PopupState> */}

      <div className={appStyle.MContainer}>
        <h2>Sign In</h2>
        <Formik
          initialValue={initialValue}
          // validationSchema={}
          onSubmit={navigateToHome}
        >
          {({ value, handleChange,handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                name="name"
                label="Name"
                variant="outlined"
                // onChange={handleChange}
              />
              <TextField
                type="email"
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                // onChange={handleChange}
              />
              <Button variant="outlined" type="submit">
                SignIn
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
