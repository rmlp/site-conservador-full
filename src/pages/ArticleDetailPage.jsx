// Arquivo: src/pages/ArticleDetailPage.jsx

import React from 'react';

const SparkleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z"/></svg>;

// Recebe o "article" selecionado e a função "onBack" para voltar
const ArticleDetailPage = ({ article, onBack }) => {
  // Este objeto terá os textos longos.
  // Cole este bloco completo no lugar do const deepDiveTexts = {};
const deepDiveTexts = { 
    1: `<strong>Pontos Principais:</strong><ul><li class='ml-4 my-1'>&bull; *Conservadorismo como Disposição:* Oakeshott via o conservadorismo não como uma ideologia, mas como uma disposição para preferir o familiar, o testado e o presente.</li><li class='ml-4 my-1'>&bull; *Crítica ao Racionalismo:* Ele criticava a crença de que a razão pode projetar uma sociedade perfeita do zero, ignorando a sabedoria prática e as tradições.</li><li class='ml-4 my-1'>&bull; *Política como Conversa:* Para Oakeshott, a política deveria ser uma conversa contínua para manter a estabilidade, não uma guerra ideológica.</li></ul><strong class='block mt-3'>Para Continuar a Explorar:</strong><ul><li class='ml-4 my-1'>&bull; *Edmund Burke:* Explore suas "Reflexões sobre a Revolução na França".</li><li class='ml-4 my-1'>&bull; *Russell Kirk:* Leia sobre seus "Seis Cânones do Conservadorismo".</li></ul>`, 
    2: `<strong>Pontos Principais:</strong><ul><li class='ml-4 my-1'>&bull; *Ameaça à Liberdade:* Hayek argumenta que o planejamento central da economia, por mais bem-intencionado, leva inevitavelmente à tirania e à perda da liberdade individual.</li><li class='ml-4 my-1'>&bull; *Superioridade do Mercado:* O sistema de preços no livre mercado é um mecanismo de informação muito superior a qualquer comitê de planejamento central.</li><li class='ml-4 my-1'>&bull; *Liberdades Interligadas:* A liberdade econômica e a liberdade política são inseparáveis; a perda de uma leva à perda da outra.</li></ul><strong class='block mt-3'>Para Continuar a Explorar:</strong><ul><li class='ml-4 my-1'>&bull; *Ludwig von Mises:* Investigue seus trabalhos sobre o cálculo econômico sob o socialismo.</li><li class='ml-4 my-1'>&bull; *Milton Friedman:* Assista à série "Free to Choose" para ver a defesa do livre mercado de forma acessível.</li></ul>`, 
    3: `<strong>Pontos Principais:</strong><ul><li class='ml-4 my-1'>&bull; *Crítica ao Estatismo:* Roberto Campos foi o principal crítico do modelo de desenvolvimento nacionalista e estatizante do Brasil, argumentando que ele gerava ineficiência, corrupção e atraso.</li><li class='ml-4 my-1'>&bull; *Defesa do Liberalismo:* Ele defendia apaixonadamente a abertura comercial, a privatização de empresas estatais e a responsabilidade fiscal como os únicos caminhos para a modernização e prosperidade do país.</li><li class='ml-4 my-1'>&bull; *Realismo Cético:* Campos era conhecido por sua ironia e realismo, desconfiando de ideologias e utopias e focando em soluções pragmáticas baseadas na liberdade econômica.</li></ul><strong class='block mt-3'>Para Continuar a Explorar:</strong><ul><li class='ml-4 my-1'>&bull; *Escola Austríaca de Economia:* Estude os autores que influenciaram Campos, como Hayek e Mises.</li><li class='ml-4 my-1'>&bull; *História Econômica do Brasil:* Pesquise os planos de estabilização econômica dos quais Campos participou e suas consequências.</li></ul>`, 
    4: `<strong>Pontos Principais:</strong><ul><li class='ml-4 my-1'>&bull; *Princípio da Menor Autoridade:* A subsidiariedade dita que os problemas devem ser resolvidos pela menor e mais local autoridade capaz de fazê-lo, fortalecendo a autonomia dos grupos sociais.</li><li class='ml-4 my-1'>&bull; *Valor das Comunidades Intermediárias:* Este princípio valoriza o papel da família, da igreja e das associações voluntárias como essenciais para um tecido social saudável, agindo onde o Estado não deveria.</li><li class='ml-4 my-1'>&bull; *Função de Suporte do Estado:* O Estado não deve substituir a sociedade civil, mas ajudá-la (do latim 'subsídium'), intervindo apenas quando os níveis inferiores não conseguem resolver uma questão.</li></ul><strong class='block mt-3'>Para Continuar a Explorar:</strong><ul><li class='ml-4 my-1'>&bull; *Doutrina Social da Igreja:* Investigue as encíclicas papais, como a 'Rerum Novarum' e a 'Quadragesimo Anno', onde o princípio foi formalizado.</li><li class='ml-4 my-1'>&bull; *Federalismo:* Compare o princípio da subsidiariedade com os conceitos de federalismo e governos locais.</li></ul>`, 
    5: `<strong>Pontos Principais:</strong><ul><li class='ml-4 my-1'>&bull; *Falha da Engenharia Social:* A queda do Muro de Berlim simbolizou o fracasso do maior experimento de engenharia social do século XX, o comunismo, que tentou redesenhar a sociedade e a natureza humana à força.</li><li class='ml-4 my-1'>&bull; *Afirmação dos Valores Tradicionais:* O evento demonstrou a resiliência de valores que o comunismo tentou suprimir: identidade nacional, religião, família e o desejo de liberdade.</li><li class='ml-4 my-1'>&bull; **Validação da Prudência:* A catástrofe do comunismo serviu como uma validação histórica do princípio conservador da prudência, que alerta contra a demolição de ordens sociais existentes em nome de utopias abstratas.</li></ul><strong class='block mt-3'>Para Continuar a Explorar:</strong><ul><li class='ml-4 my-1'>&bull; *Aleksandr Solzhenitsyn:* Leia 'O Arquipélago Gulag' para uma compreensão profunda da realidade do totalitarismo soviético.</li><li class='ml-4 my-1'>&bull; *A Guerra Fria:* Estude o confronto ideológico entre o Ocidente liberal e o bloco comunista.</li></ul>`, 
    6: `<strong>Pontos Principais:</strong><ul><li class='ml-4 my-1'>&bull; *Foco nas Consequências, não nas Intenções:* Sowell insiste que as políticas públicas devem ser julgadas por seus resultados empíricos, não por suas nobres intenções, que muitas vezes levam a consequências desastrosas e não previstas.</li><li class='ml-4 my-1'>&bull; *Crítica às Ações Afirmativas:* Com base em dados de vários países, ele argumenta que políticas de cotas raramente ajudam os mais necessitados e acabam por estigmatizar os grupos que pretendem ajudar.</li><li class='ml-4 my-1'>&bull; *Complexidade das Disparidades:* Sowell desafia a narrativa de que as desigualdades estatísticas entre grupos são prova de discriminação, apontando para uma vasta gama de fatores culturais, geográficos e históricos que influenciam os resultados.</li></ul><strong class='block mt-3'>Para Continuar a Explorar:</strong><ul><li class='ml-4 my-1'>&bull; *"Conflito de Visões":* Leia sua obra fundamental para entender a base filosófica das divergências políticas.</li><li class='ml-4 my-1'>&bull; *Economia Básica:* Explore seu livro 'Economia Básica' para uma introdução lúcida aos princípios econômicos.</li></ul>` 
};

  return (
      <div className="py-20">
          <div className="container mx-auto max-w-3xl px-6">
              <button onClick={onBack} className="font-bold text-sm text-red-800 hover:text-red-600 transition-colors duration-300 mb-8">
                  &larr; Voltar à lista de artigos
              </button>
              <p className="text-sm font-semibold text-red-800 uppercase">{article.category}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2 mb-4">{article.title}</h1>
              <p className="text-slate-500 mb-8">{article.readTime}</p>

              {/* O dangerouslySetInnerHTML é usado para renderizar o HTML que está salvo no seu JSON */}
              <div className="prose max-w-none text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />

              {/* Seção de Análise (opcional, pode ser preenchida depois) */}
              <div className="pt-8 mt-8 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                      <SparkleIcon /> Análise e Pontos-Chave
                  </h4>
                  <div className="p-4 bg-blue-50/50 border-l-4 border-blue-300 text-slate-800 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: deepDiveTexts[article.id] || "Análise detalhada não disponível." }} />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ArticleDetailPage;