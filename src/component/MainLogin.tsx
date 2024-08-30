import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import BgImg from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/LoginBg.jpeg";
import captcha from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/captcha.png";
import { Box, Button, Input, Typography } from "@mui/joy";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import { Link } from "react-router-dom";
export default function MainLogin() {
  return (
    <>
      <Sheet
        sx={{
          width: "100vw",
          height: "100Vh",
          justifyContent: "space-between",
          alignItems: "start",
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            height: "18em",
            width: "18em",
            backgroundColor: "white",
            m: "2em",
          }}
        >
          <Box sx={{ padding: "0.5em" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "sm" }}>
                Need an Account?{" "}
                <Typography sx={{ color: "blue" }}>Sign Up</Typography>{" "}
              </Typography>
            </Box>
            <Input
              placeholder="   User ID"
              size="sm"
              sx={{
                width: "90%",
                alignSelf: "center",
                borderRadius: "2px",
                ml: "1em",
                mt: "1em",
              }}
            />
            <Input
              placeholder="   Password"
              endDecorator={<KeyboardAltOutlinedIcon />}
              size="sm"
              sx={{
                width: "90%",
                alignSelf: "center",
                borderRadius: "2px",
                ml: "1em",
                mt: "1em",
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
              <Input
                placeholder="   Verification code"
                size="sm"
                sx={{
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: "2px",
                  ml: "1em",
                  mt: "1em",
                }}
              />
              <Box
                sx={{
                  height: "2em",
                  width: "60%",
                  backgroundImage: `url(${captcha})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Box>
            <Link to="Afterlogin"><Button sx={{width:'90%',m:'1em',backgroundColor:'#004e96',borderRadius:'1px',height:'80%'}}>Log In</Button></Link>
            <Box sx={{display:'flex',flexDirection:'row',m:'0.5em',justifyContent:'space-between'}}>
              <Typography  sx={{color:'#004e96',fontSize: "0.8em" }}>Forgot Password?</Typography>
              <Box>
              <Typography  sx={{color:'#004e96',fontSize: "0.8em" }}>Forgot User ID?</Typography>
              <Typography  sx={{color:'#004e96',fontSize: "0.8em" }}>Unlock User ID?</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Sheet>
    </>
  );
}
