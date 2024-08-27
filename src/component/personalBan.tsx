import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import logo from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/fedrel-bank.png";
import image1 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/Fednet_Logo_new.jpg";
import image2 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/main_image-1B.jpg";
import { Box } from "@mui/joy";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Link } from "react-router-dom";
export default function SimpleSheet() {
  return (
    <>
<Sheet
  sx={{
    width: "100%",
    height: "5em",
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
      height: "90%",
      width: "15%", // Adjust the width to fit your design
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center", // Ensures the image stays at the left
      ml:'3em'
    }}
  ></Box>

  {/* Right Image */}
  <Box
    sx={{
      backgroundImage: `url(${image1})`,
      backgroundSize: "contain",
      height: "90%",
      width: "15%", // Adjust the width to fit your design
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center", // Ensures the image stays at the right
      alignSelf: "flex-end", // Optional: adjust vertical alignment if necessary
    }}
  >
  </Box>
</Sheet>
<Sheet
  sx={{
    width: "100%",
    height: "39.5em",
    display: "flex",
    justifyContent: "space-between",
    alignItems:'flex-start',
    
    backgroundImage: `url(${image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center", // Ensures the image stays at the left
  }}
>
<ButtonGroup spacing="0.5rem" aria-label="spacing button group" size="lg" sx={{mt:'2em',ml:'20em',}}>
<Link to="/loginPage" style={{ textDecoration: 'none' }}>
      <Button sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', p: '1em 4em' }}>
        PERSONAL BANKING
      </Button>
    </Link>
      <Button sx={{backgroundColor:'rgba(255, 255, 255, 0.5)',p:'1em 4em 1em 4em'}} >CORPERATE BANKING</Button>
      <Button sx={{backgroundColor:'rgba(255, 255, 255, 0.5)',p:'1em 4em 1em 4em'}} >NEW USER</Button>
    </ButtonGroup>
</Sheet>
</>
  );
}
