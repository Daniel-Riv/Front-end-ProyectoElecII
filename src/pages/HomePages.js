import { useEffect, useState } from 'react';

import { Icon } from '../components/Start/Nav/Icon';

import { Clayout } from '../components/Start/Layout/Clayout';
import { StartA } from '../components/Activity/StartA';

export const HomePages = () => {

  const [matters, setMatter] = useState([]);

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

  useEffect(() => {
    getMatters();
  }, []);

  return (
    <Clayout
      matters={matters}
      getMatters={getMatters}
    >
      <StartA />
      <Icon
        getMatters={getMatters}
      />
    </Clayout>
  )
}
