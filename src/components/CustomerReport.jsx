import React from 'react';

const CustomerReport = ({ customer }) => {
  return (
    <div>
      <h1>Customer Report</h1>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
    </div>
  );
};

export default CustomerReport;
