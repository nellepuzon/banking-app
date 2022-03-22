import React, { useContext } from "react";
import TableRow from "./TableRow";
import DataContext from "../../context/DataContext";
import AdminContext from "../../context/AdminDataContext";

function Table() {
  const { accounts } = useContext(DataContext);
  const { searchInput } = useContext(AdminContext);
  return (
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts
            .filter((item) => {
              if (
                searchInput === "" ||
                (item.fullName &&
                  item.fullName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()))
              ) {
                return item;
              }
            })
            .map((account) => {
              if (account.type !== "admin") {
                return (
                  <TableRow key={account.accountNumber} account={account} />
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
