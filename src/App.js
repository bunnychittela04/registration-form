import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import RegisteredData from './components/RegisteredData';
import './styles.css';

const App = () => {
  const [registeredData, setRegisteredData] = useState(null);
  const [currentPage, setCurrentPage] = useState('form');

  const handleFormData = (data) => {
    setRegisteredData(data);
    setCurrentPage('data');
  };

  const handleBack = () => {
    setCurrentPage('form');
  };

  return (
    <div>
      <h1>Welcome to Registration Form</h1>
      {currentPage === 'form' && <RegistrationForm onFormData={handleFormData} />}
      {currentPage === 'data' && <RegisteredData data={registeredData} onBack={handleBack} />}
    </div>
  );
};

export default App;
