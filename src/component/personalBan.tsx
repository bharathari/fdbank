import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import logo from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/fedrel-bank.png";
import image1 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/Fednet_Logo_new.jpg";
import image2 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/main_image-1B.jpg";
import image3 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/pbank.png";
import image4 from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/icons.png";
import { Box, Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Slide } from "@mui/material";

export default function SimpleSheet() {
  const [showSheet, setShowSheet] = useState(false);

  const handleButtonClick = () => {
    setShowSheet(true);
  };

  return (
    <>
      <Sheet
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#004e96",
          borderBottom: "3px solid #fca61b",
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            height: "90%",
            width: "15%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            ml: "3em",
          }}
        ></Box>

        {/* Right Image */}
        <Box
          sx={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "contain",
            height: "90%",
            width: "15%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            alignSelf: "flex-end",
          }}
        ></Box>
      </Sheet>
      {!showSheet ?(
      <Sheet
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      >
        <ButtonGroup
          spacing="0.5rem"
          aria-label="spacing button group"
          size="lg"
          sx={{ mt: "2em", ml: "20em" }}
        >
          <Button
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)", p: "1em 4em" }}
            onClick={handleButtonClick}
          >
            PERSONAL BANKING
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              p: "1em 4em 1em 4em",
            }}
          >
            CORPORATE BANKING
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              p: "1em 4em 1em 4em",
            }}
          >
            NEW USER
          </Button>
        </ButtonGroup>
      </Sheet>
):null}
      <Slide timeout={1000} direction="up" in={showSheet} mountOnEnter unmountOnExit>
        <Sheet
          sx={{
            width: "100%",
            height: "90vh",
            position: "fixed",
            bottom: 0,
            left: 0,
            zIndex:'1',
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
              alignItems: "center",
              ml: "15em",
              mt: "1em",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                height: "100%",
                width: "35%",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${image3})`,
                backgroundSize: "cover",
                height: "100%",
                width: "65%",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              width: "70vw",
              ml: "15em",
              mt: "1em",
            }}
          >
            <Link to={"/MainLogin"}>
              <Button sx={{ backgroundColor: "#004e96", ml: "1em" }}>
                Continue to Login
              </Button>
            </Link>
            <Button sx={{ backgroundColor: "#004e96" }}>Back</Button>
          </Box>
          <Box
            sx={{
              height: "4.1em",
              width: "70vw",
              ml: "15em",
              mt: "1em",
              backgroundImage: `url(${image4})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Sheet>
        </Slide>
    </>
  );
}
