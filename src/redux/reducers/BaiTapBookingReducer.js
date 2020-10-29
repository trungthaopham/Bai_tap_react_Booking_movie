import { DAT_GHE, HUY_GHE } from "../types/BookingTypes";

const stateDefault = {
    danhSachGheDangDat:[
    ],

}


const BaiTapBookingReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case DAT_GHE:{
            let danhUpdate = [...state.danhSachGheDangDat];
            let index = danhUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index!==-1){
                danhUpdate.splice(index,1);
            }else{
                danhUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhUpdate;
            return {...state}
        }
        case HUY_GHE:{
            let danhUpdate = [...state.danhSachGheDangDat];
            let index = danhUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index!==-1){
                danhUpdate.splice(index,1);
            }
            state.danhSachGheDangDat = danhUpdate;

            return {...state}

        }

        default: return {...state}
    }
}

export default BaiTapBookingReducer;