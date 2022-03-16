import logo from './logo.svg';
import './App.css';
import { CustomButton } from './components';
import { Platform } from 'react-native-web';
import PressableSquare from './components/PressableSquare';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
 
    
    Platform.OS === 'web' &&
    <div>
    <CustomButton />
    <CustomButton />
    <CustomButton />
    <CustomButton /> 

    <PressableSquare onPress={() => console.log("HEEE")}/>

    <ScoreBoard/>
    </div>
  )
}

export default App;
