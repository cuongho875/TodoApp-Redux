import { VIEW_ACTIVE, VIEW_ALL, VIEW_COMPLETED } from "./const";
import {createSlice} from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters', // tên chuỗi xác định slice
    initialState: VIEW_ALL, // giá trị khởi tạo ban đầu
    reducers: { // tạo các actions
        actViewAll(state) { //action increase
            return state=VIEW_ALL;
        },
        actViewActive(state) { //action decrease
            return state=VIEW_ACTIVE;
        },
        actViewCompleted(state) {
            return state=VIEW_COMPLETED;

        }
    }
})
export const {actViewAll, actViewActive,actViewCompleted} = filtersSlice.actions // export action
export default filtersSlice //ngầm hiểu chúng ta đang export filtersSlice
