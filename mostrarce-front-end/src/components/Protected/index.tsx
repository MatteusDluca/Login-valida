import { useAuth } from "../../context/AuthProvider/useAuth";
import { Outlet } from 'react-router-dom';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You don't have access</h1>;
  }

  return (
    <>
      {children}
      <h2>Seja bem vindo</h2>
      <Outlet /> {/* Aqui é onde os componentes aninhados serão renderizados */}
    </>
  );
}
