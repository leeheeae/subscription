import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//icon
import { AiOutlineSchedule, AiOutlineCalendar } from 'react-icons/ai';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaLaptopHouse } from 'react-icons/fa';

const ShortcutBlock = styled.div`
  padding: 1.2rem 1.5rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 1.2rem;
  box-shadow: var(--box-shodow);

  > a {
    width: 48%;
    margin: 1%;
  }
`;

const ShortcutItem = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem 1.7rem;
  background-color: #fff;
  box-shadow: var(--box-shodow);
  color: var(--color-04);
  transition: 0.2s;

  .icon {
    font-size: 36px;
  }
  h3 {
    margin: 2px 0 6px;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-01);
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    color: var(--color-05);
  }

  &:hover {
    background-color: var(--color-05);
    .icon svg {
      fill: #fff;
    }
    h3 {
      color: #fff;
    }
    p {
      color: #ddd;
    }
  }
`;

const ShortcutData = [
  {
    title: '오늘의 청약일정',
    link: '/today',
    icon: <AiOutlineSchedule />,
    comment: '오늘 진행되는 청약 일정을 확인해보세요.',
  },
  {
    title: '오늘의 당첨자 발표',
    link: '/przwner',
    icon: <GiPodiumWinner />,
    comment: '오늘 진행되는 청약 일정을 확인해보세요.',
  },
  {
    title: '아파트 분양정보/경쟁률',
    link: '/LttotPblancList',
    icon: <FaLaptopHouse />,
    comment: '오늘 진행되는 청약 일정을 확인해보세요.',
  },
  {
    title: '청약 캘린더',
    link: '/calendar',
    icon: <AiOutlineCalendar />,
    comment: '오늘 진행되는 청약 일정을 확인해보세요.',
  },
];

const Shortcut = () => {
  return (
    <ShortcutBlock>
      {ShortcutData.map((item, index) => (
        <Link to={item.link} key={index}>
          <ShortcutItem>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.comment}</p>
          </ShortcutItem>
        </Link>
      ))}
    </ShortcutBlock>
  );
};

export default Shortcut;
