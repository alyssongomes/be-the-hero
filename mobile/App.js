// o android não possui essa biblioteca, logo temos que instala-la
// e importar no App para ficar disponível para toda aplicação
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes'

export default function App() {
  return (
    <Routes />
  );
}

