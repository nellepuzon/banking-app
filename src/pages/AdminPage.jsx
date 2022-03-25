import React from 'react';
import NavBar from '../components/admin-page/NavBar';
import Table from '../components/admin-page/Table';
import AddAccount from '../components/admin-page/AddAccount';
import Transactions from '../components/transaction-page/Transactions';
import { AdminDataProvider } from '../context/AdminDataContext';
import Search from '../components/admin-page/Search';

function AdminPage() {
  return (
    <AdminDataProvider>
      <div className='admin-page'>
        <NavBar />
        <Search />
        <Table />
        <div className='manage-account'>
          <Transactions />
          <AddAccount />
        </div>
      </div>
    </AdminDataProvider>
  );
}

export default AdminPage;
