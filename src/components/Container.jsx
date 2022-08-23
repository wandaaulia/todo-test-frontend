import React, { useEffect, useState } from 'react'
import { useGetAllActivityQuery } from '../services/ActivityApi'
import moment from 'moment';
import 'moment/locale/id' 
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { setActivity, setLoading, unsetLoading } from '../features/activitySlice';


moment.locale('id')

const Container = () => {


     const dispatch = useDispatch();

     const actValue = useSelector((state) => state.activity.activityValue);
     const loading = useSelector((state) => state.activity.loading);

    useEffect(() => {
      
      const fetchActivity = async() => {
        const response = await fetch('https://floating-mountain-35184.herokuapp.com/activity-groups/')
        const result = await response.json();  
        dispatch(setLoading());

      if(response.ok) {
        const getDataAct =  [...result.data].sort((a, b) => b.id - a.id);
       dispatch(setActivity(getDataAct.slice(0,8)));
       dispatch(unsetLoading());
      }
      }
      fetchActivity();
    }, [dispatch, actValue])

  return (
    <div >
       { loading ? (<div>Loading ... </div> )
       : actValue ? (
        <div className='flex gap-1 justify-between flex-wrap' >
     { actValue.map((item , index) =>  (
   <Item key={index} index={index}  id={item.id} title={item.title} dates={item.created_at}/>
      )
       )} 
        </div>
      ) : null}
    </div>
  )
}

export default Container
