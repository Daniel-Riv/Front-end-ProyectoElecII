import { useEffect, useState } from 'react';

import { Icon } from '../components/Start/Nav/Icon';

import { Clayout } from '../components/Start/Layout/Clayout';
import { StartA } from '../components/Activity/StartA';

export const HomePages = () => {

  const [matters, setMatter] = useState([]);
  const [activities, setActivities] = useState([]);
  const [id, setId] = useState('');

  const setIdMethod = (id) => {
    setId(id);
  };

  const getMatters = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/matter/get');
      const data = await response.json();
      const { matters } = data;
      setMatter(matters);
    } catch (error) {
      console.log(error);
    }
  };

  const getActivities = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/matter/get/${id}`);
      const data = await response.json();

      const { matter: { activities } } = data;

      setActivities(activities);
    } catch (error) {
      console.log(error);
    }
  }

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
      getMatters={getMatters}
      setId={setIdMethod}
    >
      <StartA
        activities={activities}
      />
      <Icon
        getMatters={getMatters}
      />
    </Clayout>
  )
}
