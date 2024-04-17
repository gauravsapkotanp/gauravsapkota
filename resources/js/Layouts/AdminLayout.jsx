import NavLink from '@/Components/NavLink';
import { RiDashboardFill , RiCloseCircleFill } from 'react-icons/ri';
import { router } from '@inertiajs/react';


export default function AdminLayout({  children  }) {
  function handleLogout(e) {
    e.preventDefault()
    router.post('logout')
  }
    
    return (
        <div className="bg-gray-200  min-h-screen pb-4">

  
        <div className="fixed left-0 top-0 bottom-0 w-60 z-50 bg-white  shadow-lg shadow-[#213a57] overflow-auto hide-bar hidden lg:block"
             >
            <div className="h-6 w-6 bg-gray-200 invisible text-blue-500 rounded-full flex items-center justify-center float-right mt-2 lg:hidden"
                >
                <i className="ri-close-line text-xl"></i>
                <RiCloseCircleFill className="text-2xl" />
            </div>

            <div className="mx-4 mt-4 border-b pb-8 dark:bg-white py-1 px-4 dark:rounded-xl">
                <img className="w-64 mx-auto rounded-full" src="/images/user.jpg" alt=""/>
            </div>
            <div className="mt-4 mx-4">
                <ul>    
                <NavLink href={route("dashboard")}
                  active={route().current("dashboard")}>
                    <li className="text-xl font-medium mt-2  p-2  flex items-center  gap-2   "> 
                            <RiDashboardFill className="text-2xl" />
                            <span className="text-sm font-thin">Dashboard</span>
                        </li>
                </NavLink>
                <NavLink
                    href={route("blogs.index")}
                    active={route().current("blogs.*")}                
                >
                    <li className="text-xl font-medium  p-2  flex items-center gap-2 ">
                           <RiDashboardFill className="text-2xl" />
                            <span className="text-sm font-thin  ">Blogs</span>
                        </li>
                </NavLink>
                <NavLink
                 onClick={handleLogout}
                >
                    <li className="text-xl font-medium  p-2  flex items-center gap-2 ">
                            
                            <span className="text-sm font-thin">Log Out</span>
                        </li>
                </NavLink>
 
                </ul>
            </div>
        </div>
        <div className="lg:pl-60">

            <div>
               {children}
            </div>
        </div>
        </div>
    );
}
