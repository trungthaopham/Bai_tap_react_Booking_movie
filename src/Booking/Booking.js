import React, { Component } from 'react'
import './Booking.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from './HangGhe';
export default class Booking extends Component {
    renderHangGhe = ()=>{
        return danhSachGheData.map((hangGhe,index)=>{
            return <div key={index} className="text-left ml-4 mt-4 " >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div className="bg text-white" style={{ backgroundImage: 'url(./images/bgmovie.jpg)' }} >
                <div className="transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM</div>
                                <div style={{ fontSize: '19px' }} className="mt-4">Màn Hình</div>
                                <div className="d-flex justify-content-center mt-2">
                                    <div className="screen"></div>
                                </div>
                                    {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                                <div className="text-warning">DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatGhe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
