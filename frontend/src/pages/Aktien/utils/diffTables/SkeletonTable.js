import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';


function SkeletonTable() {
    const [value, setValue] = React.useState('true');

    const handleChange = () => {
        return setValue(!value);
      };

  return (
    <div>
      <div className="Aktiendashboard-datatable-container">
        <table
          className="Aktiendashboard-datatable"
        >
  <tr>
  <th className="Aktiendashboard-datatable-firstTH"></th>
    <th><Skeleton sx={{ bgcolor: 'white' }} height={40}/></th>
    <th><Skeleton sx={{ bgcolor: 'white' }} height={40}/></th>
    <th><Skeleton sx={{ bgcolor: 'white' }} height={40}/></th>
    <th><Skeleton sx={{ bgcolor: 'white' }} height={40}/></th>
  </tr>
  <tr>
  <td colSpan="100%" className="Aktiendashboard-datatable-firstTD">
  <Skeleton sx={{ bgcolor: 'white' }} width={"25%"} height={40}/>
  </td>
   </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"15%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
  </tr>
  <tr className="Aktiendashboard-datatable-yoy">
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"22%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ bgcolor: 'white' }} width={"18%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td colSpan="100%" className="Aktiendashboard-datatable-firstTD">
  <Skeleton sx={{ bgcolor: 'white' }} width={"20%"} height={40}/>
  </td>
   </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ bgcolor: 'white' }} width={"20%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
  </tr>
  <tr className="Aktiendashboard-datatable-yoy">
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ bgcolor: 'white' }} width={"24%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ bgcolor: 'white' }} width={"15%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ bgcolor: 'white' }} width={"55%"} height={40}/></td>
  </tr>
</table>
    </div>
    </div>
  );
}

export default SkeletonTable;
