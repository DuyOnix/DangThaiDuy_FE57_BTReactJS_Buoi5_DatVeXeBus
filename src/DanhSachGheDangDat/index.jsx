import React, { Component } from 'react';

class DanhSachGheDangDat extends Component {
    renderBookSeats = () => {
        return this.props.bookSeats.map((seat) => {
            return (
                <p key={seat.SoGhe}>Ghế: {seat.TenGhe} ${seat.Gia}
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
                <h4 className="text-warning">Danh sách ghế đã đặt ({this.props.bookSeats.length})</h4>
                {this.renderBookSeats()}
            </div>
        );
    }
}

export default DanhSachGheDangDat;