import { createContext, useState } from 'react';

const AdminContext = createContext({});

export const AdminDataProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');
  const [balance, setBalance] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(0);

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleBalanceChange = (value) => {
    setBalance(value);
  };

  const handleUsernameChange = (value) => {
    setUserName(value);
  };

  const handleResetInputs = () => {
    setFullName('');
    setUserName('');
    setPassword('');
    setBalance('');
  };

  const handleIsEditChange = (value) => {
    setIsEditing(value);
  };

  const handleEdit = (id, accounts) => {
    setEditingID(id);
    setIsEditing(true);
    const selectedUser = accounts.find((user) => user.accountNumber === id);
    setFullName(selectedUser.fullName);
    setBalance(selectedUser.money);
    setUserName(selectedUser.userName);
    setPassword(selectedUser.password);
  };
  return (
    <AdminContext.Provider
      value={{
        fullName,
        balance,
        userName,
        password,
        isEditing,
        editingID,
        searchInput,
        onEdit: handleEdit,
        onSearch: setSearchInput,
        resetInputs: handleResetInputs,
        changeEditState: handleIsEditChange,
        changeBalanceInput: handleBalanceChange,
        changePasswordInput: handlePasswordChange,
        changeFullNameInput: handleFullNameChange,
        changeUserNameInput: handleUsernameChange,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
