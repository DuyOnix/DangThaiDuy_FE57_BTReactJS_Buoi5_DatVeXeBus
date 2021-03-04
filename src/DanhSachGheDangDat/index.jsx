import React, { Component } from 'react';

class DanhSachGheDangDat extends Component {
    renderBookSeats = () => {
        const { SoGhe, TenGhe, Gia } = this.props.bookSeats;
        return this.props.bookSeats.map((seat) => {
            return (
                <p key={SoGhe}>Ghế: {TenGhe} ${Gia}
                    <span className="text-danger">
                        [Hủy]
                </span>
                </p>
            )
        })
    }
    render() {
        return (
            <div>
                <h4 className="text-warning">Danh sách ghế đã đặt ({this.props.totalBookedSeats})</h4>
                {this.renderBookSeats()}
            </div>
        );
    }
}

export default DanhSachGheDangDat;