import React, { useEffect } from 'react';
import TodayItems from '../components/today/TodayItems';
import { useDispatch } from 'react-redux';
import { testAction } from '../modules/getDetail';

const TodayItemsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = dispatch(testAction());
    console.log(data);
  }, []);

  return <TodayItems />;
};

export default TodayItemsContainer;
