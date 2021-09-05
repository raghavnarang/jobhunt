import './App.css';
import Hero from './Components/Hero';
import JobBoard from './Components/Jobs';

function App() {
  return (
    <div className="App">
      <Hero title="Find Your Dream Job" subtitle="Browse through thousands of full-time or part-time jobs near you" />
      <JobBoard />
    </div>
  );
}

export default App;
