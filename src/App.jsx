import { useState, useEffect } from 'react'

import Header from './components/Header'
import Card from './components/Card'
import Modal from './components/Modal'

import { request } from './services/api'
import mock from './data/mock.json'

import './styles/App.css';
import './styles/reset.css'

function App() {
  const [data, setData] = useState(mock)

  const requestData = async () => {
    setData(await request())
  }

  useEffect(() => {
    requestData()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Card data={data}/>
    </div>
  );
}

export default App;
