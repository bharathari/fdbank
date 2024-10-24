import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Input,
  
  Sheet,
  Stack,
  Table,
  Typography,
} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useLocation } from "react-router-dom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Statement() {
  const location = useLocation();
 
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
    SIno:number,
    date:string,
    valueDate:string,
    particular:string,
    tranType:string,
    TransID:string,
    CheqNo:string,
    withdrawls:string,
    deposits:string,
    balanceAmount:string,
    amountType:string,
  ) {
    return {
      SIno,
      date,
      valueDate,
      particular,
      tranType,
      TransID,
      CheqNo,
      withdrawls,
      deposits,
      balanceAmount,
      amountType,
    };
  }
  
  const rows = [
    createData(
      1,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPIOUT/420689640368/q039066346@ybl/Paid via /5814",
      "TFR",
      "S17295755",
      "",
      "90.00",
      "",
      "5399.87",
      "Cr"
    ),
    createData(
      2,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPIOUT/420660777423/q039066346@ybl/Paid via /5814",
      "TFR",
      "S18029509",
      "",
      "80.00",
      "",
      "5319.87",
      "Cr"
    ),
    createData(
      3,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPI IN/420667398435/9539019988@naviaxis/Paid/0000",
      "TFR",
      "S27244022",
      "",
      "",
      "2000.00",
      "7319.87",
      "Cr"
    ),
    createData(
      4,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPI IN/420633701873/9539019988@naviaxis/Paid/0000",
      "TFR",
      "S27373175",
      "",
      "",
      "1600.00",
      "8919.87",
      "Cr"
    ),
    createData(
      5,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPIOUT/420639909375/bajajpay.6879729.0633215/5812",
      "TFR",
      "S31144637",
      "",
      "140.00",
      "",
      "8779.87",
      "Cr"
    ),
    createData(
      6,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPIOUT/420628120854/spaparath@okaxis/Paid vi/0000",
      "TFR",
      "S32551366",
      "",
      "1000.00",
      "",
      "7779.87",
      "Cr"
    ),
    createData(
      7,
      "24-JUL-2024",
      "24-JUL-2024",
      "UPIOUT/420626870706/q230094700@ybl/Paid via /5411",
      "TFR",
      "S33578545",
      "",
      "13.00",
      "",
      "7766.87",
      "Cr"
    ),
    createData(
      8,
      "25-JUL-2024",
      "25-JUL-2024",
      "UPI IN/457349266430/hamraskokkadan-3@okicici/0000",
      "TFR",
      "S39900506",
      "",
      "",
      "2500.00",
      "10266.87",
      "Cr"
    ),
    createData(
      9,
      "25-JUL-2024",
      "25-JUL-2024",
      "UPIOUT/420739513915/cred.club@axisb/payment /7322",
      "TFR",
      "S39907750",
      "",
      "10000.00",
      "",
      "266.87",
      "Cr"
    ),
    createData(
      10,
      "25-JUL-2024",
      "25-JUL-2024",
      "UPIOUT/420706531735/paytmqr281005050101ftd42/5814",
      "TFR",
      "S49603020",
      "",
      "5.00",
      "",
      "261.87",
      "Cr"
    ),
    createData(
      11,
      "25-JUL-2024",
      "25-JUL-2024",
      "UPIOUT/420795575145/paytmqr281005050101ftd42/5814",
      "TFR",
      "S49624704",
      "",
      "5.00",
      "",
      "256.87",
      "Cr"
    ),
    createData(
      12,
      "25-JUL-2024",
      "25-JUL-2024",
      "UPIOUT/420776189578/carechemist.63034267@hdf/5912",
      "TFR",
      "S54750953",
      "",
      "45.00",
      "",
      "211.87",
      "Cr"
    ),
    createData(
      13,
      "26-JUL-2024",
      "26-JUL-2024",
      "UPIOUT/420804570933/paytmqr59zr6f@paytm/Paid/5411",
      "TFR",
      "S75538999",
      "",
      "80.00",
      "",
      "131.87",
      "Cr"
    ),
    createData(
      14,
      "27-JUL-2024",
      "27-JUL-2024",
      "UPIOUT/420985498288/q842662458@ybl/Paid via /5812",
      "TFR",
      "S92803124",
      "",
      "60.00",
      "",
      "71.87",
      "Cr"
    ),
    createData(
      15,
      "30-JUL-2024",
      "30-JUL-2024",
      "UPIOUT/421210010496/fayism444-6@okicici/UPI/0000",
      "TFR",
      "S58361675",
      "",
      "",
      "600.00",
      "671.87",
      "Cr"
    ),
    createData(
      16,
      "31-JUL-2024",
      "31-JUL-2024",
      "UPI IN/457942094031/manukokadan@okicici/UPI/0000",
      "TFR",
      "S79434678",
      "",
      "",
      "2500.00",
      "3171.87",
      "Cr"
    ),
    createData(
      17,
      "31-JUL-2024",
      "31-JUL-2024",
      "UPIOUT/421387856167/9020028300@axisb/Paid vi/0000",
      "TFR",
      "S77957733",
      "",
      "1000.00",
      "",
      "2171.87",
      "Cr"
    ),
    createData(
      18,
      "31-JUL-2024",
      "31-JUL-2024",
      "UPIOUT/421310661792/hamraskokkadan@oksbi/UPI/0000",
      "TFR",
      "S77977951",
      "",
      "250.00",
      "",
      "4671.87",
      "Cr"
    ),
    createData(
      19,
      "31-JUL-2024",
      "31-JUL-2024",
      "UPI IN/457349266430/hamraskokkadan@oksbi/UPI/0000",
      "TFR",
      "S77977770",
      "",
      "",
      "3500.00",
      "4681.87",
      "Cr"
    ),
    createData(
      20,
      "01-AUG-2024",
      "01-AUG-2024",
      "UPIOUT/421403549941/q039066346@ybl/Paid via /5814",
      "TFR",
      "S36661717",
      "",
      "1000.00",
      "",
      "3619.87",
      "Cr"
    ),
    createData(
      21,
      "04-AUG-2024",
      "04-AUG-2024",
      "MB FTO/242175789071/HAMRAS MOH/null/",
      "MB",
      "S54310994",
      "",
      "",
      "1000.00",
      "3609.87",
      "Cr"
    ),
    createData(
      22,
      "04-AUG-2024",
      "04-AUG-2024",
      "UPI IN/457358231621/9539019988@naviaxis/Paid/0000",
      "TFR",
      "S90722211",
      "",
      "",
      "2000.00",
      "5609.87",
      "Cr"
    ),
    createData(
      23,
      "05-AUG-2024",
      "05-AUG-2024",
      "UPI IN/457546570882/9539019988@naviaxis/Paid/0000",
      "TFR",
      "S79008990",
      "",
      "",
      "500.00",
      "3820.87",
      "Cr"
    ),
    createData(
      24,
      "05-AUG-2024",
      "05-AUG-2024",
      "UPIOUT/421801367112/fayism444-7@okhdfcbank/UP/0000",
      "TFR",
      "S82714323",
      "",
      "900.00",
      "",
      "3732.87",
      "Cr"
    ),
    createData(
      25,
      "05-AUG-2024",
      "05-AUG-2024",
      "ACHDR/RAZORPAYSOFTWAREPRIV/FDRL7020507243001344/S",
      "TFR",
      "S85845503",
      "",
      "18499.00",
      "",
      "18817.87",
      "Cr"
    ),
    createData(
      26,
      "06-AUG-2024",
      "06-AUG-2024",
      "MB FTB/24218750791/MUHAMMED R/Hamras/",
      "MB",
      "S54310994",
      "",
      "",
      "1230.00",
      "20051.87",
      "Cr"
    ),
    createData(
      27,
      "06-AUG-2024",
      "06-AUG-2024",
      "UPI IN/421966353732/9539019988@naviaxis/Paid/0000",
      "TFR",
      "S19317122",
      "",
      "",
      "500.00",
      "20641.87",
      "Cr"
    ),
    createData(
      28,
      "07-AUG-2024",
      "07-AUG-2024",
      "UPIOUT/422046661836/q1230094700@ybl/Paid via /5411",
      "TFR",
      "S31718875",
      "",
      "10000.00",
      "",
      "10641.87",
      "Cr"
    ),
    createData(
      29,
      "07-AUG-2024",
      "07-AUG-2024",
      "UPIOUT/422047204694/gousar21487-1@okhdfcbank/Paid/0000",
      "TFR",
      "S43036584",
      "",
      "2000.00",
      "",
      "8641.87",
      "Cr"
    ),
    createData(
      30,
      "08-AUG-2024",
      "08-AUG-2024",
      "UPI IN/422151310707/unaisanajah@okaxis/UPI/0000",
      "TFR",
      "S53125442",
      "",
      "",
      "10000.00",
      "18641.87",
      "Cr"
    ),
    createData(
      31,
      "08-AUG-2024",
      "08-AUG-2024",
      "UPIOUT/422292213551/9636331708-2@axl/Paid vi/0000",
      "TFR",
      "S79000604",
      "",
      "817.00",
      "",
      "9954.87",
      "Cr"
    ),
    createData(
      32,
      "09-AUG-2024",
      "09-AUG-2024",
      "UPIOUT/422258849822/fayism444-4@okaxis/Paid /0000",
      "TFR",
      "S89759717",
      "",
      "3132.00",
      "",
      "6822.87",
      "Cr"
    ),
    createData(
      33,
      "09-AUG-2024",
      "09-AUG-2024",
      "UPIOUT/422322072723/fayism444-4@okaxis/Paid /0000",
      "TFR",
      "S98869966",
      "",
      "100.00",
      "",
      "6722.87",
      "Cr"
    ),
    createData(
      34,
      "10-AUG-2024",
      "10-AUG-2024",
      "UPIOUT/422408118131/drsudhinamb@oksbi/Paid v/0000",
      "TFR",
      "S16849944",
      "",
      "200.00",
      "",
      "6522.87",
      "Cr"
    ),
    createData(
      35,
      "11-AUG-2024",
      "11-AUG-2024",
      "UPI IN/422414547326/molnoura6-1@okicici/UPI/0000",
      "TFR",
      "S28335254",
      "",
      "",
      "22800.00",
      "29322.87",
      "Cr"
    ),
    createData(
      36,
      "11-AUG-2024",
      "11-AUG-2024",
      "UPIOUT/422487185324/achooz848@okicici/Paid v/0000",
      "TFR",
      "S33805410",
      "",
      "100.00",
      "",
      "29222.87",
      "Cr"
    ),
    createData(
      37,
      "12-AUG-2024",
      "12-AUG-2024",
      "MB FTB/242255599541/MUHAMMED R/Hamraz/",
      "MB",
      "S55463013",
      "",
      "",
      "500.00",
      "29722.87",
      "Cr"
    ),
    createData(
      38,
      "12-AUG-2024",
      "12-AUG-2024",
      "UPIOUT/422587805937/rasirasi399@okhdfcbank/UPI/0000",
      "TFR",
      "S55639404",
      "",
      "200.00",
      "",
      "29922.87",
      "Cr"
    ),
    createData(
      39,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPIOUT/422692269633/molnoura6-1@okicici/Paid/0000",
      "TFR",
      "S58363195",
      "",
      "500.00",
      "",
      "29422.87",
      "Cr"
    ),
    createData(
      40,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPI IN/NA216746830/molnoura6-1@okicici/UPI/0000",
      "TFR",
      "S58364768",
      "",
      "",
      "500.00",
      "29922.87",
      "Cr"
    ),
    createData(
      41,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPIOUT/422770091883/molnoura6-1@okicici/Paid/0000",
      "TFR",
      "S56963355",
      "",
      "500.00",
      "",
      "29422.87",
      "Cr"
    ),
    createData(
      42,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPI IN/963410006533/molnoura6-1@okicici/UPI/0000",
      "TFR",
      "S66964136",
      "",
      "",
      "500.00",
      "29922.87",
      "Cr"
    ),
    createData(
      43,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPIOUT/4230512849812/rashikzahar015@oksbi/Paid/0000",
      "TFR",
      "S67790959",
      "",
      "153.17",
      "",
      "29769.70",
      "Cr"
    ),
    createData(
      44,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPI IN/venudhavaneetam17101999/0000",
      "TFR",
      "S78960144",
      "",
      "",
      "100.00",
      "29669.70",
      "Cr"
    ),
    createData(
      45,
      "13-AUG-2024",
      "13-AUG-2024",
      "UPI IN/4228787000/fayism444-6@okicici/UPI/0000",
      "TFR",
      "S88318653",
      "",
      "",
      "350.00",
      "30019.70",
      "Cr"
    ),
    createData(
      46,
      "14-AUG-2024",
      "14-AUG-2024",
      "UPIOUT/422761409023/rizultristanh@okhdfcbank/UPI/0000",
      "TFR",
      "S88321654",
      "",
      "100.00",
      "",
      "29919.70",
      "Cr"
    ),
    createData(
      47,
      "14-AUG-2024",
      "14-AUG-2024",
      "UPIOUT/422678709215/bharatpe09892870858@yesb/4722",
      "TFR",
      "S94264956",
      "",
      "15.00",
      "",
      "29904.70",
      "Cr"
    ),
    createData(
      48,
      "14-AUG-2024",
      "14-AUG-2024",
      "UPIOUT/422799039105/arcoot848@icici/Paid/0000",
      "TFR",
      "S44812667",
      "",
      "10.00",
      "",
      "29894.70",
      "Cr"
    ),
    createData(
      49,
      "15-AUG-2024",
      "15-AUG-2024",
      "UPIOUT/422842901795/molnoura6-1@okicici/Paid/0000",
      "TFR",
      "S52492335",
      "",
      "500.00",
      "",
      "29394.70",
      "Cr"
    ),
    createData(
      50,
      "15-AUG-2024",
      "15-AUG-2024",
      "UPIOUT/422843082329/rashikzahar084@icici/Paid/0000",
      "TFR",
      "S25351173",
      "",
      "300.00",
      "",
      "29094.70",
      "Cr"
    ),
    createData(
      51,
      "16-AUG-2024",
      "16-AUG-2024",
      "UPIOUT/422934528954/castlerestaurant.blr@oka/0000",
      "TFR",
      "S25814009",
      "",
      "4200.00",
      "",
      "24834.70",
      "Cr"
    ),
    createData(
      52,
      "16-AUG-2024",
      "16-AUG-2024",
      "UPI IN/423131922706/sumuk7@oksbi/Paid/0000",
      "TFR",
      "S46102298",
      "",
      "",
      "1000.00",
      "25434.70",
      "Cr"
    ),
    createData(
      53,
      "18-AUG-2024",
      "18-AUG-2024",
      "UPIOUT/423197123912/g463703891@ybl/Paid/0000",
      "TFR",
      "S72748913",
      "",
      "200.00",
      "",
      "25034.70",
      "Cr"
    ),
    createData(
      54,
      "18-AUG-2024",
      "18-AUG-2024",
      "UPIOUT/423197537212/g463703891@ybl/Paid via /5541",
      "TFR",
      "S72758709",
      "",
      "210.00",
      "",
      "24824.70",
      "Cr"
    ),
    createData(
      55,
      "18-AUG-2024",
      "18-AUG-2024",
      "UPI IN/4238144455/999601@upic",
      "TFR",
      "S72800422",
      "",
      "",
      "500.00",
      "25324.70",
      "Cr"
    ),
    createData(
      56,
      "18-AUG-2024",
      "18-AUG-2024",
      "UPIOUT/423123077012/shahidsha123@icici/Paid",
      "TFR",
      "S12954446",
      "",
      "500.00",
      "",
      "24824.70",
      "Cr"
    ),
    createData(
      57,
      "19-AUG-2024",
      "19-AUG-2024",
      "UPI IN/421123330544/rashikzahar115@okhdfc/Paid",
      "TFR",
      "S12988731",
      "",
      "",
      "1000.00",
      "25824.70",
      "Cr"
    ),
    createData(
      58,
      "19-AUG-2024",
      "19-AUG-2024",
      "UPIOUT/423234820057/molnoura@icici/Paid",
      "TFR",
      "S91221997",
      "",
      "600.00",
      "",
      "25224.70",
      "Cr"
    ),
    createData(
      59,
      "19-AUG-2024",
      "19-AUG-2024",
      "UPIOUT/422934953466/molnoura6@upi/Paid",
      "TFR",
      "S55219833",
      "",
      "300.00",
      "",
      "19970.70",
      "Cr"
    ),
    createData(
      60,
      "19-AUG-2024",
      "19-AUG-2024",
      "UPIOUT/422934998632/castlehouse@upi.com",
      "TFR",
      "S85311971",
      "",
      "400.00",
      "",
      "19300.70",
      "Cr"
    ),
    createData(
      61,
      "20-AUG-2024",
      "20-AUG-2024",
      "UPIOUT/423223971232/motorup@upi.io",
      "TFR",
      "S77711751",
      "",
      "2000.00",
      "",
      "20469.70",
      "Cr"
    ),
    createData(
      62,
      "21-AUG-2024",
      "21-AUG-2024",
      "UPIOUT/42321109832/rasirasi@upi.okicici",
      "TFR",
      "S43116957",
      "",
      "175.00",
      "",
      "10294.70",
      "Cr"
    ),
    createData(
      63,
      "22-AUG-2024",
      "22-AUG-2024",
      "UPIOUT/423532001554/q39682896@ybl/Paid via C/7407",
      "TFR",
      "S66863944",
      "",
      "20.00",
      "",
      "10274.70",
      "Cr"
    ),
    createData(
      64,
      "22-AUG-2024",
      "22-AUG-2024",
      "UPIOUT/423560070173/q741915513@ybl/Paid via /7407",
      "TFR",
      "S66964522",
      "",
      "5.00",
      "",
      "10269.70",
      "Cr"
    ),
    createData(
      65,
      "22-AUG-2024",
      "22-AUG-2024",
      "UPIOUT/423528238210/nihalkkmohd@okaxis/Paid /0000",
      "TFR",
      "S67997840",
      "",
      "130.00",
      "",
      "10139.70",
      "Cr"
    ),
    createData(
      66,
      "22-AUG-2024",
      "22-AUG-2024",
      "UPI IN/SHAMIR 838728/muhammed07@ybl/Paid",
      "TFR",
      "S73888728",
      "",
      "",
      "9000.00",
      "10089.70",
      "Cr"
    ),
    createData(
      67,
      "22-AUG-2024",
      "22-AUG-2024",
      "UPIOUT/433428076571/cred.club@axisb/Paid /7322",
      "TFR",
      "S23494098",
      "",
      "2668.00",
      "",
      "7401.70",
      "Cr"
    ),
    createData(
      68,
      "23-AUG-2024",
      "23-AUG-2024",
      "UPI IN/google-payments@axisbank.com",
      "TFR",
      "S33053668",
      "",
      "",
      "6.00",
      "7407.70",
      "Cr"
    ),
    createData(
      69,
      "23-AUG-2024",
      "23-AUG-2024",
      "UPIOUT/7025207413@axisb/Pai/5111",
      "TFR",
      "S42152877",
      "",
      "5.00",
      "",
      "7402.70",
      "Cr"
    ),
    createData(
      70,
      "23-AUG-2024",
      "23-AUG-2024",
      "MB FBB/4234790951/SHIBIL MON Hamraz",
      "MB",
      "S49551519",
      "",
      "",
      "20000.00",
      "27402.70",
      "Cr"
    ),
    createData(
      71,
      "24-AUG-2024",
      "24-AUG-2024",
      "UPI IN/shibilmanayil-4@oksbi/Paid",
      "TFR",
      "S49602888",
      "",
      "",
      "20000.00",
      "7402.70",
      "Cr"
    ),
    createData(
      72,
      "24-AUG-2024",
      "24-AUG-2024",
      "UPIOUT/423429513441/94791515@ybl/Paid",
      "TFR",
      "S53517477",
      "",
      "1000.00",
      "",
      "7302.70",
      "Cr"
    ),
    createData(
      73,
      "24-AUG-2024",
      "24-AUG-2024",
      "UPIOUT/423071080425/hdfcbank",
      "TFR",
      "S90521477",
      "",
      "35.00",
      "",
      "7267.70",
      "Cr"
    ),
    createData(
      74,
      "28-AUG-2024",
      "28-AUG-2024",
      "CHRG/MOB ALERT/JUL24",
      "TFR",
      "S96815704",
      "",
      "9.00",
      "",
      "7258.70",
      "Cr"
    ),
    createData(
      75,
      "28-AUG-2024",
      "28-AUG-2024",
      "UPI IN/fayism444@okaxis",
      "TFR",
      "S1021568",
      "",
      "",
      "2590.00",
      "9848.70",
      "Cr"
    ),
    createData(
      76,
      "28-AUG-2024",
      "28-AUG-2024",
      "UPIOUT/744122048683/molnoura",
      "TFR",
      "S7626063",
      "",
      "112.00",
      "",
      "9736.70",
      "Cr"
    ),
    createData(
      77,
      "28-AUG-2024",
      "28-AUG-2024",
      "UPI IN/midilagi612",
      "TFR",
      "S7633068",
      "",
      "",
      "56.00",
      "9792.70",
      "Cr"
    ),
    createData(
      78,
      "29-AUG-2024",
      "29-AUG-2024",
      "UPIOUT/ 3216702161",
      "TFR",
      "S12895513",
      "",
      "70.00",
      "",
      "9722.70",
      "Cr"
    ),
    createData(
      79,
      "29-AUG-2024",
      "29-AUG-2024",
      "UPIOUT/9259835692/yesb4722",
      "TFR",
      "S19300363",
      "",
      "1000.00",
      "",
      "9712.70",
      "Cr"
    ),
    createData(
      80,
      "29-AUG-2024",
      "29-AUG-2024",
      "UPI IN/423525/UPI/0000",
      "TFR",
      "S25370160",
      "",
      "",
      "20.00",
      "9692.70",
      "Cr"
    ),
    createData(
      81,
      "29-AUG-2024",
      "29-AUG-2024",
      "UPIOUT/423548601986/fayis@upi",
      "TFR",
      "S53614068",
      "",
      "82.00",
      "",
      "9610.70",
      "Cr"
    ),
    createData(
      82,
      "30-AUG-2024",
      "30-AUG-2024",
      "UPI IN/923214fayis444",
      "TFR",
      "S42105843",
      "",
      "",
      "100.00",
      "9510.70",
      "Cr"
    ),
    createData(
      83,
      "31-AUG-2024",
      "31-AUG-2024",
      "UPI IN/MSINFOCERT.COM/Salary",
      "TFR",
      "S45291748",
      "",
      "",
      "31567.00",
      "41077.70",
      "Cr"
    ),
    createData(
      84,
      "31-AUG-2024",
      "31-AUG-2024",
      "UPI IN/fayism444@yesb",
      "TFR",
      "S63684376",
      "",
      "",
      "2000.00",
      "43077.70",
      "Cr"
    ),
    createData(
      85,
      "31-AUG-2024",
      "31-AUG-2024",
      "UPI IN/pkpksajir-44@icici",
      "TFR",
      "S63934693",
      "",
      "",
      "390.00",
      "42687.70",
      "Cr"
    ),
    createData(
      86,
      "31-AUG-2024",
      "31-AUG-2024",
      "UPI IN/rajmana-2@ybl",
      "TFR",
      "S64918850",
      "",
      "",
      "3200.00",
      "39487.70",
      "Cr"
    ),
    createData(
      87,
      "02-SEP-2024",
      "02-SEP-2024",
      "UPI IN/fayism444",
      "TFR",
      "S88811791",
      "",
      "",
      "1000.00",
      "40487.70",
      "Cr"
    ),
    createData(
      88,
      "02-SEP-2024",
      "02-SEP-2024",
      "UPIOUT/creditcards@rbl",
      "TFR",
      "S1770676",
      "",
      "29414.48",
      "",
      "11073.22",
      "Cr"
    ),
    createData(
      89,
      "02-SEP-2024",
      "02-SEP-2024",
      "UPIOUT/063960346/ybl/Paid via /5814",
      "TFR",
      "S2152121",
      "",
      "40.00",
      "",
      "11033.22",
      "Cr"
    ),
    createData(90, "04-SEP-2024", "04-SEP-2024", "UPIOUT/424847540518 /shibilnjr10@okicici/Paid/0000", "TFR", "S65498505", "", "6000.00", "", "5033.22", "Cr"),
    createData(91, "05-SEP-2024", "05-SEP-2024", "MB FTO/242492169940/HAMRAS MOH/null/", "MB", "S74996266", "", "", "1000.00", "6033.22", "Cr"),
    createData(92, "05-SEP-2024", "05-SEP-2024", "UPIOUT/424987751932 /9470724379@ibl/Paid via /5541", "TFR", "S78958088", "", "50.00", "", "5983.22", "Cr"),
    createData(93, "05-SEP-2024", "05-SEP-2024", "ACHDR/RAZORPAYSOFTWAREPRIV /FDRL7020507243001344/S", "TFR", "S82578560", "", "3499.00", "", "2484.22", "Cr"),
    createData(94, "05-SEP-2024", "05-SEP-2024", "UPIOUT/424981104284 /molnoura6-1@okicici/Paid/0000", "TFR", "S83806393", "", "500.00", "", "1984.22", "Cr"),
    createData(95, "06-SEP-2024", "06-SEP-2024", "UPI IN/429436281295 /7736366276@axisb/Paid vi/0000", "TFR", "S87982904", "", "", "1000.00", "2984.22", "Cr"),
    createData(96, "06-SEP-2024", "06-SEP-2024", "UPI IN/429436299369 /7736366276@axisb/Paid vi/0000", "TFR", "S87993319", "", "", "500.00", "3484.22", "Cr"),
    createData(97, "06-SEP-2024", "06-SEP-2024", "UPIOUT/428050635462 /shibilmanayil4-1@okicici/Paid/0000", "TFR", "S3071745", "", "2567.00", "", "917.22", "Cr"),
    createData(98, "06-SEP-2024", "06-SEP-2024", "UPI IN/429063691518 /rasirasi399@okhdfcbank/U/0000", "TFR", "S4711804", "", "", "100.00", "1017.22", "Cr"),
    createData(99, "06-SEP-2024", "06-SEP-2024", "UPI IN/429065918404 /hamraskokkadan-2@okicici/UPI/0000", "TFR", "S6770794", "", "", "16000.00", "17017.22", "Cr"),
    createData(100, "06-SEP-2024", "06-SEP-2024", "UPIOUT/425051635199 /cred.club@axisb/payment /7322", "TFR", "S6833442", "", "15336.00", "", "1681.22", "Cr"),
    createData(101, "06-SEP-2024", "06-SEP-2024", "UPIOUT/425407839907 /ajithc121-2@okhdfcbank/UPI/0000", "TFR", "S9695353", "", "34000.00", "", "35681.22", "Cr"),
    createData(102, "06-SEP-2024", "06-SEP-2024", "TO ECM/608897/Microsoft*Store /Microsoft*Sto", "TFR", "S12113284", "", "111.88", "", "35569.34", "Cr"),
    createData(103, "06-SEP-2024", "06-SEP-2024", "BY ECM TRAN REV /608897 /Microsoft*Store \Mi", "TFR", "S12113284", "", "4.61", "", "35564.73", "Cr"),
    createData(104, "06-SEP-2024", "06-SEP-2024", "BY INTL. MRK REV/608897 /Microsoft*Store \Mic", "TFR", "S12122029", "", "111.88", "", "35676.61", "Cr"),
    createData(105, "06-SEP-2024", "06-SEP-2024", "BY INTL. MRK REV/608897 /Microsoft*Store \Mic", "TFR", "S12122029", "", "4.61", "", "35681.22", "Cr"),
    createData(106, "07-SEP-2024", "07-SEP-2024", "UPIOUT/416233053013 /hamraskokkadan-3@okicici/0000", "TFR", "S12925903", "", "34000.00", "", "1681.22", "Cr"),
    createData(107, "07-SEP-2024", "07-SEP-2024", "UPIOUT/4250146341 /50.00", "TFR", "S40146341", "", "50.00", "", "1631.22", "Cr"),
    createData(108, "08-SEP-2024", "08-SEP-2024", "UPIOUT/425001047771 /rachou848@okicici/Paid v/0000", "TFR", "S45340177", "", "20.00", "", "1611.22", "Cr"),
    createData(109, "08-SEP-2024", "08-SEP-2024", "UPIOUT/42500116426201 /rachou848@okicici/Paid/0000", "TFR", "S47827124", "", "299.00", "", "1312.22", "Cr"),
    createData(110, "08-SEP-2024", "08-SEP-2024", "EFT/242852622236C RECHARGE 6282553277Euronet Servic", "TFR", "S62824829", "", "220.90", "", "1091.32", "Cr"),
    createData(111, "09-SEP-2024", "09-SEP-2024", "UPIOUT/425307343133 /gpayrecharge@okpayaxis/U4814", "TFR", "S74645162", "", "1000.00", "", "91.32", "Cr"),
    createData(112, "09-SEP-2024", "09-SEP-2024", "UPIOUT/4254311645 /rshabeeb434@okaxis/Paid/0000", "TFR", "S82405321", "", "6575.40", "", "6666.72", "Cr"),
    createData(113, "10-SEP-2024", "10-SEP-2024", "FT IMPS/IFI/42850717113/REMITLY INC/RDA remittanc", "TFR", "S8912287", "", "6575.00", "", "91.72", "Cr"),
    createData(114, "10-SEP-2024", "10-SEP-2024", "UPIOUT/425452030459 /9544664032@hdf/Paid via /0000", "TFR", "S81295462", "", "500.00", "", "591.72", "Cr"),
    createData(115, "11-SEP-2024", "11-SEP-2024", "UPIOUT/425552030459 /HAMRAS MOH/null/", "MB", "S12711286", "", "500.00", "", "91.72", "Cr"),
    createData(116, "11-SEP-2024", "11-SEP-2024", "UPIOUT/425124606517 /molnoura6-1@okicici/UPI/0000", "TFR", "S12983400", "", "34500.00", "", "34591.72", "Cr"),
    createData(117, "11-SEP-2024", "11-SEP-2024", "UPIOUT/42519860708 /molnoura6-1@okicici/UPI/0000", "TFR", "S12986708", "", "33.00", "", "34624.72", "Cr"),
    createData(118, "11-SEP-2024", "11-SEP-2024", "UPIOUT/425552030517 /molnoura6-1@okicici/Paid/0000", "TFR", "S13605154", "", "500.00", "", "34124.72", "Cr"),
    createData(119, "04-SEP-2024", "04-SEP-2024", "UPIOUT/424847540518 /shibilnjr10@okicici/Paid/0000", "TFR", "S65498505", "", "6000.00", "", "5033.22", "Cr"),
    createData(120, "05-SEP-2024", "05-SEP-2024", "MB FTO/242492169940/HAMRAS MOH/null/", "MB", "S74996266", "", "", "1000.00", "6033.22", "Cr"),
    createData(121, "05-SEP-2024", "05-SEP-2024", "UPIOUT/424897517932 /94707243789/bill via /5541", "TFR", "S78958088", "", "50.00", "", "5983.22", "Cr"),
    createData(122, "05-SEP-2024", "05-SEP-2024", "ACHDR/RAZORPAYS SOFTWAREPRIV /FDRL7020507243001344/S", "TFR", "S82578560", "", "3499.00", "", "2484.22", "Cr"),
    createData(123, "05-SEP-2024", "05-SEP-2024", "UPIOUT/424891100824 /molnoura6-1@okicici/Paid/0000", "TFR", "S83806393", "", "500.00", "", "1984.22", "Cr"),
    createData(124, "05-SEP-2024", "05-SEP-2024", "UPI IN/42493968612295 /7736366276@axisb/Paid vi/0000", "TFR", "S87982904", "", "", "1000.00", "2984.22", "Cr"),
    createData(125, "05-SEP-2024", "05-SEP-2024", "UPI IN/424939693962 /7736366276@axisb/Paid vi/0000", "TFR", "S87993319", "", "", "500.00", "3484.22", "Cr"),
    createData(126, "05-SEP-2024", "05-SEP-2024", "UPIOUT/425068356462/shibilmanayil4-1@okhdfcbank/UP/0000", "TFR", "S3071745", "", "2567.00", "", "917.22", "Cr"),
    createData(127, "05-SEP-2024", "05-SEP-2024", "UPI IN/425039615138 /rasirasi399@okhdfcbank/U/0000", "TFR", "S4711804", "", "", "100.00", "1017.22", "Cr"),
    createData(128, "05-SEP-2024", "05-SEP-2024", "UPI IN/425069184104 /hamraskokkadan-2@okhdfcbank/UP/0000", "TFR", "S6770794", "", "", "16000.00", "17017.22", "Cr"),
    createData(129, "05-SEP-2024", "05-SEP-2024", "UPIOUT/425053461599 /cred.club@axisb/payment/7322", "TFR", "S6833442", "", "15336.00", "", "1681.22", "Cr"),
    createData(130, "06-SEP-2024", "06-SEP-2024", "UPIOUT/42540783990371 /ajithc121-2@okhdfcbank/0000", "TFR", "S9695533", "", "34000.00", "", "35681.22", "Cr"),
    createData(131, "06-SEP-2024", "06-SEP-2024", "TO ECM/608897/Microsoft*Store", "TFR", "S12113284", "", "111.88", "", "35569.34", "Cr"),
    createData(132, "06-SEP-2024", "06-SEP-2024", "BY INTL. ECM MRK/608897 /Microsoft*Store", "TFR", "S12113284", "", "4.61", "", "35564.73", "Cr"),
    createData(133, "06-SEP-2024", "06-SEP-2024", "BY ECM TRAN REV/608897 /Microsoft*Store", "TFR", "S12122029", "", "", "111.88", "35676.61", "Cr"),
    createData(134, "06-SEP-2024", "06-SEP-2024", "BY INTL. MRK REV/608897 /Microsoft*Store", "TFR", "S12122029", "", "", "4.61", "35681.22", "Cr"),
    createData(135, "06-SEP-2024", "06-SEP-2024", "UPIOUT/41623035013 /hamraskokkadan-3@okicici/0000", "TFR", "S12925903", "", "34000.00", "", "1681.22", "Cr"),
    createData(136, "06-SEP-2024", "06-SEP-2024", "UPIOUT/4245144341 /achooz848@okicici/Paid/0000", "TFR", "S40146341", "", "50.00", "", "1631.22", "Cr"),
    createData(137, "07-SEP-2024", "07-SEP-2024", "UPIOUT/42541589724 /achooz848@okicici/Paid/0000", "TFR", "S45340177", "", "20.00", "", "1611.22", "Cr"),
    createData(138, "07-SEP-2024", "07-SEP-2024", "UPIOUT/4278721274", "TFR", "S47387124", "", "299.00", "", "1312.22", "Cr"),
    createData(139, "08-SEP-2024", "08-SEP-2024", "EFT/242526223256 RECHARGE /6225525777Euronet Service", "TFR", "S62828429", "", "220.90", "", "1091.32", "Cr"),
    createData(140, "08-SEP-2024", "08-SEP-2024", "UPIOUT/42507433143 /gpayrecharge@okpayaxis/U4814", "TFR", "S74651452", "", "1000.00", "", "91.32", "Cr"),
    createData(141, "09-SEP-2024", "09-SEP-2024", "UPIOUT/423341853446 /hasibbe434@okaxis/Paid/0000", "TFR", "S82405321", "", "6575.40", "", "6666.72", "Cr"),
    createData(142, "09-SEP-2024", "09-SEP-2024", "FT IMPS/IFI/42398871113 /REMITLY INC/RDA remittanc", "TFR", "S89122287", "", "6575.00", "", "91.72", "Cr"),
    createData(143, "10-SEP-2024", "10-SEP-2024", "UPI IN/42443962160 /rasi399@okhdfcbank/U/0000", "TFR", "S12954642", "", "", "500.00", "591.72", "Cr"),
    createData(144, "10-SEP-2024", "10-SEP-2024", "MB FTO/242556499501 /HAMRAS MOH/null/", "MB", "S12711286", "", "", "500.00", "91.72", "Cr"),
    createData(145, "11-SEP-2024", "11-SEP-2024", "UPI IN/425551003467 /molnoura6-1@okicici/Paid/0000", "TFR", "S12983400", "", "", "34500.00", "34591.72", "Cr"),
    createData(146, "11-SEP-2024", "11-SEP-2024", "UPI IN/425551006274 /molnoura6-1@okicici/Paid/0000", "TFR", "S12986708", "", "", "33.00", "34624.72", "Cr"),
    createData(147, "11-SEP-2024", "11-SEP-2024", "UPIOUT/425552616492 /molnoura6-1@okicici/Paid/0000", "TFR", "S13605154", "", "500.00", "", "34124.72", "Cr"),
    createData(148, "11-SEP-2024", "11-SEP-2024", "UPIOUT/7425528887626/rasirasi399-2@okicici/Pd/0000", "TFR", "S13606352", "", "500.00", "", "33624.72", "Cr"),
    createData(149, "13-SEP-2024", "13-SEP-2024", "UPIOUT/7487580116449/molnoura6-1@okicici/Pd/0000", "TFR", "S82798577", "", "500.00", "", "33124.72", "Cr"),
    createData(150, "13-SEP-2024", "13-SEP-2024", "UPI IN/4245746855525/goog-payments@axisb/UPI/0000", "TFR", "S84278333", "", "", "6.00", "33130.72", "Cr"),
    createData(151, "16-SEP-2024", "16-SEP-2024", "UPI IN/426301893111/unaisanajah@okaxisb/UPI/0000", "TFR", "S31480872", "", "", "4000.00", "37130.72", "Cr"),
    createData(152, "16-SEP-2024", "16-SEP-2024", "UPIOUT/426052823240/cf.upstoxsecuritiespvtlt/6211", "TFR", "S36588326", "", "2000.00", "", "35130.72", "Cr"),
    createData(153, "16-SEP-2024", "16-SEP-2024", "UPIOUT/426081300493/cred.club@axisb/payment/7322", "TFR", "S40151333", "", "4569.00", "", "30561.72", "Cr"),
    createData(154, "18-SEP-2024", "18-SEP-2024", "UPI IN/4265618805979/rasirasi399-2@okicici/Pd/0000", "TFR", "S82174225", "", "", "4000.00", "26561.72", "Cr"),
    createData(155, "18-SEP-2024", "18-SEP-2024", "UPI IN/4247466667172/up7466666-@okicici/UPI/0000", "TFR", "S86919690", "", "", "150.00", "26411.72", "Cr"),
    createData(156, "19-SEP-2024", "19-SEP-2024", "UPIOUT/4247666071205/paytmqr74660389@ybl/Pd/5541", "TFR", "S1552678", "", "160.00", "", "26251.72", "Cr"),
    createData(157, "19-SEP-2024", "19-SEP-2024", "UPIOUT/4247087819997/paytmqr281005050101ftd42/5814", "TFR", "S4426031", "", "15.00", "", "26236.72", "Cr"),
    createData(158, "19-SEP-2024", "19-SEP-2024", "UPI IN/426448587070/Anwarkcs@okhdfcbank/UPI/0000", "TFR", "S15762209", "", "", "2000.00", "28236.72", "Cr"),
    createData(159, "19-SEP-2024", "19-SEP-2024", "TFR MMSP/IF/424316503456/TRANSFER TO MOBILE FINANCI", "TFR", "S21620334", "", "13000.00", "", "41236.72", "Cr"),
    createData(160, "19-SEP-2024", "19-SEP-2024", "UPIOUT/426453347211/cred.club@axisb/payment/7322", "TFR", "S23278939", "", "791.00", "", "40445.72", "Cr"),
    createData(161, "19-SEP-2024", "19-SEP-2024", "UPIOUT/426421043019/muhammed21487-2@ybl/UPI/0000", "TFR", "S26296983", "", "10000.00", "", "30445.72", "Cr"),
    createData(162, "20-SEP-2024", "20-SEP-2024", "UPI IN/424746603442/rasirasi399-2@okicici/Pd/0000", "TFR", "S27969734", "", "", "1000.00", "29445.72", "Cr"),
    createData(163, "20-SEP-2024", "20-SEP-2024", "UPIOUT/42466967551/molnoura6-1@okicici/Paid/0000", "TFR", "S31242164", "", "200.00", "", "29245.72", "Cr"),
    createData(164, "20-SEP-2024", "20-SEP-2024", "UPIOUT/42461309909/INDvednavaneet@axisb/Pd/0000", "TFR", "S36173909", "", "2000.00", "", "27245.72", "Cr"),
    createData(165, "21-SEP-2024", "21-SEP-2024", "UPI IN/4256133937576/noufffarsana30@oksbi/UPI/0000", "TFR", "S41183796", "", "", "10000.00", "28245.72", "Cr"),
    createData(166, "22-SEP-2024", "22-SEP-2024", "UPIOUT/426509527875/paytmqr14583159@paytm/5192", "TFR", "S57931312", "", "10.00", "", "28235.72", "Cr"),
    createData(167, "22-SEP-2024", "22-SEP-2024", "UPIOUT/426688576600/indvednavaneet@axisb/Paid/0000", "TFR", "S69902314", "", "260.00", "", "27975.72", "Cr"),
    createData(168, "22-SEP-2024", "22-SEP-2024", "UPI IN/426005353950/jasirbinali@oksbi/UPI/0000", "TFR", "S70016336", "", "", "260.00", "28235.72", "Cr"),
    createData(169, "22-SEP-2024", "22-SEP-2024", "UPIOUT/424699505484/jasirbinali@okicici/Paid/0000", "TFR", "S71998828", "", "260.00", "", "27975.72", "Cr"),
    createData(170, "22-SEP-2024", "22-SEP-2024", "UPIOUT/42600851999/achooz848@okicici/Pd/0000", "TFR", "S73557564", "", "30.00", "", "27945.72", "Cr"),
    createData(171, "23-SEP-2024", "23-SEP-2024", "UPI IN/4246794338195/7p0095944@okhdfcbank/U/0000", "TFR", "S84359367", "", "", "1000.00", "28945.72", "Cr"),
    createData(172, "23-SEP-2024", "23-SEP-2024", "UPIOUT/4248711039934d/ahammedali1537@okaxisb/Pd/0000", "TFR", "S92892356", "", "20000.00", "", "8945.72", "Cr"),
    createData(173, "24-SEP-2024", "24-SEP-2024", "UPIOUT/426855884864/marylandstudioo@axisb/0000", "TFR", "S19674394", "", "140.00", "", "8805.72", "Cr"),
    createData(174, "25-SEP-2024", "25-SEP-2024", "UPIOUT/42693667571/bharatpe.902715743653@fbp/5942", "TFR", "S25259218", "", "20.00", "", "8785.72", "Cr"),
    createData(175, "25-SEP-2024", "25-SEP-2024", "CHRG/MOB ALERT/AUG24", "TFR", "S34516291", "", "4.50", "", "8781.22", "Cr"),
    createData(176, "25-SEP-2024", "25-SEP-2024", "UPIOUT/4279039500/9740766321@axisb/form16/0000", "TFR", "S40895866", "", "5000.00", "", "3781.22", "Cr"),
    createData(177, "29-SEP-2024", "29-09-2024", "SBINT:29-06-2024 to 28-09-2024", "SBINT", "S13138283", "", "108.00", "", "3889.22", "Cr"),
    createData(178, "20-OCT-2024", "20-OCT-2024", "UPI IN/429434096481 /anwarkcs3@okhdfcbank/UPI/0000", "TFR", "S7455505", "", "", "2000.00", "2035.22", "Cr"),
  createData(179, "20-OCT-2024", "20-OCT-2024", "UPI IN/429436282425 /shibilshibilrahman05@oki/0000", "TFR", "S8374183", "", "", "5000.00", "7035.22", "Cr"),
  createData(180, "21-OCT-2024", "21-OCT-2024", "CHRG/MOB ALERT/SEP24", "TFR", "S31593870", "", "7.00", "", "7028.22", "Cr"),
  createData(181, "21-OCT-2024", "21-OCT-2024", "UPIOUT/429532279011 /hamraskokkadan-1@okicici/0000", "TFR", "S38438528", "", "7028.00", "", "0.22", "Cr")
      
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
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
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
              fontWeight: "500",
            }}
            level="body-xs"
          >
            <StickyNote2Icon sx={{ mr: 0.5 }} />
            Accounts: Accounts Info
          </Typography>

          {["Operative Accounts", "My Transactions"].map((item) => (
            <Typography key={item} sx={{ color: "#004e96" }} level="body-xs">
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
          <Typography sx={{ color: "whitesmoke" }} level="body-sm">
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
              <Typography fontWeight={600} level="body-sm">Account Number:</Typography>
              <Input
                placeholder={username}
                endDecorator={<ArrowDropDownIcon />}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight={600} level="body-sm">Transaction Date From:</Typography>
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
              <Typography fontWeight={600} level="body-sm">Transaction Date to:</Typography>
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
              level="body-sm"
              sx={{ color: "#004e96" }}
            >
              Last One Month Transactions
            </Typography>
            <Typography
              fontWeight={600}
              level="body-sm"
              sx={{ color: "#004e96" }}
            >
              Last Two Months Transactions
            </Typography>
            <Typography
              fontWeight={600}
              level="body-sm"
              sx={{ color: "#004e96" }}
            >
              Current financial year Transactions
            </Typography>
            <Typography
              fontWeight={600}
              level="body-sm"
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
            level="body-sm"
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
                level="body-sm"
                fontWeight={600}
                sx={{ p: ".5em", alignSelf: "center", color: "blue" }}
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
              size="sm"
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
        <Typography level="body-sm">Transaction List - - {username}</Typography>
        <Typography sx={{ textAlign: "center", minWidth: 80 }} level="body-sm">
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
              <th>Withdrawls</th>
              <th>Deposits</th>
              <th>Balance Amount</th>
              <th>DR/CR</th>
            </tr>
          </thead>
          <tbody>
            {[...rows]
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <tr>
                    <td>{row.SIno}</td>
                    <td>{row.date}</td>
                    <td style={{ color: "#004e96",overflow:'hidden' }}>{row.TransID}</td>
                    <td style={{overflow:'hidden'}}>{row.particular}</td>
                    <td>{row.valueDate}</td>
                    <td>{row.tranType}</td>
                    <td>{row.CheqNo}</td>
                    <td>{row.withdrawls}</td>
                    <td>{row.deposits}</td>
                    <td>{row.balanceAmount}</td>
                    <td>{row.amountType}</td>
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
              p: "0.2em",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          >
            <KeyboardArrowLeftIcon sx={{ color: "#004e96" }} />
            <Typography
              sx={{ color: "#004e96", fontWeight: "700" }} level="body-sm"
            >
              Prev
            </Typography>
          </IconButton>
          <Box
            sx={{
              borderTop: "1px solid #d3d3d3",
              borderBottom: "1px  solid #d3d3d3",
              p: "0.25em",
            }}
          >
            <Typography sx={{ textAlign: "center", minWidth: 80 }} level="body-sm">
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
              p: "0.2em",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <Typography
              sx={{ color: "#004e96", fontWeight: "700" }} level="body-sm"
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
    <a href="../pdf/StatementofHamaraz.pdf" download="Statement of Hamaraz" style={{ textDecoration: 'none' }}>
    <Button
      sx={{
        pl: "5em",
        pr: "5em",
        borderRadius: "3px",
        backgroundColor: "#059600b0",
        fontSize: 12,
      }}
    >
      Download as PDF
    </Button>
    </a>
            <Button
              sx={{
                pl: "5em",
                pr: "5em",
                borderRadius: "3px",
                backgroundColor: "#059600b0",
                fontSize:12
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
