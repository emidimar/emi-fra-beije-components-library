import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Roshambo from './components/Roshambo';
import HighScore from './components/HighScore';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 8 }}>
        <HighScore lastResults="true" />
      </div>
    </div>
  )
}

export default App;
