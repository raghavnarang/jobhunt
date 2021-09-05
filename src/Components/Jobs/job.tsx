import style from './jobs.module.css';

const Job: React.FC = () => {
    return <article className={style.job}>
        <figure />
        <div className={style.jobContent}>
            <h2>Executive Producer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <footer>
                <button>View Details</button>
            </footer>
        </div>
    </article>
}

export default Job;