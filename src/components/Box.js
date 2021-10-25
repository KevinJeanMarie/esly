import React from "react";


class Box extends React.Component {
    render(){
        return (
        <div class="box">
                <div class="col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize: 100, color: `${this.props.color}` }}>
                        {this.props.icon}
                        {this.props.color}
                        <p>{this.props.value} {this.props.unit}</p>
                    </span>
                </div>
            </div>
        );
    }

}

export default Box
