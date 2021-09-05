import classNames from 'classnames';
import style from './container.module.css';

const Container: React.FC<{ relative?: Boolean }> = ({ children, relative = false }) => {

    const classes = classNames({
        [style.container]: true,
        [style.relative]: relative
    })

    return <div className={classes}>
        {children}
    </div>;
};

export default Container