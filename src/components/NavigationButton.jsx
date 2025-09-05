import React from 'react';

// Um componente reutilizável para nossos botões de navegação
const NavigationButton = ({ onClick, text }) => {
  return (
    <div className="text-center mt-16">
      <button 
        onClick={onClick} 
        className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors flex items-center mx-auto"
      >
        {text} <span className="ml-2">&rarr;</span>
      </button>
    </div>
  );
};

export default NavigationButton;