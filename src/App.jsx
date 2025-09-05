import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipleModal from './components/PrincipleModal';
import TimelineModal from './components/TimelineModal';

// Importando todas as nossas páginas
import ConceptPage from './pages/ConceptPage';
import PrinciplesPage from './pages/PrinciplesPage';
import TimelinePage from './pages/TimelinePage';
import AuthorsPage from './pages/AuthorsPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import QuizPage from './pages/QuizPage';
import SplashPage from './pages/SplashPage';
import PodcastPage from './pages/PodcastPage'; // <-- Importa a nova página

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('conceito'); 
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(null);

  // Funções de controle
  const handleStartExploring = () => setShowSplash(false);
  const handleGoHome = () => setShowSplash(true);
  const handleSelectPrinciple = (principle) => setSelectedPrinciple(principle);
  const handleClosePrincipleModal = () => setSelectedPrinciple(null);
  const handleSelectArticle = (article) => setSelectedArticle(article);
  const handleBackToArticles = () => setSelectedArticle(null);
  const handleSelectTimelineItem = (item) => setSelectedTimelineItem(item);
  const handleCloseTimelineModal = () => setSelectedTimelineItem(null);

  // Lógica de renderização
  const renderPage = () => {
    switch (currentPage) {
      case 'conceito':
        return <ConceptPage setCurrentPage={setCurrentPage} />;
      case 'principios':
        return <PrinciplesPage onPrincipleSelected={handleSelectPrinciple} setCurrentPage={setCurrentPage} />;
      case 'timeline':
        return <TimelinePage onItemSelected={handleSelectTimelineItem} setCurrentPage={setCurrentPage} />;
      case 'quiz':
        return <QuizPage setCurrentPage={setCurrentPage} />;
      case 'artigos':
        return selectedArticle ? (
          <ArticleDetailPage article={selectedArticle} onBack={handleBackToArticles} />
        ) : (
          <ArticlesPage onArticleSelected={handleSelectArticle} setCurrentPage={setCurrentPage} />
        );
      case 'autores':
        return <AuthorsPage onGoHome={handleGoHome} />;
      case 'podcast': // <-- Adiciona o novo caso
        return <PodcastPage setCurrentPage={setCurrentPage} />;
      default:
        return <ConceptPage setCurrentPage={setCurrentPage} />;
    }
  };

  if (showSplash) {
    return <SplashPage onStart={handleStartExploring} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        onGoHome={handleGoHome}
      />
      <div className="flex-grow">
        {renderPage()}
      </div>
      
      <PrincipleModal principle={selectedPrinciple} onClose={handleClosePrincipleModal} />
      <TimelineModal item={selectedTimelineItem} onClose={handleCloseTimelineModal} />
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;