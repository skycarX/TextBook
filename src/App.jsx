import './App.css';
import Header from './Parts/Header';
import FirstTry from './Parts/FirstTry';
import CreateTask from './Parts/CreateTaskPage';
import { useState, useEffect } from 'react';
import MainPart from './Parts/MainPart';
import FAQ from './Parts/FAQ';

export default function App() {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('getstorage');
    return storedList ? JSON.parse(storedList) : [];
});


  useEffect(() => {
    localStorage.setItem('getstorage', JSON.stringify(list)); 
  }, [list]);

  return (
    <>
      <Header />
      {list.length !== 0 ? <MainPart setList={setList} list={list} /> : <FirstTry setList={setList} list={list} />}
      <FAQ />
    </>
  );
}
