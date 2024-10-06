import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Input,
  Radio,
  Sheet,
  Stack,
  Table,
  Typography,
} from "@mui/joy";
import { useLocation, useNavigate } from "react-router-dom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TableSortAndSelection from "./table";
export default function Statement() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state.username;
  const [statebutton, setState] = React.useState(false);
  return (
    <>
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
              fontWeight: "600",
            }}
          >
            <StickyNote2Icon sx={{ mr: 0.5, alignContent: "center" }} />
            Accounts: Accounts Info
          </Typography>

          {["Operative Accounts", "My Transactions"].map((item) => (
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
            Statements of Accounts
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            border: "2px solid #004e96",
            margin: "0 0.2em 0.2em 0.2em",
          }}
        >
          <Box
            sx={{
              margin: "1em",
              height: "100%",
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight={700}>Account Number:</Typography>
              <Input
                placeholder={username}
                endDecorator={<ArrowDropDownIcon />}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight={700}>Transaction Date From:</Typography>
              <Input
                variant="soft"
                type="date"
                slotProps={{
                  input: {
                    min: "2024-06-07",
                    max: "2024-06-14",
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight={700}>Transaction Date to:</Typography>
              <Input
                type="date"
                variant="soft"
                slotProps={{
                  input: {
                    min: "2024-06-07",
                    max: "2024-06-14",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              margin: "1em",
              height: "100%",
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight={600}
              fontSize={15}
              sx={{ color: "#004e96" }}
            >
              Last One Month Transactions
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={15}
              sx={{ color: "#004e96" }}
            >
              Last Two Months Transactions
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={15}
              sx={{ color: "#004e96" }}
            >
              Current financial year Transactions
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={15}
              sx={{ color: "#004e96" }}
            >
              Previous financial year Transactions
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "1em",
              height: "100%",
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight={600}
              fontSize={15}
              sx={{ color: "#fca61b" }}
            >
              Advanced Search Criteria
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "1em",
              height: "100%",
              width: "95%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "70%",
                backgroundColor: "skyblue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                fontSize={15}
                fontWeight={600}
                sx={{ p: "1em", alignSelf: "center", color: "blue" }}
              >
                You can select a maximum of 1 year period
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "1em",
              height: "100%",
              width: "95%",
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              sx={{
                pl: "5em",
                pr: "5em",
                borderRadius: "3px",
                backgroundColor: "#004e96",
              }}
              onClick={() => {
                setState(false);
              }}
            >
              {" "}
              Back
            </Button>
            <Button
              sx={{
                pl: "5em",
                pr: "5em",
                borderRadius: "3px",
                backgroundColor: "#059600b0",
              }}
              onClick={() => {
                setState(true);
              }}
            >
              Search
            </Button>
          </Box>

          {statebutton && (
            <>
              <Sheet sx={{ pl: "1em", pr: "1em" }}>
                <TableSortAndSelection />
              </Sheet>
              <Box
            sx={{
              margin: "1em",
              height: "100%",
              width: "95%",
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <Button
              sx={{
                pl: "5em",
                pr: "5em",
                borderRadius: "3px",
                backgroundColor: "#059600b0",
              }}
            >
              Download as PDF
            </Button>
            <Button
              sx={{
                pl: "5em",
                pr: "5em",
                borderRadius: "3px",
                backgroundColor: "#059600b0",
              }}
            >
              Download as Excel
            </Button>
          </Box>
            </>

          )}

        </Box>
      </Stack>
    </>
  );
}
