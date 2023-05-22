import Box from "@mui/material/Box";
import { Button, ThemeProvider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppStyle from "../AppStyle.module.css";
import { theme } from "../Theme";


function MuiSignin() {
  return (
    <>
      <h1>Sign in</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" />
      </Box>
      <ThemeProvider theme={theme}> 
      <Button className={AppStyle.buttonStyle} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </ThemeProvider>
    </>
  );
}

export default MuiSignin;
