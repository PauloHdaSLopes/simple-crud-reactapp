import Header from './components/Header'
import Card from './components/Card'

import './styles/App.css';
import './styles/reset.css'

import data from './data/mock.json'

function App() {
  return (
    <div className="App">
      <Header/>
      <Card data={data}/>
    </div>
  );
}

export default App;
