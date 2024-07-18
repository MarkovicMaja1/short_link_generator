import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  // Definišite updateReloadState funkciju
  const updateReloadState = () => {
    // Implementacija funkcije (možete prilagoditi prema potrebama)
    console.log("Reload state updated");
  };

  return (
    <>
      <Header />
      <Container updateReloadState={updateReloadState} />
      <Footer />
    </>
  );
};

export default App;
