import { NavLink } from 'react-router-dom'
import { Home, Dumbbell, Play, TrendingUp, User } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/rutinas', label: 'Rutinas', icon: Dumbbell },
  { to: '/workout', label: 'Entrenar', icon: Play },
  { to: '/progreso', label: 'Progreso', icon: TrendingUp },
  { to: '/perfil', label: 'Perfil', icon: User },
]

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 flex items-center h-16 z-50">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] h-full ${isActive ? 'text-red-500' : 'text-neutral-500'}`
          }
        >
          <Icon size={18} />
          <span className="truncate max-w-[56px]">{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
