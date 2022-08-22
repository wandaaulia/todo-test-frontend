import Container from './Container';
import React, { useState} from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { useAddNewActivityMutation, useEditActivityMutation, useGetAllTodoQuery, useGetOneActivityQuery } from '../services/ActivityApi';
import { useDispatch } from 'react-redux';
import { setActivity } from '../features/activitySlice'
import ContainerTodo from './ContainerTodo';
import { MdArrowBackIosNew } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { BiSortAlt2 } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

const TodoHome = ({id}) => {

    const [editAct, setEditAct] = useState(false);
      const [todoAct, setTodoAct] = useState(false);

    const [addNewActivity] = useAddNewActivityMutation();
    
    const navigate = useNavigate();
    
    const { data , error, isLoading} = useGetOneActivityQuery(id);

    const [editActivity] = useEditActivityMutation();

    const dispatch = useDispatch();
    
  const saveActivity = async () => {
     let title = "New Activity";
     let email = "wow@gmail.com";

    if (!isLoading) {
      try {
        await addNewActivity({ title, email }).unwrap();
        await dispatch(setActivity({title, email}));
        console.log('berhasil');
      } catch (err) {
        console.error('Failed to save the post: ', err)
      }
    }
  }

  const backToActivity = () => {
      navigate(-1);
  }

  const handleEdit = () => {
      setEditAct(!editAct);
  }

  const addTodo = () => {
      setTodoAct(true);
  }

  const closeModal = () => {
     setTodoAct(false);
  }

  return (
    <> 
      {error ? (
          <div className="mx-3">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="ml-8">Loading...</div>
        ) : data ? (
    <div className='container w-[1000px] max-w-[1000px]  mx-auto'>
      <div className='todo-header flex flex-row justify-between mt-[36px] mb-[35px]'> 
        <div className='flex flex-row justify-between items-center'> 
        <button data-cy="todo-back-button" className='text-[30px] pr-6' onClick={backToActivity}> <MdArrowBackIosNew /> </button>
  <h1 data-cy='todo-title' className='font-bold' style={{ fontSize: '36px' }}> {data.data.title} </h1>
          <button onClick={handleEdit} data-cy='todo-title-edit-button' className='pt-2 pl-6 text-gray text-[22px] text-gray-400'> <BiPencil /> </button>
        </div>
        <div className='flex flex-row justify-between'> 
        <button data-cy='todo-sort-button' className='px-[12px] mr-8 text-[30px] rounded-full border border-gray-200'>
         <BiSortAlt2 className='text-gray-400'/>
         </button>

        <button onClick={addTodo}
        className="py-[13.5px] px-[29px] flex flex-row items-center justify-around  min-w-[170px] h-[54px] rounded-full text-white font-bold" data-cy='activity-add-button' style={{ backgroundColor: 'rgb(22, 171, 248)', fontSize: '18px' }}> 
        <span className='text-[18px]'> <AiOutlinePlus /> </span>
       <span data-cy='todo-add-button' className='text-[18px]'>Tambah   </span> </button>
       </div>
      </div>
      <ContainerTodo id={data.data.id}/>
    </div>)
    :  null  }

    {
        todoAct && 
        <> 
        <div className='bg-black absolute
         max-h-screen h-full min-h-full top-0 w-full opacity-50' onClick={closeModal}> 
        </div>
         <div className='modal-content absolute rounded-[15px] bg-white h-[64%] w-[60%] top-[18%] left-[20%]'>
             <div className='py-6 px-8 modal-header flex flex-row w-full justify-between border-b border-b-gray-200'> 
              <h4 data-cy='modal-add-title' className='font-medium text-xl'> Tambah List Item </h4> 
              <div data-cy='modal-add-close-button' className='font-medium text-xl text-gray-400 cursor-pointer' onClick={closeModal}> <AiOutlineClose /> </div>
             </div>
              <div className='modal-footer'>


              </div>
          </div> 
</>
    }



     
    </>
  )
}

export default TodoHome
