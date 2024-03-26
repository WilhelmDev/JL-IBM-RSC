export type NavItem = {
    href: string;
    label: string;
  };
  
export  type SubMenu = {
    submenu: SubMenu[];
    label: string;
    path?: string;
    subMenuItems: NavItem[];
  };
  
export type MenuWithSubmenu = {
    title: string;
    submenu: NavItem[];
  };