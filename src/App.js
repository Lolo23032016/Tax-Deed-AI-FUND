import React from 'react';
import './App.css';

const TaxDeedAIFund = () => {
  // Simulación de datos de la IA (mismo formato que Colab)
  const properties = [
    { id: 1, location: 'Miami', price: 140000, roi: 25.71 },
    { id: 2, location: 'Orlando', price: 120000, roi: 20.5 },
    { id: 3, location: 'Tampa', price: 150000, roi: 22.3 }
  ];

  // Simulación de recomendación de la IA
  const budget = 150000;
  const recommended = properties.reduce((best, prop) => 
    prop.price <= budget && prop.roi > best.roi ? prop : best, 
    { roi: -Infinity }
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>TaxDeedAI Fund</h1>
      <h2>Propiedades recomendadas (IA)</h2>
      <p>Presupuesto: ${budget}</p>
      <p>Mejor opción: {recommended.location} - Precio: ${recommended.price} - ROI: {recommended.roi}%</p>
      <h3>Todas las propiedades</h3>
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
