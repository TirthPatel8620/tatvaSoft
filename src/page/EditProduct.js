import { TextField, Select, MenuItem, InputLabel, Button, InputAdornment } from "@mui/material";
import "../EditProduct.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const EditProduct = () => {
  const initialValue = {
    bookname: "",
    price: "",
    category: "",
    description: "",
  };
  const validateSchema = Yup.object().shape({
    bookname: Yup.string().required("required"),
    price: Yup.string().required("required"),
    description: Yup.string().min(20, "Make sure to have aleast 20 charater"),
  });

  function onClickSubmit(value) {
    console.log("Form Submitted.....");
    console.log(value);
    toast("success")

  }
  return (
    <div
      style={{
        fontFamily: "Roboto",
      }}
    >
      <div id="heading">
        <h1
          style={{
            fontSize: "35",
            fontFamily: "Roboto",
          }}
        >
          Edit Product
        </h1>
      </div>
      <hr className="heading-below-line"></hr>
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
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="GridContainer">
              <div className="itemContainer">
                <span>Book Name*</span>
                <TextField
                  id="outlined-basic"
                  name="bookname"
                  // label="First Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.bookname && errors.bookname && (
                  <div className="error">{errors.bookname}</div>
                )}
              </div>
              <div className="itemContainer">
                <span>Book Price(Rs)*</span>
                <TextField
                  id="outlined-basic"
                  name="price"
                  // label="Price"
                  variant="outlined"
                  fullWidth
                  size="small"
                  startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.price && errors.price && (
                  <div className="error">{errors.price}</div>
                )}
              </div>
              <div className="itemContainer">
                <span>Category</span>
                <InputLabel id="CategoryList"></InputLabel>
                <Select
                  defaultValue=""
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {/* <MenuItem value={""}></MenuItem> */}
                  <MenuItem value={"Bookcategory"}>Bookcategory</MenuItem>
                  <MenuItem value={"Bookcategory"}>Bookcategory</MenuItem>
                  <MenuItem value={"Bookcategory"}>Bookcategory</MenuItem>
                </Select>
              </div>
              <div className="itemContainer">
                <span>Description</span>
                <TextField
                  name="description"
                  id="outlined-multiline-flexible"
                  // label="Description"
                  fullWidth
                  multiline
                  maxRows={4}
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {touched.description && errors.description && (
                  <div className="error">{errors.description}</div>
                )}
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
