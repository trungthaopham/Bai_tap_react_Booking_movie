import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unBookingAction } from '../redux/action/BaiTapBookingAction'
class ThongTinDatGhe extends Component {
    renderDanhSachGheDangDat = () => {
        return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
            return <tr key={index}>
                <td>{gheDangDat.soGhe}</td>
                <td>{gheDangDat.gia.toLocaleString()}</td>
                <td><button onClick={() => {
                    this.props.dispatch(unBookingAction(gheDangDat.soGhe))
                }}>Hủy</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>

                <div className="text-left">
                    <div>
                        <button className="gheDuocChon mr-2 mb-2"></button> <span>Ghế đã đặt</span>
                    </div>
                    <div>
                        <button className="gheDangChon mr-2 mb-2"></button> <span>Ghế đang đặt</span>
                    </div>
                    <div>
                        <button className="ghe mr-2 " style={{ marginLeft: '0' }}></button> <span>Ghế chưa đặt</span>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-warning" style={{ fontSize: '20px' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-light">
                            {this.renderDanhSachGheDangDat()}
                        </tbody>
                        <tfoot>
                            <tr className="text-primary">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                },0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )


    }
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapBookingReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps)(ThongTinDatGhe)