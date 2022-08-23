import React from 'react'

import { useNavigate } from 'react-router-dom';
import FooterActivity from './FooterActivity';

const Item = (props) => {
    const {index, title, dates, id} = props;

    const navigate = useNavigate();

    const NavigateTo = (id) => {
        navigate(`/detail/${id}`);
    }
  return (
    <div key={id} 
    style={{ boxShadow: 'rgba(0,0,0, 0.15) 0px 4px 8px 0px' }}
    data-cy={`activity-item-${index}`} className='rounded-[12px] bg-white w-[235px] h-[234px] pt-[22px] px-[27px] mt-[27px]'>
     <div className='activity-body h-[158px] cursor-pointer'  onClick={() => NavigateTo(id)}> 
          <h3 data-cy='activity-item-title' className='text-[18px] font-bold leading-7'> {title} </h3>
     </div>
     <FooterActivity title={title} dates={dates} id={id} />
    </div>
  )
}

export default Item
