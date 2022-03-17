import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Roshambo from './components/Roshambo';
import HighScore from './components/HighScore';

function App() {

  let data = [
    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },

    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },

    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },

    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },
    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },
    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win"]
    },
    {
      username: "Angelo",
      wins: 2
    },

    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },

    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },
    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win",]
    },
    {
      username: "Angelo",
      wins: 2
    },
    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win"]
    },
    {
      username: "Angelo",
      wins: 2
    },
  ]

  let data2 = [
    {
      username: "Emilio",
      wins: 5,
      lastResults: ["win", "draw", "win"]
    },
    {
      username: "Francesco",
      wins: 8,
      lastResults: ["win", "draw", "lose", "win", "win"]
    },
    {
      username: "Angelo",
      wins: 2,
      lastResults: ["win", "draw", "lose", "win", "win",]
    }]

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flex: 8 }}>
        <HighScore lastResults={true} data={data} />
        <ScoreBoard resultsNumber={5} dimension='lg' />
      </div>
    </div>
  )
}

export default App;
