import React from 'react';
import {RxDashboard} from 'react-icons/rx';
import {MdAccountBalanceWallet, MdContacts} from 'react-icons/md';
import {BiDollar} from 'react-icons/bi';
import {TbReportSearch} from 'react-icons/tb';
import {FaUserAlt} from 'react-icons/fa';

function Sidebar(){
  return(
    <div className="sidebardemo">
    <ul className='ul'>
        <li className='greenButtonLi'><span className='span'><RxDashboard/></span>Dashboard</li>
        <li><span className='span'><MdAccountBalanceWallet/></span>Accounts</li>
        <li><span className='span'><BiDollar/></span>Payroll</li>
        <li><span className='span'><TbReportSearch/></span>Reports</li>
        <li><span className='span'><FaUserAlt/></span>Advisor</li>
        <li><span className='span'><MdContacts/></span>Contacts</li>
      </ul>
    </div>
  )
}
export default Sidebar;
