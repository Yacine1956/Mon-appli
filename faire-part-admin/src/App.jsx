import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Commandes from './pages/Commandes';
import CommandeDetail from './pages/CommandeDetail';
import InvitationDetail from './pages/InvitationDetail';
import InvitationPublique from './pages/InvitationPublique';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p className="p-8">Chargement...</p>;
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter >
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/invitation/:slug" element={<InvitationPublique />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="commandes" element={<Commandes />} />
            <Route path="commandes/:id" element={<CommandeDetail />} />
            <Route path="invitations/:id" element={<InvitationDetail />} />
          </Route>
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}