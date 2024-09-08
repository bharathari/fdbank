import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import { Box, Breadcrumbs, Button, Input, Radio, Table, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
export default function LoginTwo() {
  return (
    <>
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
                fontWeight: "600",
              }}
            >
              <StickyNote2Icon sx={{ mr: 0.5, alignContent: "center" }} />
              Accounts: Accounts Info
            </Typography>

            {["Operative Accounts", "My Operative accounts"].map((item) => (
              <Typography key={item} sx={{ color: "#004e96" }}>
                {item}
              </Typography>
            ))}
          </Breadcrumbs>
          <Box
            sx={{
              height: "5vh",
              backgroundColor: "#004e96",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0.2em 0.2em 0em 0.2em",
              pl: 2,
              pr: 2,
            }}
          >
            <Typography sx={{ color: "whitesmoke" }}>
              Myoperative accounts
            </Typography>
            <Typography sx={{ color: "whitesmoke" }}>
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
              }}
            >
              <Button
                sx={{
                  border: "2px solid #fca61b",
                  borderRadius: "1px",
                  color: "black",
                  pl: 4,
                  pr: 4,
                }}
                variant="outlined"
              >
                <StickyNote2OutlinedIcon />
                Statement Of Accounts
              </Button>
              <Button
                sx={{
                  border: "2px solid #fca61b",
                  borderRadius: "1px",
                  color: "black",
                  pl: 4,
                  pr: 4,
                }}
                variant="outlined"
              >
                <FormatAlignLeftOutlinedIcon />
                Mini Statement
              </Button>
              <Button
                sx={{
                  border: "2px solid #fca61b",
                  borderRadius: "1px",
                  color: "black",
                  pl: 1,
                  pr: 0,
                }}
                variant="outlined"
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography sx={{ pr: "3em" }}>More Options</Typography>
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
              <Typography>Operavtive Accounts List</Typography>
              <Typography>Displaying 1 - 1 of 1 results</Typography>
            </Box>
            <Sheet sx={{ pl: "1em", pr: "1em" }}>
              <Table borderAxis="bothBetween" variant="outlined">
                <thead>
                  <tr>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                      }}
                    >
                      Account Number
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                      }}
                    >
                      Nick Name
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                      }}
                    >
                      Account Type
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                      }}
                    >
                      Branch
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                      }}
                    >
                      Currency
                    </th>
                    <th
                      style={{
                        backgroundColor: "rgb(73 186 218 / 59%)",
                        textAlign: "center",
                      }}
                    >
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td><Radio value="small" label="99980116907580" size="sm" /></td>
                <td>Ahammed sahil sahil </td>
                <td>SB FEDBOOK SELFIE</td>
                <td>Visakhapatnam</td>
                <td>INR</td>
                <td>22,921.91 cr</td>
                </tr>
                </tbody>
              </Table>
            </Sheet>
          </Box>
        

    </>
  );
}
