import Container from './Container';
import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { useAddNewActivityMutation } from '../services/ActivityApi';
import { useDispatch } from 'react-redux';
import { setActivity} from '../features/activitySlice';

const ActivityHome = () => {

    const [addNewActivity, { isLoading }] = useAddNewActivityMutation()
  
    const dispatch = useDispatch();
  const saveActivity = async () => {
     let title = "New Activity";
     let email = "wow@gmail.com";

    if (!isLoading) {
      try {
        await addNewActivity({ title, email }).unwrap();

       await dispatch(setActivity());
   
        console.log('berhasil');
      } catch (err) {
        console.error('Failed to save the post: ', err)
      }
    }
  }

  return (
    <div className='container h-screen w-[1000px] max-w-[1000px]  mx-auto' style={{ backgroundColor: 'rgb(244,244,244)' }} >
      <div className='todo-header flex flex-row justify-between mt-[36px] mb-[35px]'> 
        <h1 data-cy='activity-title' className='font-bold' style={{ fontSize: '36px' }}> Activity </h1>
        <button onClick={saveActivity}
        className="py-[13.5px] px-[29px] flex flex-row items-center justify-around  min-w-[170px] h-[54px] rounded-full text-white font-bold" data-cy='activity-add-button' style={{ backgroundColor: 'rgb(22, 171, 248)', fontSize: '18px' }}> 
        <span className='text-[18px]'> <AiOutlinePlus /> </span>
       <span data-cy='activity-add-button' className='text-[18px]'>Tambah   </span> </button>
      </div>
      <Container />
    </div>
  )
}

export default ActivityHome
