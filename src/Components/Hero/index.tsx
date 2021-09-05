import Container from '../Container';
import Menu from '../Menu';
import Search from '../Search';
import style from './hero.module.css';

type HeroType = {
  title: string;
  subtitle: string
}

const Hero: React.FC<HeroType> = ({ title = "", subtitle = "" }) => {

  return <div className={style.heroWrapper}>
    <div className={style.heroBack} />
    <Container relative={true}>
      <div className={style.hero}>
        <Menu />
        <div className={style.heroContent}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <Search />
      </div>
    </Container>
  </div>;
};

export default Hero;