import React from 'react'
import moment from 'moment';
import { TbTrash } from "react-icons/tb";
import Swal from 'sweetalert2'
import 'moment/locale/id' 

moment.locale('id')

const ItemTodo = (props) => {
    const {index, title, dates} = props;

    const deleteActivity = () => {
Swal.fire({
  html: `Apa ada yakin menghapus activity <span class='title-pop'> "${title}" </span> ini ?` ,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#ef4444',
  cancelButtonColor: '#f3f4f6',
  confirmButtonText: 'Hapus',
    cancelButtonText: '<span style="color:#4b5563"> Batal </span>',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
        icon: 'info',
     html: `activity berhasil dihapus `,
     showConfirmButton: false 
  })
  }
})
    }

  return (
    <div key={index} 
    style={{ boxShadow: 'rgba(0,0,0, 0.15) 0px 4px 8px 0px' }}
    data-cy={`activity-item-${index}`} className='cursor-pointer rounded-[12px] bg-white w-[235px] h-[234px] pt-[22px] px-[27px] mt-[27px]'>
     <div className='activity-body h-[158px]' > 
          <h3 data-cy='activity-item-title' className='text-[18px] font-bold leading-7'> {title} </h3>
     </div>
     <div className='flex flex-row  items-center justify-between card-footer text-[16px] font-normal leading-6'> 
       <span style={{ color: 'rgb(136,136,136)' }} data-cy='activity-item-date'> { moment(dates).format('DD MMMM YYYY')} </span>
        <span style={{ color: 'rgb(136,136,136)', fontSize:'25px'}} onClick={deleteActivity}> <TbTrash /> </span>
     </div>
    </div>
  )
}

export default ItemTodo
