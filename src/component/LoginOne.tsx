import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, accordionSummaryClasses, Box, Breadcrumbs, Button, Input, Radio, Table, Typography } from "@mui/joy";
import { Link, useLocation } from "react-router-dom";
import img1 from '/Users/bharathari/Downloads/Srinivas anna/fdbank/src/component/AfterLogin.png';
import LockIcon from '@mui/icons-material/Lock';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
export default function LoginOne() {
  const location =useLocation();
  const username=location.state.username;
  return (
    <>
    <Box display={"flex"} flexDirection={'row-reverse'} gap={2}>
        <Box 
        sx={{backgroundImage:`url(${img1})`, height:'100vh',width:'25vw',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></Box>
        <Box height={'80vh'} width={'23vw'} marginTop={'0.5em'}>
          <Box sx={{height:'20%',width:'100%',backgroundColor:'green',display:'flex',flexDirection:'column-reverse',alignItems:'flex-end',justifyContent:'center'}}>
          <Typography sx={{color:"whitesmoke",fontSize:'1.3em',pr:'0.5em'}}>$ 22,924.91</Typography>
          <Typography sx={{color:"whitesmoke",fontSize:'1.3em',pr:'0.5em'}}>Account Balance</Typography>
          </Box>
          <Box height={'60%'} width={'90%'} padding={'0.85em'} marginTop={'0.5em'} sx={{backgroundColor:'#87ceeba1'}}>
            <Box >
              <Box sx={{backgroundColor:'#004e96',minheight:'30%',width:'100%',padding:'1em 0em 1em 0em',display:'flex',flexDirection:'row'}}> <LockIcon sx={{color:'white'}}/><Typography sx={{ color:'white',ml:'0.5em'}}>   Login Password Last Changed On</Typography></Box>
              <Box sx={{backgroundColor:'white',minheight:'30%',width:'100%',padding:'1em 0em 1em 0em',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',display:'flex',justifyContent:'center'}}><Typography sx={{fontWeight:"700",alignSelf:'center'}}>30/08/2024</Typography></Box>
            </Box>
            <Box marginTop={2}>
              <Box sx={{backgroundColor:'#004e96',minheight:'30%',width:'100%',padding:'1em 0em 1em 0em',display:'flex',flexDirection:'row'}}> <LockIcon sx={{color:'white'}}/><Typography sx={{ color:'white',ml:'0.5em'}}>   Transaction Password Last Changed </Typography></Box>
              <Box sx={{backgroundColor:'white',minheight:'30%',width:'100%',padding:'1em 0em 1em 0em',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',display:'flex',justifyContent:'center'}}><Typography sx={{fontWeight:"700",alignSelf:'center'}}>30/08/2024</Typography></Box>
            </Box>
            <Box marginTop={2}>
              <Box sx={{minheight:'30%',width:'100%',padding:'1em 0em 1em 0em',display:'flex',flexDirection:'row',color:'#blue',fontWeight:'800',alignItems:'center'}}>Change your password frequently and safeguard your digital transactions from cyber criminals </Box>
            </Box>
          </Box>
        </Box>
        <Box height={'80vh'} width={'26vw'} marginTop={'0.5em'}>
          <Box sx={{height:'20%',width:'100%',backgroundColor:'#004e96',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <KeyboardArrowLeftIcon sx={{fontSize:'3.2em',color:'white',fontWeight:'40'}}/>
            <Box sx={{height:'100%',minWidth:'70%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
              <Typography sx={{fontSize:'1.3em',color:'orange'}}>{username}</Typography>
              <Typography sx={{fontSize:'1.3em',color:'white',fontWeight:'550'}}>99980116907582</Typography>
              <Typography sx={{color:'skyblue',fontSize:'small'}}>Savings</Typography>
            </Box>
            <KeyboardArrowRightIcon sx={{fontSize:'3.2em',color:'white',fontWeight:'40'}}/>
          </Box>
          <AccordionGroup
      sx={{
        mt:'1em',

        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
      }}
    >
      <Accordion sx={{backgroundColor:'#d3d3d3'}}>
        <AccordionSummary indicator={<AddIcon />}>Account Summary</AccordionSummary>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary indicator={<AddIcon />} >Savings</AccordionSummary>
        <AccordionDetails>
        <Table borderAxis="bothBetween" variant="outlined">
                <thead>
                  <tr>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:'0.8em'
                      }}
                    >
                      Account Number
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:'0.8em'

                      }}
                    >
                      Account Type
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                        fontSize:'0.8em'
                      }}
                    >
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr>

                <td style={{fontSize:'0.8em'}}>99980116907582</td>
                <td style={{fontSize:'0.8em'}}> Savings</td>

                <td style={{fontSize:'0.8em'}}>22,921.91 cr</td>
                </tr>
                </tbody>
              </Table>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
          </Box>
    </Box>
    </>
  );
}
