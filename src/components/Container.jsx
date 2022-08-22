import React from 'react'
import { useGetAllActivityQuery } from '../services/ActivityApi'
import moment from 'moment';
import 'moment/locale/id' 
import Item from './Item';
import { useSelector } from 'react-redux';


moment.locale('id')

const Container = () => {



 let dataSl ;

    const { data, error, isLoading, isFetching} = useGetAllActivityQuery(
    );

 if(data) {

   
  let dataI =   [...data.data].sort((a, b) => b.id - a.id);
 dataSl = dataI.slice(0, 5);
 }

  return (
    <div >
       {error ? (
        <>Oh no, there was an error</>
      ) : isLoading || isFetching ?  (
        <>Loading...</>
      ) : data ? (
        <div className='flex gap-1 justify-between flex-wrap' >
     { dataSl.map((item , index) => {
      return (
   <Item index={index}  id={item.id} title={item.title} dates={item.created_at} key={item.id}/>
      )
       })} 
        </div>
      ) : null}
    </div>
  )
}

export default Container
