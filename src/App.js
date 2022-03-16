import logo from './logo.svg';
import './App.css';
import { CustomButton } from './components';
import { Platform, View, Dimensions } from 'react-native';
import PressableSquare from './components/PressableSquare';
import ScoreBoard from './components/ScoreBoard';
import Roshambo from './components/Roshambo';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 2, alignItems: 'center', maxWidth: 800, justifyContent: "center" }}>
        <ScoreBoard resultsNumber={3} dimension="lg" />
      </div>
      <div style={{ display: 'flex', flex: 8 }}>
        <Roshambo />
      </div>
    </div>
  )
}

export default App;
