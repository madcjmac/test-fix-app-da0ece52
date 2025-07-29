import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Hello! You clicked the button!');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
    >
      Click me
    </button>
  );
};

const App = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <Button />
    </div>
  );
};

export default App;