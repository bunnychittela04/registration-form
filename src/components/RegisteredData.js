import React from 'react';

const RegisteredData = ({ data, onBack }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Registered Data</h2>
      <p>Name: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default RegisteredData;
