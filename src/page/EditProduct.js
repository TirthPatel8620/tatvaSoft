import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";
import appStyle from "../AppStyle.module.css";
import { Formik } from "formik";
import * as Yup from "yup";

export const EditProduct = () => {
  const initialValue = {
    firstname: "",
    lastname: "",
    category: "",
    description: "",
  };
  const validateSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(1, "required").required("required"),
    lastname: Yup.string().min(1,"1 required").required("required"),
    description: Yup.string().min(20, "Make sure to have aleast 20 charater"),
  });

  function onClickSubmit(value) {
    console.log("Form Submitted.....");
    console.log(value);
  }
  return (
    <div
      style={{
        fontFamily: "Roboto",
      }}
    >
      <div id={appStyle.heading}>
        <h1
          style={{
            fontSize: "35",
            fontFamily: "Roboto",
          }}
        >
          Edit Product
        </h1>
      </div>
      <Formik
        initialValues={initialValue}
        validationSchema={validateSchema}
        onSubmit={onClickSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChnage,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={appStyle.GridContainer}>
              <div className={appStyle.itemContainer}>
                <span>First Name*</span>
                <TextField
                  id="outlined-basic"
                  name="firstname"
                  // label="First Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  onChange={handleChnage}
                  onBlur={handleBlur}
                />
                {touched.firstname && errors.firstname && (
                  <div className={appStyle.error}>{errors.firstname}</div>
                )}
              </div>
              <div className={appStyle.itemContainer}>
                <span>Last Name*</span>
                <TextField
                  id="outlined-basic"
                  name="lastname"
                  // label="Last Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  onChange={handleChnage}
                  onBlur={handleBlur}
                />
                {touched.lastname && errors.lastname && (
                  <div className={appStyle.error}>{errors.lastname}</div>
                )}
              </div>
              <div className={appStyle.itemContainer}>
                <span>Category</span>
                <InputLabel id="CategoryList" ></InputLabel>
                <Select
                name="category"
                  style={{
                    width: "20",
                  }}
                  labelId="CategoryList"
                  id="demo-simple-select"
                  //   value={age}
                  // label="Category"
                  fullWidth
                  size="small"
                  onChange={handleChnage}
                  onBlur={handleBlur}
                >
                  {/* <MenuItem value={""}></MenuItem> */}
                  <MenuItem value={"Bookcategory"}>Bookcategory</MenuItem>
                  <MenuItem value={"Bookcategory"}>Bookcategory</MenuItem>
                  <MenuItem value={"Bookcategory"}>Bookcategory</MenuItem>
                </Select>
              </div>
              <div className={appStyle.itemContainer}>
                <span>Description</span>
                <TextField
                  name="description"
                  id="outlined-multiline-flexible"
                  // label="Description"
                  fullWidth
                  multiline
                  maxRows={4}
                  size="small"
                  onChange={handleChnage}
                  onBlur={handleBlur}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  // border:"1px solid red",
                  marginTop: "25px",
                  alignItems: "center",
                }}
              >
                <label htmlFor="raised-button-file">
                  <Button
                    variant="raised"
                    component="span"
                    style={{
                      backgroundColor: "#F14d54",
                      color: "white",
                      height: "40px",
                      width: "120px",
                      zIndex: "1",
                    }}
                  >
                    Upload
                  </Button>
                </label>
                <input
                  accept="image/*"
                  //   className={classes.input}
                  //   style={{ display:  }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "25px",
                    top: "10px",
                  }}
                />
              </div>
              <br />
              {/* <div></div> */}

              <div
                style={{
                  display: "flex",
                  felxDirection: "row",
                  columnGap: "1vh",
                }}
              >
                <Button
                  variant="raised"
                  type="submit"
                  style={{
                    backgroundColor: "#7dc12b",
                    color: "white",
                    height: "40px",
                    width: "100px",
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="raised"
                  style={{
                    backgroundColor: "#F14d54",
                    color: "white",
                    height: "40px",
                    width: "100px",
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
