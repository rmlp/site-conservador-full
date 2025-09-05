import React from 'react';

const SparkleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z"/></svg>;

function PrincipleModal({ principle, onClose }) {
  if (!principle) return null;

  // OBJETO AGORA COMPLETO COM TODOS OS TEXTOS
  const deepDiveTexts = { 
    1: 'A crença em uma ordem moral transcendente é o alicerce do pensamento conservador. Este princípio, defendido por pensadores desde Cícero até Russell Kirk, sustenta que a conduta humana deve ser guiada por verdades morais universais e objetivas, e não apenas por leis ou conveniências. Essa ordem não é uma invenção humana, mas uma realidade descoberta através da tradição, da razão e da fé. Ela fornece a base para a justiça, a virtude e a coesão social, argumentando que uma sociedade que ignora essa bússola moral está fadada ao declínio e à tirania.', 
    2: 'A Tradição, para o conservador, é a "democracia dos mortos", como definiu G.K. Chesterton. Ela representa a sabedoria acumulada de inúmeras gerações, testada pela experiência e refinada pelo tempo. Não se trata de uma oposição cega ao progresso, mas de um ceticismo saudável em relação a inovações radicais que descartam o conhecimento herdado. Edmund Burke argumentava que as instituições, costumes e preconceitos de uma nação formam um ecossistema complexo que não deve ser demolido por capricho ideológico. A tradição é o alicerce sobre o qual reformas prudentes podem ser construídas.', 
    3: "A prudência, no pensamento conservador, é a virtude cardeal da política. Inspirada em Edmund Burke, ela se manifesta como uma profunda cautela em relação a mudanças radicais e projetos de engenharia social. O pensador prudente não rejeita a reforma, mas insiste que ela deve ser gradual, orgânica e baseada na experiência acumulada das gerações, em vez de em teorias abstratas. Trata-se de reconhecer a complexidade da sociedade e a natureza imperfeita do ser humano, preferindo sempre o 'mal conhecido ao bem não experimentado'. A prudência é, portanto, a responsabilidade de preservar a continuidade e a estabilidade social, corrigindo suas falhas sem destruir seus alicerces.", 
    4: 'O conservadorismo celebra a variedade natural da vida humana, opondo-se a esquemas de igualitarismo radical que buscam nivelar a sociedade. Russell Kirk afirmava que uma sociedade justa não é aquela que impõe uma igualdade de resultados, mas a que permite uma diversidade de talentos, fortunas e classes sociais, unidas por laços de lealdade e dever. Essa variedade se manifesta em instituições, costumes locais e hierarquias orgânicas. Tentar erradicar essa diversidade em nome de uma igualdade abstrata é visto como um ato de tirania que empobrece a vida social e destrói a liberdade.', 
    5: 'Central para o pensamento conservador é a visão "restrita" da natureza humana, como a descreveu Thomas Sowell. Este princípio reconhece que o ser humano é inerentemente imperfeito, limitado em conhecimento e propenso a paixões e egoísmo. Por essa razão, os conservadores desconfiam de utopias e projetos que visam criar um "paraíso na Terra", pois acreditam que tais ambições ignoram os limites da natureza humana e inevitavelmente levam à concentração de poder e à tirania. Instituições como o estado de direito, a propriedade e a moralidade tradicional são vistas como barreiras necessárias para conter os piores impulsos da humanidade.', 
    6: 'Seguindo a tradição de John Locke, os conservadores veem a liberdade e a propriedade privada como inseparáveis. A propriedade não é apenas um meio de acumulação de riqueza, mas o principal baluarte da liberdade individual contra a tirania do Estado. Ter o direito de possuir, usar e dispor de bens cria uma esfera de autonomia onde o indivíduo pode prosperar sem a permissão do poder político. Para Edmund Burke, a capacidade de transmitir propriedade através das gerações era essencial para a continuidade e estabilidade da sociedade.', 
    7: 'O princípio da subsidiariedade, valorizado pelo conservadorismo, afirma que as decisões devem ser tomadas no nível mais local e descentralizado possível. Acredita-se que as "pequenas pelotarias" de Edmund Burke — a família, a vizinhança, a igreja, as associações voluntárias — são as verdadeiras escolas da virtude e os principais agentes na resolução de problemas sociais. Um governo central forte que usurpa as funções dessas comunidades locais enfraquece o tecido social, mina a responsabilidade individual e cria uma população de dependentes passivos.', 
    8: 'Dada a visão da natureza humana como imperfeita e potencialmente corruptível, os conservadores defendem veementemente a limitação do poder governamental. Isso é alcançado através de constituições escritas, da separação de poderes (Executivo, Legislativo e Judiciário) e de um sistema de freios e contrapesos. O objetivo é evitar a concentração de poder em qualquer indivíduo ou grupo, pois o poder ilimitado é visto como a maior ameaça à liberdade. Um governo forte em suas funções legítimas (como defesa e justiça) deve ser estritamente limitado em seu escopo.', 
    9: 'A prescrição, um conceito articulado por Edmund Burke, confere legitimidade a instituições e práticas que existem há muito tempo. A ideia é que se um costume ou direito sobreviveu ao teste de muitas gerações, ele provavelmente possui uma sabedoria e uma utilidade que não são imediatamente aparentes para o reformador radical. Direitos prescritivos, como o direito à propriedade herdada, ganham sua força não de uma teoria abstrata, mas do fato de terem sido longamente estabelecidos e aceitos, formando a base da ordem social.', 
    10: 'O conservadorismo não busca a estagnação, mas sim um equilíbrio harmonioso entre permanência e mudança. O estadista conservador, na visão de Burke, deve possuir tanto a capacidade de preservar as instituições valiosas quanto a habilidade de reformar o que se tornou corrupto ou ineficaz. A sociedade é vista como um organismo vivo que precisa mudar para se conservar, mas essa mudança deve ser gradual e respeitosa com a sua estrutura fundamental, como a reforma de um edifício histórico, e não a sua demolição para construir algo totalmente novo.', 
    11: 'Embora nem todos os conservadores sejam liberais clássicos, a maioria defende o livre mercado como o sistema econômico mais compatível com a liberdade individual e a prosperidade. Inspirados por Adam Smith, eles acreditam que a competição, o sistema de preços e as trocas voluntárias coordenam a atividade econômica de forma mais eficiente e moral do que o planejamento central. O mercado livre é visto não apenas como um motor de inovação, mas também como uma esfera de responsabilidade pessoal e cooperação social que limita a necessidade de intervenção estatal coercitiva.' 
  };
  
  const deepDiveText = deepDiveTexts[principle.id] || "Texto de aprofundamento não disponível.";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-stone-50 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-serif text-slate-900">{principle.title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 text-3xl font-bold">&times;</button>
        </div>
        <div className="p-6 space-y-6 text-slate-700 overflow-y-auto">
          <div>
            <p className="font-semibold text-slate-800">Trocando em miúdos:</p>
            <p className="italic">"{principle.analogy}"</p>
          </div>
          <div className="p-4 bg-red-50/50 border-l-4 border-red-300">
            <p className="font-semibold text-red-800">Mito:</p>
            <p className="italic mb-2">{principle.myth}</p>
            <p className="font-semibold text-green-800">Verdade:</p>
            <p>{principle.truth}</p>
          </div>
           <div className="pt-6 border-t border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                <SparkleIcon /> Aprofundando o Conceito
            </h4>
            <div className="p-4 bg-blue-50/50 border-l-4 border-blue-300 text-slate-800">
                <p className="text-justify leading-relaxed">{deepDiveText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleModal;