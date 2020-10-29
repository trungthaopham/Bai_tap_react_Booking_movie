import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bookingAction } from '../redux/action/BaiTapBookingAction'

class HangGhe extends Component {
    renderHangGhe =()=>{
        if(this.props.soHangGhe === 0){
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else{
        return <div>
            {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
        }
    }
    renderSoHang =()=>{
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
        return <button className="rowNumber">
            {hang.soGhe}
        </button>
        })
    }


    renderGhe = ()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            // đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon';
            }
            
            
            let cssGheDaDat = '';
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon disabled';
            }
            return <button
            onClick={()=>{
                this.props.datGhe(ghe)
            }}
            key={index} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}>
                {ghe.soGhe}
            </button>
        })
    }

  
    render() {
        console.log(this.props.danhSachGheDangDat)
        return (
            <div>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapBookingReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        datGhe:(ghe)=>{
            dispatch (bookingAction(ghe))
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(HangGhe);
