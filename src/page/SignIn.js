import { Button, TextField } from "@mui/material";
// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
// import LogoutIcon from "@mui/icons-material/Logout";
import { Formik, Form } from "formik";
// import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import appStyle from "../AppStyle.module.css";
import * as Yup from "yup";
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

    // navigate("/");
  }
  const initialValue = {
    name: "",
    email: "",
  };
  const validateSchemaform = Yup.object().shape({
    name: Yup.string().min(3, "Please make sure atlest 3 character in name").required("Required"),
    email: Yup.string().email("Please enter valid email"),
  });
  // const [name, setName] = useState("Vinit Mehta");
  // const [email, setEmail] = useState("@gmail.com");

  return (
    <div className={appStyle.Container}>
      <Formik
        initialValues={initialValue}
        validationSchema={validateSchemaform}
        onSubmit={navigateToHome}
      >
        {({
          values,
          touched,
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={appStyle.MContainer}>
              <h1>Sign in</h1>
              <TextField
                id="outlined-basic"
                name="name"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div className={appStyle.error}>{errors.name}</div>
              )}
              <TextField
                id="outlined-basic"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className={appStyle.error}>{errors.email}</div>
              )}

              <Button type="submit" variant="outlined">
                SignIn
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
