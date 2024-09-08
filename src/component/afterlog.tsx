import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import logo from "/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/fedrel-bank.png";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { Box, Button, Input,AccordionGroup,Accordion,AccordionDetails,AccordionSummary,accordionSummaryClasses, Typography} from "@mui/joy";
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
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AfterLogPag() {
  const [acc, setAcc] = React.useState(false);
  const navigate =useNavigate();
  const value=useLocation();
  const Accname=value.state.username;
  const [username, setUsername] = React.useState("");
  const updateUsername = (Accname: string) => {
    if (Accname === "bharat") {
      setUsername("Hari bharat");
    } else if (Accname === "sahil") {
      setUsername("Sahil Ahamed");
    }
  };

  // Assuming the username will be provided via some external prop or state
  React.useEffect(() => { // You can replace this with value.state.username if coming from props
    updateUsername(Accname);
    console.log(Accname);
    
  },[Accname]); 
  const AccInfo = [
    "Operative Accounts",
    "Deposit Accounts",
    "Loan Accounts",
    "All Accounts",
    "IBU GIFT City Accounts",
  ];
  const handleClick = (index: number) => {
    if (index == 0) {
      navigate("./LoginTwo")
      console.log("bh");
      
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
          sx={{ display: "flex",gap:4, justifyContent: "space-evenly", width: "50%" ,alignItems:'center'}}
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
          height: "100vh",
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
                    sx={{ backgroundColor: "#004e96" }}
                    indicator={<AddIcon />}
                  >
                    Account Info
                  </AccordionSummary>

                  <AccordionDetails>
                    {AccInfo.map((item, index) => (
                      <Button
                        key={index}
                        onClick={() => handleClick(index)}
                        variant="plain"
                        sx={{ color: "black" }}
                      >
                        {item}
                      </Button>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#004e96" }}
                    indicator={<AddIcon />}
                  >
                    Services
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#004e96" }}
                    indicator={<AddIcon />}
                  >
                    Demat Account Services
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
            height: "97.5%",
            backgroundColor: "#d3d3d369",
            width: "20%",
            padding: "0.4em",
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
            }}
          >
            <Button
              startDecorator={<HomeOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em", mr: "4em" }}
            >
              HOME
            </Button>
            <Button
              startDecorator={<StyleOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em", mr: "4em" }}
            >
              CREDIT CARDS
            </Button>
            <Button
              onMouseEnter={() => setAcc(true)}
              startDecorator={<ContactMailOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", pr: "5em", pl: "0px", mt: "0.7em" }}
            >
              ACCOUNTS
            </Button>
            <Button
              startDecorator={<CurrencyExchangeOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              TRANSFER FUNDS
            </Button>
            <Button
              startDecorator={<PersonAddAltOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              BENEFICIARIES
            </Button>
            <Button
              startDecorator={<BuildOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              ADD-ON SERVICES
            </Button>
            <Button
              startDecorator={<RequestQuoteOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              BILL PAYMENTS
            </Button>
            <Button
              startDecorator={<ReceiptLongOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              MANAGE TAX
            </Button>
            <Button
              startDecorator={<SupportAgentOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              CUSTOMER SERVICE
            </Button>
            <Button
              startDecorator={<AccountCircleOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              MY PROFILE
            </Button>
            <Button
              startDecorator={<CreditCardOutlinedIcon />}
              size="lg"
              variant="plain"
              sx={{ color: "black", padding: "0px", mt: "0.7em" }}
            >
              DEBIT CARD SERVICES
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: "97.5%",
            width: "80%",
          }}
        >
          <Outlet/>
         </Box>
      </Sheet>
    </>
  );
}
