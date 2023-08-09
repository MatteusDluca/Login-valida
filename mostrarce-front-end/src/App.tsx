import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout } from './components/Protected';
import { Login } from './components/Login';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<ProtectedLayout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
