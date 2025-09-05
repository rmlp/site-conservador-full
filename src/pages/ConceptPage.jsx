import React from 'react';

// Ícones que a página precisa
const OrderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 12h-8"></path><path d="M17 3l-5 5-5-5"></path><path d="M17 21l-5-5-5 5"></path><path d="M4 12H2"></path><path d="M22 12h-2"></path></svg>;
const PrudenceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>;
const TimelineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;


const ConceptPage = ({ setCurrentPage }) => (
    <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-serif text-slate-800 mb-6 leading-tight">O que é o Conservadorismo?</h1>
                <p className="text-slate-600 mb-4 leading-relaxed">O conservadorismo é uma filosofia social que defende a preservação das instituições, costumes e valores sociais tradicionais. Não é uma ideologia rígida, mas sim um estado da mente, um tipo de caráter, uma maneira de olhar para a ordem social e civil.</p>
                <p className="text-slate-600 mb-8 leading-relaxed">Através deste site, você poderá explorar os princípios fundamentais, conhecer os grandes pensadores e compreender como essa corrente de pensamento influenciou a história e continua relevante nos dias atuais.</p>
                <button onClick={() => setCurrentPage('principios')} className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-md self-start hover:bg-slate-700 transition-colors flex items-center">
                    Conhecer os Princípios <span className="ml-2">&rarr;</span>
                </button>
            </div>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3"><OrderIcon /><h3 className="ml-3 text-xl font-serif text-slate-800">Ordem Moral</h3></div>
                    <p className="text-slate-600">Crença em uma ordem moral duradoura que orienta a sociedade e o indivíduo.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3"><TimelineIcon /><h3 className="ml-3 text-xl font-serif text-slate-800">Tradição e Continuidade</h3></div>
                    <p className="text-slate-600">Valorização dos costumes e convenções que permitem a convivência pacífica.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3"><PrudenceIcon /><h3 className="ml-3 text-xl font-serif text-slate-800">Prudência</h3></div>
                    <p className="text-slate-600">Mudanças graduais e refletidas, respeitando a sabedoria das gerações passadas.</p>
                </div>
            </div>
        </div>
    </div>
);

export default ConceptPage;