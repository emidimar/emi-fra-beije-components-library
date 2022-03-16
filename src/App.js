import logo from './logo.svg';
import './App.css';
import { CustomButton } from './components';
import { Platform } from 'react-native-web';

function App() {
  return (
 
    
    Platform.OS === 'web' &&
    <div>
    <CustomButton />
    <CustomButton />
    <CustomButton />
    <CustomButton /> 
    </div>
  )
}

export default App;
