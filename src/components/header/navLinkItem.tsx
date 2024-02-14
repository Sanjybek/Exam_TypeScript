import { NavLink, useLocation } from 'react-router-dom';
import s from './styles.module.scss';
type NavLinkItemProps = {
  to: string;
  text: string;
};
const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, text }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <NavLink to={to} className={`${s.header_nav_link} ${isActive ? s.active : ''}`}>
      {text}
    </NavLink>
  );
};
export default NavLinkItem;
