import React from 'react';

// Ícones para o modal
const SparkleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z"/></svg>;

function TimelineModal({ item, onClose }) {
  // Se nenhum item for selecionado, não renderiza nada
  if (!item) return null;

  // Dicionário com os textos de aprofundamento para cada item
  const deepDiveTexts = { 
    1: "Edmund Burke é considerado o pai do conservadorismo moderno. A sua principal contribuição foi a crítica à Revolução Francesa, onde argumentou que a sociedade é um contrato complexo entre as gerações passadas, presentes e futuras, e que as tradições e instituições existentes (como a família, a igreja e o Estado) são repositórios de uma sabedoria testada pelo tempo. Ele defendia reformas graduais e orgânicas em oposição a mudanças revolucionárias baseadas em ideais abstratos, que ele acreditava que levariam à tirania e ao caos.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; Reflexões sobre a Revolução na França (1790)</li><li class='ml-4 my-1'>&bull; Uma Investigação Filosófica sobre a Origem de Nossas Ideias do Sublime e do Belo (1757)</li></ul>", 
    2: "Friedrich Hayek foi um dos maiores defensores do liberalismo clássico no século XX. Ele argumentava que as economias de mercado são sistemas complexos e espontâneos cujo conhecimento está disperso entre milhões de pessoas, tornando impossível o planeamento central eficaz. Para Hayek, as tentativas de controlar a economia levam a uma perda gradual de liberdade, um processo que ele famosamente chamou de 'O Caminho da Servidão'. A sua defesa do estado de direito e da liberdade individual influenciou profundamente o conservadorismo liberal.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; O Caminho da Servidão (1944)</li><li class='ml-4 my-1'>&bull; A Constituição da Liberdade (1960)</li></ul>", 
    3: "Russell Kirk foi a figura central na revitalização do conservadorismo tradicionalista nos Estados Unidos do pós-guerra. Em 'A Mentalidade Conservadora', ele não definiu o conservadorismo como uma ideologia, mas como um corpo de sentimentos e preceitos herdados. Os seus famosos 'Seis Cânones' — incluindo a crença numa ordem moral transcendente, o respeito pela tradição e a prudência nas reformas — forneceram uma base intelectual coesa para o movimento, distinguindo-o do liberalismo clássico e do libertarianismo ao enfatizar a comunidade, a ordem e a religião.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; A Mentalidade Conservadora (1953)</li><li class='ml-4 my-1'>&bull; A Política da Prudência (1993)</li></ul>", 
    4: "Michael Oakeshott ofereceu uma das mais sofisticadas defesas filosóficas do conservadorismo, descrevendo-o não como um credo, mas como uma 'disposição'. Ser conservador, para ele, é preferir o familiar ao desconhecido e o experimentado ao não tentado. A sua principal crítica era ao 'racionalismo na política' — a perigosa crença de que a razão humana pode projetar sociedades perfeitas a partir de teorias abstratas, ignorando a sabedoria prática e tácita contida nas tradições. A política, para Oakeshott, deveria ser uma atividade prudente de manter a ordem social, não um projeto de transformação utópica.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; Racionalismo na Política e Outros Ensaios (1962)</li><li class='ml-4 my-1'>&bull; Sobre a Conduta Humana (1975)</li></ul>", 
    5: "Sir Roger Scruton foi o mais importante filósofo conservador do final do século XX e início do século XXI. Ele argumentava que o conservadorismo não é sobre economia, mas sobre a preservação do 'lar' (oikos) — a cultura, as tradições, a lei e as instituições que formam a identidade de uma nação e permitem a vida em comunidade. Scruton combateu vigorosamente o que via como as forças destrutivas do modernismo e do pensamento de esquerda, defendendo a importância da alta cultura, da beleza estética e dos laços de pertencimento como essenciais para uma vida humana plena.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; O Significado do Conservadorismo (1980)</li><li class='ml-4 my-1'>&bull; Como ser um Conservador (2014)</li></ul>", 
    6: "Thomas Sowell é um dos mais brilhantes e prolíficos intelectuais públicos dos tempos modernos. Embora se identifique mais como libertário, a sua abordagem empírica e o seu ceticismo em relação à engenharia social alinham-no com o pensamento conservador. Em 'Conflito de Visões', ele argumenta que os debates políticos derivam de duas visões opostas da natureza humana: a 'restrita' (que a vê como imperfeita e imutável, a base do conservadorismo) e a 'irrestrita' (que a vê como perfectível, a base do progressismo). A sua obra é uma defesa rigorosa da realidade e das consequências não intencionais contra as utopias bem-intencionadas.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; Conflito de Visões (1987)</li><li class='ml-4 my-1'>&bull; Os Intelectuais e a Sociedade (2009)</li></ul>", 
    7: "Olavo de Carvalho foi uma figura central e altamente controversa no ressurgimento do conservadorismo no Brasil no século XXI. A sua obra concentrou-se na filosofia, na crítica cultural e no que ele chamava de 'guerra cultural', argumentando que a esquerda havia alcançado uma hegemonia nos meios intelectuais e culturais que precisava de ser combatida. Através dos seus livros, cursos e presença online, ele introduziu uma geração de brasileiros a um vocabulário conservador e a uma crítica radical do status quo político e intelectual, exercendo uma influência inegável no debate público do país.<br><br><strong>Principais Obras:</strong><ul><li class='ml-4 my-1'>&bull; O Imbecil Coletivo (1996)</li><li class='ml-4 my-1'>&bull; O Jardim das Aflições (1995)</li></ul>" 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-stone-50 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start p-6 border-b">
          <div>
            <h2 className="text-3xl font-serif text-slate-900">{item.title}</h2>
            {item.lifespan && <p className="text-md text-slate-500 font-semibold">{item.lifespan}</p>}
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 text-3xl font-bold">&times;</button>
        </div>
        <div className="p-6 space-y-4 text-slate-700 overflow-y-auto">
          <p className="text-lg text-amber-700 font-semibold">{item.subtitle}</p>
          <p className="leading-relaxed">{item.description}</p>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-slate-800">Contexto Histórico:</h4>
            <p className="text-slate-600 mt-1">{item.context}</p>
          </div>
          <div className="pt-6 border-t border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center">
              <SparkleIcon /> Aprofundando o Pensamento
            </h4>
            <div className="p-4 bg-blue-50/50 border-l-4 border-blue-300 text-slate-800 text-justify">
              <div dangerouslySetInnerHTML={{ __html: deepDiveTexts[item.id] || "Aprofundamento não disponível." }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineModal;