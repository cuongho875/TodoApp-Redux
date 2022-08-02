import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VIEW_ACTIVE, VIEW_ALL,VIEW_COMPLETED } from '../../filters/const';
import { actViewActive, actViewAll, actViewCompleted } from '../../filters/slice';
import './filters.scss'
export default function Filters(props) {
  const filters=useSelector(state=>state.filters);
  const dispatch=useDispatch();
  let className1,className2,className3;
    switch(filters){
      case VIEW_ALL:
         className1="view-all active";
         className2="view-active";
         className3="view-completed";
        break;
      case VIEW_ACTIVE:
         className1="view-all";
         className2="view-active active";
         className3="view-completed";
         break;
      default:
         className1="view-all";
         className2="view-active";
         className3="view-completed active";
    }
    const handleViewAll=()=>{
      const action = actViewAll();
      dispatch(action);
    }
    const handleViewActive=()=>{
      const action = actViewActive();
      dispatch(action);
    }
    const handleViewCompleted=()=>{
      const action = actViewCompleted();
      dispatch(action);
    }
  return (
    <div className="filters">
        <div className={className1} onClick={handleViewAll}>View All</div>
        <div className={className2}  onClick={handleViewActive}>Active</div>
        <div className={className3}  onClick={handleViewCompleted}>Completed</div>
    </div>
  )
}
