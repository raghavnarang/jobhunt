import style from './search.module.css';
import { ReactComponent as Icon } from '../../Assets/search.svg';

const SearchInput: React.FC = () => {
    return <div className={style.searchInput}>
        <Icon />
        <input type="text" placeholder="Job title or keyword" />
    </div>
}

export default SearchInput;