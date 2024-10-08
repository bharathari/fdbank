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
import IconButton from "@mui/joy/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useLocation, useNavigate } from "react-router-dom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Statement() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state.username;
  const [statebutton, setState] = React.useState(false);
  interface Data {
    SIno: number;
    Date: string;
    TransID: string;
    particular: string;
    valueDate: string;
    tranType: string;
    CheqNo: string;
    AmountType: string;
    Amount: string;
    BalanceAmount: string;
  }
  
  function createData(
    SIno: number,
    Date: string,
    TransID: string,
    particular: string,
    valueDate: string,
    tranType: string,
    CheqNo: string,
    AmountType: string,
    Amount: string,
    BalanceAmount: string
  ): Data {
    return {
      SIno,
      Date,
      TransID,
      particular,
      valueDate,
      tranType,
      CheqNo,
      AmountType,
      Amount,
      BalanceAmount,
    };
  }
  
  const rows = [
    createData(
      1,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      2,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      3,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      4,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      5,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      6,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      7,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      8,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      9,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      10,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      11,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      12,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      13,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      14,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
    createData(
      15,
      "01/09/2024",
      "S83383144",
      "UPIOUT/43450",
      "01/09/2024",
      "TRANSFER",
      "",
      "Dr.",
      "20,000.00",
      "2,669.91"
    ),
  ];
  function labelDisplayedRows({
    from,
    to,
    count,
  }: {
    from: number;
    to: number;
    count: number;
  }) {
    return ` Displaying ${from}–${to} of ${count !== -1 ? count : `more than ${to}`} Results`;
  }             
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };
  const getLabelDisplayedRowsTo = () => {
    if (rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? rows.length
      : Math.min(rows.length, (page + 1) * rowsPerPage);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
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
   

    <>
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
        <Typography>Transaction List - - {username}</Typography>
        <Typography sx={{ textAlign: "center", minWidth: 80 }}>
              {labelDisplayedRows({
                from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
                to: getLabelDisplayedRowsTo(),
                count: rows.length === -1 ? -1 : rows.length,
              })}
            </Typography>
      </Box>

      <Sheet
        variant="outlined"
        sx={{
          width: "98%",
          m: "1%",
          borderRadius: "sm",
          border: "1px solid #d3d3d3",
        }}
      >
        <Table
          size="sm"
          borderAxis="y"
          aria-labelledby="tableTitle"
          hoverRow
          sx={{
            "--TableCell-headBackground": "transparent",
            "& thead th:nth-child(n)": {
              textAlign: "center",
            },
            "& thead th:nth-child(1)": {
              width: "5%",
            },
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "rgb(73 186 218 / 59%)",
                textAlign: "center",
                fontSize: "small",
              }}
            >
              <th>SI No.</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Particulars</th>
              <th>Value Date</th>
              <th>Tran Type</th>
              <th>Cheque Number</th>
              <th>Amount Type</th>
              <th>Amount</th>
              <th>Balance Amount</th>
            </tr>
          </thead>
          <tbody>
            {[...rows]
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <tr>
                    <td>{row.SIno}</td>
                    <td>{row.Date}</td>
                    <td style={{ color: "#004e96" }}>{row.TransID}</td>
                    <td>{row.particular}</td>
                    <td>{row.valueDate}</td>
                    <td>{row.tranType}</td>
                    <td>{row.CheqNo}</td>
                    <td>{row.AmountType}</td>
                    <td>{row.Amount}</td>
                    <td>{row.BalanceAmount}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Sheet>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 2,
          ml: 2,
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="sm"
            color="neutral"
            variant="outlined"
            disabled={page === 0}
            onClick={() => handleChangePage(page - 1)}
            sx={{
              p: "0.4em",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          >
            <KeyboardArrowLeftIcon sx={{ color: "#004e96" }} />
            <Typography
              sx={{ color: "#004e96", fontWeight: "800", fontSize: "small" }}
            >
              Prev
            </Typography>
          </IconButton>
          <Box
            sx={{
              borderTop: "1px solid #d3d3d3",
              borderBottom: "1px  solid #d3d3d3",
              p: "0.35em",
            }}
          >
            <Typography sx={{ textAlign: "center", minWidth: 80 }}>
              Page {page + 1} of {Math.ceil(rows.length/10)}
            </Typography>
          </Box>
          <IconButton
            size="sm"
            color="neutral"
            variant="outlined"
            disabled={
              rows.length !== -1
                ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                : false
            }
            onClick={() => handleChangePage(page + 1)}
            sx={{
              p: "0.4em",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <Typography
              sx={{ color: "#004e96", fontWeight: "800", fontSize: "small" }}
            >
              Next
            </Typography>
            <KeyboardArrowRightIcon sx={{ color: "#004e96" }} />
          </IconButton>
        </Box>
      </Box>
    </>


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
