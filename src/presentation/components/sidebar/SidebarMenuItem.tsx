import { NavLink } from "react-router-dom"

interface Props {
  to: string;
  icon: string;
  title: string;
  description: string;
}

export const SidebarMenuItem = ({ to, icon, title, description }: Props) => {
  return (
    
    <NavLink 
      to={to}
      className={({isActive}) => 
        isActive
        ? 'flex bg-gray-600 text-white font-semibold text-sm py-2 px-4 items-center space-x-2'
        : 'flex text-white font-semibold text-sm py-2 px-4 items-center space-x-2'
      }
      >
        <i className={`${icon}`}></i>
        <div className="flex flex-col">
          <span>{ title }</span>
          <span className="text-xs text-gray-400">{ description }</span>
        </div>
    </NavLink>
  )
}
