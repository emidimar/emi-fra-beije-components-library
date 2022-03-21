import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Roshambo from './components/Roshambo';
import HighScore from './components/HighScore';
import Modal from './components/Modal';
import { Text, View } from 'react-native';

function App() {

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <Roshambo />
    </div>
  )
}

export default App;
