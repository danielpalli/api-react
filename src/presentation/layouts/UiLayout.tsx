import { Outlet } from 'react-router-dom';
import { menuRoutes } from '../router/router';
import { SidebarMenuItem } from '../components';

export const UiLayout = () => {
  return (
    <>
      <div className='h-screen flex'>
        <div className='h-full w-56 bg-gray-800 py-10 shadow '>
          {
            menuRoutes.map((option) => (
              <SidebarMenuItem key={option.to} {...option} />
            ))
          }
        </div>
        <div className='p-6 w-full h-screen justify-center'>
          <Outlet />
        </div>
      </div>
    </>
  );
};
