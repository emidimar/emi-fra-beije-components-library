import './App.css';
import Roshambo from './components/Roshambo';
import { faHand, faHandBackFist, faHandScissors, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function App() {

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <Roshambo
        rock={<FontAwesomeIcon icon={faHandBackFist} size={'10x'} />}
        paper={<FontAwesomeIcon icon={faHand} size={'10x'} />}
        scissors={<FontAwesomeIcon icon={faHandScissors} size={48} />}
        cpu={<FontAwesomeIcon icon={faQuestion} size={48} />}
      />
    </div>
  )
}

export default App;
