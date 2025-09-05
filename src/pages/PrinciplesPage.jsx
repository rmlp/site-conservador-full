import NavigationButton from '../components/NavigationButton';
import React, { useState, useEffect } from 'react';

// --- DEFINIÇÃO DE TODOS OS ÍCONES ---
const OrderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 12h-8"></path><path d="M17 3l-5 5-5-5"></path><path d="M17 21l-5-5-5 5"></path><path d="M4 12H2"></path><path d="M22 12h-2"></path></svg>;
const PrudenceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>;
const VarietyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
const ImperfectNatureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>;
const LibertyPropertyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>;
const CommunityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;
const LimitedPowerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>;
const PrescriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const BalanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>;
const FreeMarketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>;
const TimelineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

const iconMap = {
  OrderIcon: <OrderIcon />,
  TimelineIcon: <TimelineIcon />,
  PrudenceIcon: <PrudenceIcon />,
  VarietyIcon: <VarietyIcon />,
  ImperfectNatureIcon: <ImperfectNatureIcon />,
  LibertyPropertyIcon: <LibertyPropertyIcon />,
  CommunityIcon: <CommunityIcon />,
  LimitedPowerIcon: <LimitedPowerIcon />,
  PrescriptionIcon: <PrescriptionIcon />,
  BalanceIcon: <BalanceIcon />,
  FreeMarketIcon: <FreeMarketIcon />,
};

// A CORREÇÃO ESTÁ AQUI: AGORA RECEBEMOS "setCurrentPage"
function PrinciplesPage({ onPrincipleSelected, setCurrentPage }) {
  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    fetch('/data/principles.json')
      .then(response => response.json())
      .then(data => setPrinciples(data));
  }, []);

  if (principles.length === 0) {
    return <div>Carregando princípios...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-slate-900">Princípios Fundamentais</h2>
        <p className="text-lg text-slate-600 mt-2">Explore as ideias que formam a base do pensamento conservador.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((principle) => {
          const IconComponent = iconMap[principle.icon];
          return (
            <div key={principle.id} className="bg-white rounded-lg shadow-lg p-6 border border-slate-100 flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 flex-shrink-0">
                  {IconComponent}
                </div>
                <h3 className="text-2xl font-serif text-slate-800 ml-4">{principle.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{principle.description}</p>
              <div className="pt-4 mt-auto">
                <button 
                  onClick={() => onPrincipleSelected(principle)}
                  className="font-bold text-sm text-red-800 hover:text-red-600 transition-colors duration-300 mb-4"
                >
                  Ler mais &rarr;
                </button>
                <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-2">
                  {principle.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <NavigationButton 
        onClick={() => setCurrentPage('timeline')} 
        text="Ver a Linha do Tempo" 
      />
    </div>
  );
}

export default PrinciplesPage;