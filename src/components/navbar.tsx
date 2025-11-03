import { navItems } from "../data";

interface NavbarProps {
  activePage: number;
  onNavClick: (index: number) => void;
}

export const Navbar = ({ activePage, onNavClick }: NavbarProps) => (
  <aside
    className={`2xl:w-100 xl:w-80 w-50 h-full bg-[#f8f8f8]
      flex flex-col justify-between pt-5 pl-6 pb-10 md:pb-0 rounded-l-2xl`}
  >
    <a href="#" className="2xl:text-2xl xl:text-xl font-light text-red-600 mb10">
      PearProducts
    </a>
    <nav className="flex flex-col grow">
      {navItems.map((item, index) => (
        <div
          key={item.label}
          className={`flex items-center gap-4 my-4 cursor-pointer
            hover:text-pink-400 transition-colors duration-300`}
          onClick={() => onNavClick(index)}
        >
          <i className={`${item.icon} text-2xl text-pink-400`}></i>
          <span className="2xl:text-lg xl:text-base mr-auto">{item.label}</span>
          <i
            className={`${activePage === index ? item.activeIcon : item.inactiveIcon} text-2xl text-yellow-400 mr-4`}
          ></i>
        </div>
      ))}
    </nav>
    <div className="flex justify-between pr-6 pb-2">ToDo: social icons</div>
  </aside>
);
