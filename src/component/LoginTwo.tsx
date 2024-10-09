import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import { Box, Breadcrumbs, Button,  Radio, Stack, Table, Typography } from "@mui/joy";
import {  useLocation, useNavigate } from "react-router-dom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";


// const pdfFile = '../pdf/sahil.pdf'
export default function LoginTwo() {
  const location =useLocation();
  const navigate = useNavigate();
  const username=location.state.username;

    const handleStatement = () => {
      navigate('../Statement',{state:{username}});
  };

  return (
    <Stack>
     <Box sx={{ height: "5vh" }}>
            {/* this is for the scrollable object

            */}
          </Box>
          <Breadcrumbs separator=">" aria-label="breadcrumbs">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#004e96",
                fontWeight: "500",
              }}
              level='body-xs'
            >
              <StickyNote2Icon sx={{ mr: 0.5, alignContent: "center" }} />
              Accounts: Accounts Info
            </Typography>

            
              <Typography  sx={{ color: "#004e96" }} level="body-xs">
                Operative Accounts
              </Typography>
               <Typography  sx={{ color: "#6d6767e3" }} level="body-xs">
                My Operative accounts
              </Typography>
          
          </Breadcrumbs>
          <Box
            sx={{
              height: "5vh",
              backgroundColor: "#004e96",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0.2em 0.2em 0em 0.2em",
             px:2
            }}
          >
            <Typography sx={{ color: "whitesmoke" }} level="body-xs">
              Myoperative accounts
            </Typography>
            <Typography sx={{ color: "whitesmoke" }} level="body-xs">
              View Closed Operative Acounts
            </Typography>
          </Box>
          <Box
            sx={{
              height: "30vh",
              border: "2px solid #004e96",
              margin: "0 0.2em 0.2em 0.2em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "1em",
                marginTop:2
              }}
            >
              <Button
                sx={{
                  border: "1.5px solid #fca61b",
                  borderRadius: "1px",
                  color: "#0000009c",
                  px:4,
                  fontSize:12
                }}
                variant="outlined"
                onClick={handleStatement}
              >
                <StickyNote2OutlinedIcon />
                Statement Of Accounts
              </Button>
              <Button
                sx={{
                  border: "1.5px solid #fca61b",
                  borderRadius: "1px",
                  color: "#0000009c",
                px:4, fontSize:12
                }}
                variant="outlined"
                
              >
                <FormatAlignLeftOutlinedIcon />
                Mini Statement
              </Button>
              <Button
                sx={{
                  border: "1.5px solid #fca61b",
                  borderRadius: "1px",
                  color: "#0000009c",
                  pl: 1,
                  pr: 0,
                   fontSize:12
                }}
                variant="outlined"
                
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography sx={{ pr: "3em" }} fontSize={12} textColor={'#0000009c'}>More Options</Typography>
                  <ArrowDropDownOutlinedIcon />
                </Box>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "1em",
                pl: "1em",
                pr: "1em",
                mt: 2,
              }}
            >
              <Typography level="body-xs">Operavtive Accounts List</Typography>
              <Typography level="body-xs">Displaying 1 - 1 of 1 results</Typography>
            </Box>
            <Sheet sx={{ pl: "1em", pr: "1em" }}>
              <Table borderAxis="bothBetween" variant="outlined">
                <thead>
                  <tr>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:12
                      }}
                    >
                      Account Number
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:12
                      }}
                    >
                      Nick Name
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:12,
                      }}
                    >
                      Account Type
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:12
                      }}
                    >
                      Branch
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:12
                      }}
                    >
                      Currency
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:12
                      }}
                    >
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td style={{color:'#0000009c',fontSize:12}}><Radio checked color="success" value="small" label="99980116907580"  size="sm" /></td>
                <td style={{color:'#0000009c',fontSize:12}} >{username}</td>
                <td style={{color:'#0000009c',fontSize:12}}>SB FEDBOOK SELFIE</td>
                <td style={{color:'#0000009c',fontSize:12}}>Visakhapatnam</td>
                <td style={{color:'#0000009c',fontSize:12}}>INR</td>
                <td style={{color:'#0000009c',fontSize:12}}>22,921.91 cr</td>
                </tr>
                </tbody>
              </Table>
            </Sheet>
          </Box>
        

    </Stack>
  );
}
