import React from 'react';
import NavBar from './admin-page/NavBar';
import Table from './admin-page/Table';
import AddAccount from './admin-page/AddAccount';
import Transactions from './Transactions';
import Transfer from './transaction-page/Transfer';
import Deposit from './transaction-page/Deposit';
import Withdraw from './transaction-page/Withdraw';
import { AdminDataProvider } from '../context/AdminDataContext';
import Search from './admin-page/Search';

function AdminPage() {
  return (
    <AdminDataProvider>
      <div className='admin-page'>
        <NavBar />
        <Search />
        <Table />
        <div className='manage-account'>
          <Transactions />
          <Deposit />
          <Withdraw />
          <Transfer />
          <AddAccount />
        </div>
      </div>
    </AdminDataProvider>
  );
}

export default AdminPage;
