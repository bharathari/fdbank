import {Box, Sheet} from '@mui/joy';
import * as React from 'react';
import AccReg from './component/AccReg';
import personalBan from './component/personalBan';
import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import SimpleSheet from './component/personalBan';
import AfterLogPag from './component/afterlog';
import MainLogin from './component/MainLogin';
import LoginOne from './component/LoginOne';
import LoginTwo from './component/LoginTwo';

export default function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<AccReg/>}/>
      <Route path="/login" element={<SimpleSheet/>}/>
      <Route path="/MainLogin" element={<MainLogin/>}/>
      <Route path="/Afterlogin" element={<AfterLogPag/>}>
      <Route path='' element={<LoginOne/>}/>
      <Route path='LoginTwo' element={<LoginTwo/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}