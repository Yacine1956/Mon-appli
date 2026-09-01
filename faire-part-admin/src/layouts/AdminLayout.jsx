import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Tableau de bord', end: true },
  { to: '/clients', label: 'Clients' },
  { to: '/commandes', label: 'Commandes' },
  { to: '/invitations', label: 'Invitations' },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();

  

  return (
    <div className="min-h-screen flex bg-stone-50">
      <aside className="w-64 bg-stone-900 text-stone-100 flex flex-col">
        <div className="p-6 text-lg font-semibold border-b border-stone-800">
          Faire-Part Admin
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition ${
                  isActive ? 'bg-stone-700' : 'hover:bg-stone-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-stone-800">
          <p className="text-sm text-stone-400 mb-2">{user?.name}</p>
          <button onClick={logout} className="text-sm text-red-400 hover:text-red-300">
            Se déconnecter
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
    
  );
}