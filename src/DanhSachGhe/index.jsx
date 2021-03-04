import React, { Component } from 'react';
import GheItem from '../GheItem';

class DanhSachGhe extends Component {
    renderSeatList = () => {
        return this.props.data.map((seat) => {
            return (
                <div key={seat.SoGhe} className="col-3">
                    <GheItem
                        addToBookSeats={this.props.addToBookSeats}
                        removeFromBookSeats={this.props.removeFromBookSeats}
                        data={seat} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="row border-right pr-5">
                    <h4 className="bg-primary w-100 py-2 rounded">Tài xế</h4>
                    {this.renderSeatList()}
                </div>
            </div>
        );
    }
}

export default DanhSachGhe;