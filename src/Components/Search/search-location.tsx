import style from './search.module.css';
import { ReactComponent as Icon } from '../../Assets/location.svg';

const SearchLocation: React.FC = () => {
    return <div className={style.searchSelect}>
        <Icon />
        <select>
            <option>Select Location</option>
            <option>Punjab</option>
            <option>Delhi</option>
            <option>Chandigarh</option>
        </select>
    </div>
}

export default SearchLocation;