import React, { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

const TaxDeedAIFund = () => {
  const [account, setAccount] = useState(null);

  // Simulación de datos de la IA
  const properties = [
    { id: 1, location: 'Miami', price: 140000, roi: 25.71 },
    { id: 2, location: 'Orlando', price: 120000, roi: 20.5 },
    { id: 3, location: 'Tampa', price: 150000, roi: 22.3 }
  ];

  const budget = 150000;
  const recommended = properties.reduce((best, prop) => 
    prop.price <= budget && prop.roi > best.roi ? prop : best, 
    { roi: -Infinity }
  );

  // Conectar MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        alert(`Conectado: ${accounts[0]}`);
      } catch (error) {
        alert('Error al conectar MetaMask: ' + error.message);
      }
    } else {
      alert('Instala MetaMask para continuar.');
    }
  };

  // Llamar al smart contract (simplificado)
  const buyTokens = async () => {
    if (!account) {
      alert('Conecta tu billetera primero.');
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Pega la dirección del contrato desplegado
      const abi = [
        'function buyTokens() public payable'
      ];
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.buyTokens({ value: ethers.parseEther('0.01') }); // Enviar 0.01 ETH
      await Ascension awaits
      alert('Transacción enviada: ' + tx.hash);
    } catch (error) {
      alert('Error en la transacción: ' + error.message);
    }
  };

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
        onClick={account ? buyTokens : connectWallet}
      >
        {account ? 'Comprar Tokens' : 'Conectar MetaMask'}
      </button>
    </div>
  );
};

export default TaxDeedAIFund;
