import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import logo from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/fedrel-bank.png";
import image1 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/Fednet_Logo_new.jpg";
import image2 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/PersonalNoText.jpg";
import image3 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/pbank.png";
import image4 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/icons.png";
import { Box, Button, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
export default function LogPag() {
  return (
    <>
      <Sheet
        sx={{
          width: "100%",
          height: "4.5em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#004e96",
          borderBottom:'3px solid #fca61b'
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            height: "100%",
            width: "15%", // Adjust the width to fit your design
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center", // Ensures the image stays at the left
            ml: "3em",
          }}
        ></Box>

        {/* Right Image */}
        <Box
          sx={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "contain",
            height: "100%",
            width: "15%", // Adjust the width to fit your design
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center", // Ensures the image stays at the right
            alignSelf: "flex-end", // Optional: adjust vertical alignment if necessary
          }}
        ></Box>
      </Sheet>
      <Sheet
        sx={{
          width: "100%",
          height: "39.5em",
        }}
      >
        <Typography
          sx={{
            textAlignLast: "center",
            mt: "0.4em",
            fontWeight: "700",
            fontSize: "33px",
          }}
        >
          Personal Banking
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "15em",
            width: "70vw",
            justifyContent: "center",
            alignItems: "centre",
            ml: "15em",
            mt: "1em",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              height: "100%",
              width: "35%", // Adjust the width to fit your design
              backgroundRepeat: "no-repeat",


            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              height: "100%",
              width: "65%", // Adjust the width to fit your design
              backgroundRepeat: "no-repeat",
         

            }}
          ></Box>
        </Box>
        <Box sx={{
           display: "flex",
            flexDirection:'row-reverse',
            width: "70vw",
            ml: "15em",
            mt: "1em",}}>
          <Link to={'/Afterlog'}><Button sx={{backgroundColor:'#004e96',ml:'1em'}}>Continue to Login</Button></Link>
          <Button sx={{backgroundColor:'#004e96'}}>Back</Button>
        </Box>
        <Box sx={{
                   height: "4.1em",
                   width: "70vw",
                   ml: "15em",
                   mt: "1em",
                   backgroundImage:`url(${image4})`,
                   backgroundSize: "contain",
                   backgroundRepeat:'no-repeat'}}>

            </Box>
      </Sheet>
    </>
  );
}
