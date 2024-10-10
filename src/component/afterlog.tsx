import Sheet from "@mui/joy/Sheet";

import logo from "../images/fedrel-bank.png";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { Box, Button, Input,AccordionGroup,Accordion,AccordionDetails,AccordionSummary,accordionSummaryClasses, Typography, Stack} from "@mui/joy";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {  Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AfterLogPag() {
  const [acc, setAcc] = useState(false);
  const navigate =useNavigate();
  const value=useLocation();
  const Accname=value.state.username;
  const [username, setUsername] = useState("");
  const updateUsername = (Accname: string) => {
    if (Accname === "bharat") {
      setUsername("Hari bharat");
    } else if (Accname === "sahil") {
      setUsername("Sahil Ahamed");
    }
    else setUsername(Accname);
  };

  // Assuming the username will be provided via some external prop or state
useEffect(() => { // You can replace this with value.state.username if coming from props
    updateUsername(Accname);
  },); 
  const AccInfo = [
    "Operative Accounts",
    "Deposit Accounts",
    "Loan Accounts",
    "All Accounts",
    "IBU GIFT City Accounts",
  ];
  const handleClick = (index: number) => {
    if (index === 0) {
      navigate("./LoginTwo",{state:{username}})
     
    }
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
          overflowY:'hidden',
          position:'sticky',
          top:'0px',
          zIndex:1
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
        <Box
          sx={{ display: "flex",gap:4, justifyContent: "space-evenly", width: "50%",alignItems:'center'}}
        >
          <PhoneEnabledOutlinedIcon fontSize="large" sx={{ color: "white" }} />
          <RefreshOutlinedIcon fontSize="large" sx={{ color: "white" }} />
          <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: "white" }} />
          <MarkEmailUnreadOutlinedIcon
            fontSize="large"
            sx={{ color: "white" }}
          />
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1}><AccountCircleIcon fontSize="large" sx={{color:'white'}}/>
          <Box><Typography sx={{color:'whitesmoke',fontWeight:'700',maxWidth:'15vw'}}>{username}</Typography></Box>
          <ArrowDropDownIcon sx={{color:'white'}}/>
          </Box>
          
        </Box>
      </Sheet>
      <Sheet
        sx={{
          width: "99.2vw",
          height: "100%",
          minHeight:"100vh",
          border: "5px solid #fca61b",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {acc && (
            <Box
              onMouseEnter={() => setAcc(true)}
              onMouseLeave={() => {
                setAcc(false);
              }}
              sx={{
                height: "fit-content",
                width: "20em",
                position: "fixed",
                zIndex: 11,
                left:"21.5%",
                backgroundColor: "whitesmoke",
              }}
            >
              <AccordionGroup
                sx={{
                  maxWidth: 400,
                  [`& .${accordionSummaryClasses.indicator}`]: {
                    transition: "0.2s",
                  },
                  [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
                    {
                      transform: "rotate(45deg)",
                    },
                }}
              >
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#004e96",color:'white' }}
                    indicator={<AddIcon />}
                  >
                   <Typography textColor={'#fff'}> Account Info</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    {AccInfo.map((item, index) => (
                      <Stack
                        key={index}
                        onClick={() => handleClick(index)}
                        sx={{ color: "black",mt:1,cursor:'pointer'}}
                        
                        
                      >
                        {item}
                      </Stack>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#004e96" }}
                    indicator={<AddIcon />}
                  >
                   <Typography textColor={'#fff'}> Services</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#004e96",'&:hover':{color:'black'} }}
                    indicator={<AddIcon />}
                  >
                    <Typography textColor={'#fff'}>Demat Account Services</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </Box>
          )}
        <Box
          sx={{
            overflow:'hidden',
            backgroundColor: "#d3d3d369",
            width: "20%",
            padding: "1em",
            pl: "1em",
          }}
        >
          <Input
            placeholder="  search......"
            size="sm"
            sx={{
              width: "95%",
              height: "2em",
              alignSelf: "center",
              borderRadius: "3px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "flex-start",
              flexWrap: "wrap",
              gap:'18px',
              mt:3
            }}
          >
            <Button
              startDecorator={<HomeOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px", mr: "4em" }}
              onClick={()=>{navigate('/Afterlogin',{state:{username}})}}
            >
              HOME
            </Button>
            <Button
              startDecorator={<StyleOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px", mr: "4em" }}
            >
              CREDIT CARDS
            </Button>
            <Button
              onMouseEnter={() => setAcc(true)}
              startDecorator={<ContactMailOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", pr: "5em", pl: "0px",  }}
            >
              ACCOUNTS
            </Button>
            <Button
              startDecorator={<CurrencyExchangeOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              TRANSFER FUNDS
            </Button>
            <Button
              startDecorator={<PersonAddAltOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              BENEFICIARIES
            </Button>
            <Button
              startDecorator={<BuildOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              ADD-ON SERVICES
            </Button>
            <Button
              startDecorator={<RequestQuoteOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px",pr:4  }}
            >
              BILL PAYMENTS     
            </Button>
            <Button
              startDecorator={<ReceiptLongOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              MANAGE TAX
            </Button>
            <Button
              startDecorator={<SupportAgentOutlinedIcon />}
              size="sm"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              CUSTOMER SERVICE
            </Button>
            <Button
              startDecorator={<AccountCircleOutlinedIcon />}
              size="md"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              MY PROFILE
            </Button>
            <Button
              startDecorator={<CreditCardOutlinedIcon />}
              size="md"
              variant="plain"
              sx={{ color: "black", padding: "0px",  }}
            >
              DEBIT CARD SERVICES
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "80%",
            overflowY:'auto'
          }}
          flexGrow={1}
          
        >
          <Outlet/>
         </Box>
      </Sheet>
      <Sheet
        sx={{
          width: "100%",
          height: "5vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:'whitesmoke',
          overflowY:'hidden',
          position:'Fixed',
          bottom:'0px',
          zIndex:1
        }}
        >

        </Sheet>
    </>
  );
}
