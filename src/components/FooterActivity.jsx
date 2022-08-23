import React from 'react'
import moment from 'moment';
import { TbTrash } from "react-icons/tb";
import Swal from 'sweetalert2'
import 'moment/locale/id' 
import { useDeleteActivityMutation } from '../services/ActivityApi';
import { useDispatch } from 'react-redux';
import { setLoading, unsetLoading } from '../features/activitySlice';
moment.locale('id')

const FooterActivity = ({title, dates, id}) => {

    const [deleteActivity] = useDeleteActivityMutation();

    const dispatch = useDispatch();

const deleteActivityButton = () => {
Swal.fire({
  html: `Apa ada yakin menghapus activity <span class='title-pop'> "${title}" </span> ini ?` ,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#ef4444',
  cancelButtonColor: '#f3f4f6',
  confirmButtonText: 'Hapus',
    cancelButtonText: '<span style="color:#4b5563"> Batal </span>',
  reverseButtons: true
}).then( async (result) => {
  if (result.isConfirmed) {
    await dispatch(setLoading());
    await deleteActivity(id);
    await dispatch(unsetLoading());
    await Swal.fire({
        icon: 'info',
     html: `activity berhasil dihapus `,
     showConfirmButton: false 
  })
  }
})
    }


  return (
    <div className='flex flex-row  items-center justify-between card-footer text-[16px] font-normal leading-6'> 
       <span style={{ color: 'rgb(136,136,136)' }} data-cy='activity-item-date'> { moment(dates).format('DD MMMM YYYY')} </span>
        <button style={{ color: 'rgb(136,136,136)', fontSize:'25px'}} onClick={deleteActivityButton}> <TbTrash /> </button>
     </div>
  )
}

export default FooterActivity
