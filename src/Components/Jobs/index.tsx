import Container from '../Container';
import Job from './job';
import style from './jobs.module.css';

const JobBoard: React.FC<{ count?: number }> = ({ count = 8 }) => {
    return <div className={style.jobWrapper}>
        <Container>
            <div className={style.jobBoard}>
                {Array.from(Array(count)).map(key =>
                    <Job key={key} />
                )}
            </div>
        </Container>
    </div>
}

export default JobBoard;