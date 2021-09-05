import SearchInput from './search-input';
import SearchSelect from './search-location';
import style from './search.module.css';

const Search: React.FC = () => {
    return <div className={style.search}>
        <SearchInput />
        <SearchSelect />
        <button className={style.button}>Search</button>
    </div>
}

export default Search;