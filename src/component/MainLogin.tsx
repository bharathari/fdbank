import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import BgImg from "../images/LoginBg.jpeg";
import captcha from "../images/captcha.png";
import { Box, Button, Input, Typography } from "@mui/joy";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import {  useNavigate } from "react-router-dom";
import { useState, } from "react";

export default function MainLogin() {
  // State variable to store the username
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  return (
    <>
      <Sheet
        sx={{
          width: "100vw",
          height: "100Vh",
          justifyContent: "space-between",
          alignItems: "start",
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            height: "21em",
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
              required
              sx={{
                width: "90%",
                alignSelf: "center",
                borderRadius: "2px",
                ml: "1em",
                mt: "1em",
              }}
              // Store the entered value in the username state
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              placeholder="   Password"
              endDecorator={<KeyboardAltOutlinedIcon />}
              size="sm"
              type="password"
              sx={{
                width: "90%",
                alignSelf: "center",
                borderRadius: "2px",
                ml: "1em",
                mt: "1em",
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
             <Input
              placeholder="   Mobile number(including country code)"
              size="sm"
              type="text"
             slotProps={{
                    input: { maxLength: 12 }, 
            }}
              sx={{
                width: "90%",
                alignSelf: "center",
                borderRadius: "2px",
                ml: "1em",
                mt: "1em",
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
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

              <Button
              onClick={()=>{
                navigate("/Afterlogin",{state:{username,password}})
              }}
                sx={{
                  width: '90%',
                  m: '1em',
                  backgroundColor: '#004e96',
                  borderRadius: '1px',
                  height: '80%',
                }}
              >
                Log In
              </Button>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                m: '0.5em',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ color: '#004e96', fontSize: "0.8em" }}>
                Forgot Password?
              </Typography>
              <Box>
                <Typography sx={{ color: '#004e96', fontSize: "0.8em" }}>
                  Forgot User ID?
                </Typography>
                <Typography sx={{ color: '#004e96', fontSize: "0.8em" }}>
                  Unlock User ID?
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Sheet>
    </>
  );
}
