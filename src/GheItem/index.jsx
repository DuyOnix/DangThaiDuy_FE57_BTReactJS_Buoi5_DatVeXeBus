import React, { Component } from 'react';
// import classNames from "classnames"

class GheItem extends Component {
    state = {
        isBooking: false,
    }

    handleToggle = () => {
        this.setState({
            isBooking: !this.state.isBooking,
        })
    }

    addToBookSeats = () => {
        this.props.addToBookSeats(this.props.data);
        this.handleToggle();
    }

    removeFromBookSeats = () => {
        this.props.removeFromBookSeats(this.props.data);
        this.handleToggle();
    }

    render() {
        return (
            <div>
                <button onClick={this.state.isBooking ? this.removeFromBookSeats : this.addToBookSeats}
                    disabled={this.props.data.TrangThai}
                    className={`my-2 w-50 btn ${this.state.isBooking && !this.props.data.TrangThai ? "btn-success" : "btn-secondary"}
                        ${this.props.data.TrangThai ? "btn-danger" : ""}`}>
                    {this.props.data.SoGhe}
                </button>
            </div>
        );
    }
}

export default GheItem;