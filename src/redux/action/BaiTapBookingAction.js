import { DAT_GHE } from "../types/BookingTypes"
import { HUY_GHE } from "../types/BookingTypes"

export const bookingAction = (ghe)=>{
    return {
        type:DAT_GHE,
        ghe
    }
}
export const unBookingAction = (soGhe)=>{
    return {
        type:HUY_GHE,
        soGhe
    }
}