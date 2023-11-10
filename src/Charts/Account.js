import React from 'react';

const data = [
  {
    Account: 'sales',
    ThisMonth: 1194.59,
    YTD: 11418.29,
  },
  {
    Account: 'advertising',
    ThisMonth: 6879.02,
    YTD: 9271.36,
  },
  {
    Account: 'inventory',
    ThisMonth: 4692.26,
    YTD: 0.00,
  },
  {
    Account: 'entertainment',
    ThisMonth: 0.00,
    YTD: 2529.90,
  },
  {
    Account: 'product',
    ThisMonth: 4652.10,
    YTD: 0.00,
  },
];

const Account = () => {
  return (
    <div className='accounWatchList'>
      <h3>Account Watchlist</h3>
      <div className='table1'>
      <table className='table'>
        <thead className='th'>
          <tr className='tr'>
            <th>Account</th>
            <th>This Month</th>
            <th>YTD</th>
          </tr>
          <hr></hr>
        </thead>
        <tbody className=''>
          {data.map((item, index) => (
           
            <tr key={index}>
              <td>{item.Account}</td>
              <td>{item.ThisMonth}</td>
              <td>{item.YTD}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Account;




