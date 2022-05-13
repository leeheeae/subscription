import React, { useEffect } from 'react';
import TodayItems from '../components/today/TodayItems';
import { useDispatch, useSelector } from 'react-redux';
import { testAction } from '../modules/getDetail';

const TodayItemsContainer = () => {
  const dispatch = useDispatch();

  const { loading, APTDetail } = useSelector(({ loading, getDetail }) => ({
    loading: loading['getDetail/APT_DETAIL'],
    APTDetail: getDetail.today.APTDetail,
  }));

  useEffect(() => {
    // dispatch(testAction());
    dispatch(
      testAction({
        page: 1,
        perPage: 10,
        'cond[SUBSCRPT_AREA_CODE_NM::EQ]': '부산',
      }),
    );
  }, []);

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  useEffect(() => {
    if (!APTDetail) return;
  }, [APTDetail]);

  return <TodayItems APTDetailList={APTDetail} />;
};

export default TodayItemsContainer;
