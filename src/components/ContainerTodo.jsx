import React from 'react'
import { useGetAllTodoQuery } from '../services/ActivityApi'
import moment from 'moment';
import 'moment/locale/id' 
import Item from './Item';
import ItemTodo from './ItemTodo';
import imgTodo from '../assets/img/todo-img.png';

moment.locale('id')

const ContainerTodo = ({id}) => {


    const { data, error, isLoading } = useGetAllTodoQuery(id
    );

  return (
    <div >
       {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data.length > 0? (
        <div className='flex gap-1 justify-between flex-wrap'>
     { data.map((item , index) => {
      return (
   <ItemTodo index={index} title={item.title} dates={item.created_at} key={item.id}/>
      )
       })} 
        </div>
      ) : 
      <div className='mx-auto' data-cy="todo-empty-state">  
      <img src={imgTodo} className="mx-auto"/>
      </div>
      }
    </div>
  )
}

export default ContainerTodo
