import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from './hobbyList';
import { addNewHobby } from '../actions/hobby';

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000)
}
function Home() {
  const hobbyList = useSelector(state => state.hobby.list)
  const dispath = useDispatch()
  console.log('hobbyList', hobbyList)
  const handleAddHobbyClick = () => {
    const newId = randomNumber()
    const newHobby = {
      id: newId,
      title: `hobby ${newId}`
    }
    dispath(addNewHobby(newHobby))
  }
  return (
    <div className="home-page">
      <h1>HOME PAGE - redux hooks</h1>
      <button onClick={handleAddHobbyClick}>Add New Hobby</button>
      <HobbyList hobbyList={hobbyList} />
    </div>
  );
}

export default Home;
