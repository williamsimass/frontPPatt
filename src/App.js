import React from 'react';
import AppRoutes from './routes'; // Importando o arquivo de rotas
import SidebarComponent from './components/SidebarComponent';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarComponent />
      <div style={{ marginLeft: 250, width: '100%' }}>
        <AppRoutes /> {/* Exibindo as rotas */}
      </div>
    </div>
  );
};

export default App;
