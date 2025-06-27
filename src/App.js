import React from 'react';
import './App.css';

const TaxDeedAIFund = () => {
  const properties = [
    { id: 1, location: 'Miami', price: 140000, roi: 25.71 }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>TaxDeedAI Fund</h1>
      <h2>Propiedades recomendadas</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {properties.map((prop) => (
          <li key={prop.id} style={{ margin: '10px 0' }}>
            {prop.location} - Precio: ${prop.price} - ROI: {prop.roi}%
          </li>
        ))}
      </ul>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={() => alert('Conecta MetaMask para comprar tokens')}
      >
        Comprar Tokens
      </button>
    </div>
  );
};

export default TaxDeedAIFund;
