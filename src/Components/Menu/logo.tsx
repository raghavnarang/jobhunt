import style from "./menu.module.css";
import { ReactComponent as LogoIcon } from '../../Assets/logo.svg';

const Logo: React.FC = () => <div className={style.logo}>
    <LogoIcon /> 
    <span>JobHunt</span>
</div>

export default Logo;