import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import logo from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/fedrel-bank.png";
import image1 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/Fednet_Logo_new.jpg";
import image2 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/PersonalNoText.jpg";
import image3 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/pbank.png";
import image4 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/icons.png";
import { Box, Button, Typography } from "@mui/joy";
export default function AfterLogPag() {
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
          width: "99.5%",
          height: "39.5em",
          border:'3px solid #fca61b'
        }}
      >

      </Sheet>
    </>
  );
}
