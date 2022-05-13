import React from 'react';
import TodayItem from './TodayItem';

const TodayItems = ({ APTDetailList }) => {
  return (
    <div>
      {APTDetailList?.data.map((apt) => (
        <TodayItem key={apt.HOUSE_MANAGE_NO} data={apt} />
      ))}
    </div>
  );
};

export default TodayItems;
