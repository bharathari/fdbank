import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import { Box, Breadcrumbs, Button, Input, Radio, Table, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import img1 from '/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/AfterLogin.png'
export default function LoginOne() {
  return (
    <>
    <Box display={"flex"} flexDirection={'row-reverse'}>
        <Box 
        sx={{backgroundImage:`url(${img1})`, height:'80vh',width:'20vw',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></Box>
    </Box>
    </>
  );
}
