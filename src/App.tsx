import {Box, Sheet} from '@mui/joy';
import * as React from 'react';
import AccReg from './component/AccReg';
import personalBan from './component/personalBan';
import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import SimpleSheet from './component/personalBan';
import AfterLogPag from './component/afterlog';
export default function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<AccReg/>}/>
      <Route path="/login" element={<SimpleSheet/>}/>
      <Route path="/AfterLog" element={<AfterLogPag/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}