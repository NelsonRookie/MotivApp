import { NavLink, Outlet } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
// Icons
import { MdOutlineDashboard } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { GiInspiration } from "react-icons/gi";
import { LuBadgeHelp } from "react-icons/lu";

export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setTimeout(() => setShowNavItems(true), 500);
    } else {
      setShowNavItems(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className={`flex h-screen w-full `}>
      <div
        id="side-bar"
        className={`fixed bg-[#0a0a23] h-screen text-white md:h-screen flex flex-col gap-4 md:gap-10 px-2 md:px-4 py-4 md:py-8 transition-all duration-700 ${
          isSidebarOpen
            ? "w-64 md:w-[18rem] border-r border-gray-300"
            : "w-5 md:w-[4rem]"
        } shadow-lg ${isHovered ? "opacity-100" : "opacity-50"}`}
        onMouseEnter={() => setIsHovered(true)}
      >
        <button
          onClick={toggleSidebar}
          className="absolute right-[-.5rem] top-2 md:top-4 flex items-center justify-center text-white p-2 transition duration-300"
        >
          <IoIosArrowBack
            className={`text-xl text-white font-bold transform transition-transform duration-300 ${
              isSidebarOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {showNavItems && (
          <nav className="flex-1 mt-4 md:mt-12 opacity-1 transition-opacity duration-500 delay-100 mx-auto">
            <ul className="flex flex-col gap-4 md:gap-10">
              {/* Navbar Links */}
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white flex items-center justify-center rounded-md px-2 md:px-4 py-2 transition duration-500"
                      : ` font-semibold flex hover:bg-[#e3e3e3] rounded-md px-2 md:px-4 py-2 transition duration-500`
                  }
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineDashboard size={20} md:size={25} />
                    <p className="text-sm md:text-xl">Dashboard</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/goals"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 flex items-center justify-center text-white rounded-md px-2 md:px-4 py-2 transition duration-700"
                      : ` font-semibold flex hover:bg-[#e3e3e3] rounded-md px-2 md:px-4 py-2 transition duration-500`
                  }
                >
                  <div className="flex gap-2 items-center">
                    <GoChecklist size={20} md:size={25} />
                    <p className="text-sm md:text-xl">Goals</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inspirations"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white rounded-md px-2 md:px-4 py-2 flex items-center justify-center transition duration-700"
                      : ` font-semibold flex hover:bg-[#e3e3e3] rounded-md px-2 md:px-4 py-2 transition duration-500`
                  }
                >
                  <div className="flex gap-2 items-center">
                    <GiInspiration size={20} md:size={25} />
                    <p className="text-sm md:text-xl">Inspirations</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/quotes"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 flex items-center justify-center text-white rounded-md px-2 md:px-4 py-2 transition duration-700"
                      : ` font-semibold flex hover:bg-[#e3e3e3] rounded-md px-2 md:px-4 py-2 transition duration-500`
                  }
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineSpeakerNotes size={20} md:size={25} />
                    <p className="text-sm md:text-xl">Quotes</p>
                  </div>
                </NavLink>
              </li>
            </ul>

            {isSidebarOpen && (
              <section className="mt-20 p-4 ">
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white flex items-center justify-center rounded-md px-2 py-2 "
                      : "font-semibold flex hover:bg-[#e3e3e3] rounded-md px-2 py-2 transition duration-300"
                  }
                >
                  <div className="flex gap-2 items-center">
                    <LuBadgeHelp size={20} />
                    <p className="text-sm md:text-xl">Help</p>
                  </div>
                </NavLink>
              </section>
            )}
          </nav>
        )}

        {/* Ownership Section */}
        {isSidebarOpen && (
          <div className="mt-auto p-4 bg-gray-800 rounded-lg text-white transition duration-100 delay-1000">
            <p className="text-sm mt-2">
              developed by: <strong>Nelson Nolia</strong>
            </p>
            <p className="text-sm mt-1">© 2024 All Rights Reserved</p>
          </div>
        )}
      </div>

      <div
        id="children-routes"
        className={`flex-1 w-full py-4 md:py-8 px-4 md:px-16 transition-all duration-500`}
      >
        <Outlet />
      </div>
    </div>
  );
}
