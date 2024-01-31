import { NavLink, useParams } from 'react-router-dom';
import s from './styles.module.scss';
interface NavLinkItemProps {
  to: string;
  text: string;
}
const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, text }) => {
  const { descId } = useParams();
  const isActive = descId ? false : window.location.pathname === to;

  return (
    <NavLink to={to} className={`${s.header_nav_link} ${isActive ? s.active : ''}`}>
      {text}
    </NavLink>
  );
};
export default NavLinkItem;
