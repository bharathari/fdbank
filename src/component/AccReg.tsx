import {
  Box,
  Button,
  Input,
  Sheet,
  styled,
  Switch,
  Textarea,
  Typography,
  List,
  ListItem,
  Divider,
  Breadcrumbs,
} from "@mui/joy";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import logo from "../images/logo.png";
import phone from "../images/mobile-icon.png";
import phone_no from "../images/phone-no.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import image from "../images/Savings-Account.webp";
function AccReg() {
  const [showOptions, setShowOptions] = React.useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Sheet
        variant="plain"
        color="neutral"
        sx={{
          height: "35%",
          backgroundColor: "#004e96",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              pt: "0.7em",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <Input
              name="Soft"
              endDecorator={<SearchIcon />}
              placeholder="What are you looking for….."
              variant="soft"
              sx={{ width: "16em", flexGrow: 1 }}
            />
            <Typography
              sx={{ color: "white", fontSize: "0.8em", pl: "0.8rem" }}
            >
              A-
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "0.8em", pl: "0.8rem" }}
            >
              A
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "0.8em", pl: "0.8rem" }}
            >
              A+
            </Typography>
            <VisibilityOutlinedIcon
              sx={{ color: "white", fontSize: "1em", pl: "0.8rem" }}
            />
          </Box>
          <Box
            sx={{
              width: "85%",
              mt: "1em",
              height: "159px",
              backgroundColor: "white",
              borderTopLeftRadius: "55px",
              borderTopRightRadius: "55px",
            }}
          >
            <Box
              sx={{
                height: "55%",
                m: "1em 2em 0em 2em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: "contain",
                    height: "70%",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundImage: `url(${phone})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "75%",
                    position: "relative",
                    bottom: "1em",
                    width: "50%",
                    ml: "1em",
                    mr: "0em",
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundImage: `url(${phone_no})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "70%",
                    position: "relative",
                    ml: "0em",
                    right: "3.5em",
                    width: "70%",
                  }}
                ></Box>
              </Box>
              <Box>
                <div
                  style={{ position: "relative", display: "inline-block" }}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
                    onMouseEnter={handleMouseEnter}
                    size="lg"
                    sx={{
                      mr: "2em",
                      pl: "2em",
                      pr: "2em",
                      backgroundColor: "#faa61a",
                    }}
                  >
                    <Person2OutlinedIcon />
                    Login
                  </Button>
                  {showOptions && (
                    <List
                      size="sm"
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        pl: "0.5em",
                        backgroundColor: "#f4f4f4",
                        width: "80%",
                        WebkitBorderBottomLeftRadius: "20px",
                        WebkitBorderBottomRightRadius: "20px",
                        boxShadow: 3,
                        zIndex: 10,
                      }}
                    >
                      <ListItem
                        sx={{
                          textDecoration: "none",
                          transition: "font-weight 0.3s",
                          "&:hover": {
                            fontWeight: "bold",
                          },
                        }}
                        component="a"
                        href="/login"
                      >
                        Net Banking
                      </ListItem>

                      <Divider />
                      <ListItem
                        sx={{
                          textDecoration: "none",
                          transition: "font-weight 0.3s",
                          "&:hover": {
                            fontWeight: "bold",
                          },
                        }}
                        component="a"
                        href="#option1"
                      >
                       Online Trading
                      </ListItem>

                      <Divider />
                      <ListItem
                        sx={{
                          textDecoration: "none",
                          transition: "font-weight 0.3s",
                          "&:hover": {
                            fontWeight: "bold",
                          },
                        }}
                        component="a"
                        href="#option1"
                      >
                        Feddy Portal
                      </ListItem>

                      <Divider />
                      <ListItem
                        sx={{
                          textDecoration: "none",
                          transition: "font-weight 0.3s",
                          "&:hover": {
                            fontWeight: "bold",
                          },
                        }}
                        component="a"
                        href="#option1"
                      >
                        Fed-e-Biz
                      </ListItem>

                      <Divider />
                      <ListItem
                        sx={{
                          textDecoration: "none",
                          transition: "font-weight 0.3s",
                          "&:hover": {
                            fontWeight: "bold",
                          },
                        }}
                        component="a"
                        href="#option1"
                      >
                        Fed-e-Remit
                      </ListItem>

                      <Divider />
                      <ListItem
                        sx={{
                          textDecoration: "none",
                          transition: "font-weight 0.3s",
                          "&:hover": {
                            fontWeight: "bold",
                          },
                        }}
                        component="a"
                        href="#option1"
                      >
                        FedCorp Web
                      </ListItem>
                    </List>
                  )}
                </div>
                <Button
                  size="lg"
                  sx={{
                    mr: "2em",
                    pl: "2em",
                    pr: "2em",
                    backgroundColor: "#faa61a",
                  }}
                >
                  <Person2OutlinedIcon />
                  Fed-e-Point
                </Button>
              </Box>
              
            </Box>
            
            <Box sx={{width:'50%',backgroundColor:'#004e96',height:'35%',ml:'0.5em',display:'flex',justifyContent:"space-around",alignItems:"center",borderTopLeftRadius:"36px",borderTopRightRadius:'36px'}}>
                <Typography sx={{color:'white',fontWeight:'bold'}}>Personal</Typography>
                <Typography sx={{color:'white',fontWeight:'bold'}}>NRI</Typography>
                <Typography sx={{color:'white',fontWeight:'bold'}}>Business</Typography>
              </Box>
            
          </Box>
        </Box>
      </Sheet>
      <Sheet sx={{height:'31em',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <Box sx={{height:'100%',width:'85%'}}>
          <Box>
          <Breadcrumbs separator="›" size="md" aria-label="breadcrumbs">
          <Typography sx={{color:'#004e96',fontWeight:'light'}}>Home</Typography>
          <Typography sx={{color:'#004e96',fontWeight:'light'}}>Personal</Typography>
          <Typography>Savings Accounts</Typography>
          </Breadcrumbs>
          </Box>
          <Box sx={{backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height:'75%',width:'100%',borderRadius:'80px 80px 80px 80px '}}>
          </Box>
        </Box>
      </Sheet>
    </>
  );
}

export default AccReg;
