import { Cabecalho, Conteudo } from './components';

import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Lucas" />
      <Conteudo>
        <h1>Título</h1>
        <p>Texto Texto Texto</p>
      </Conteudo>
    </>
  );
};

export { App };