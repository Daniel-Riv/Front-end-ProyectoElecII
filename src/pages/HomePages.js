import { useEffect, useState } from 'react';

import { Icon } from '../components/Start/Nav/Icon';

import { Clayout } from '../components/Start/Layout/Clayout';
import { StartA } from '../components/Activity/StartA';

export const HomePages = () => {

  const [matters, setMatter] = useState([]);
  const [activities, setActivities] = useState([]);
  const [grade,setgrade] = useState({});
  const [id, setId] = useState('');

  const setIdMethod = (id) => {
    setId(id);
  };

  const getMatters = async () => {
    try {
      const response = await fetch('https://api-proyect-electivaii.herokuapp.com/api/matter/get');
      const data = await response.json();
      const { matters } = data;
      setMatter(matters);
    } catch (error) {
      console.log(error);
    }
  };

  const getActivities = async () => {
    try {
      const response = await fetch(`https://api-proyect-electivaii.herokuapp.com/api/matter/get/${id}`);
      const data = await response.json();

      const { matter: { activities } } = data;
      setActivities(activities);
    } catch (error) {
      console.log(error);
    }
  }
  const getPartial =async() =>{
    try {
      const response = await fetch(`https://api-proyect-electivaii.herokuapp.com/api/matter/partial/${id}`);
      const data = await response.json();
      setgrade(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(id !==''){
      getPartial();
    }
    
  },[id])

  useEffect(() => {
    getMatters();
  }, []);

  useEffect(() => {
    if (id !== '') {
      getActivities();
    }
  }, [id])

  return (
    <Clayout
      matters={matters}
      activities={activities}
      getMatters={getMatters}
      getActivities={getActivities}
      grade={grade}
      getPartial={getPartial}
      setId={setId}
    >
      <StartA
        activities={activities} getActivities={getActivities}  getPartial={getPartial}
      />
      <Icon
        getMatters={getMatters} 
      />
    </Clayout>
  )
}
