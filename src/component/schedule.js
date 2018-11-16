import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mailSchedule } from '../service/search/action';

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
        	email:"",
			name:"",
			date:"",
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    addSchedule = (event) =>{
	event.preventDefault();
	  const data = {
		"email": this.state.email,
		"name":this.state.name,
		"timestamp": (new Date(this.state.date)).getTime()
		}
		this.props.mailSchedule(data)
	}

  
    render() {

        return (
             <form className="form-inline" onSubmit={this.addSchedule}>
                <div className="form-group">
                    <label htmlFor="email">Email</label><span>&nbsp; </span>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} id="email"/>
                </div><span>&nbsp; </span>
                <div className="form-group">
                    <label htmlFor="pwd">Name</label><span>&nbsp; </span>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} id="Name"/>
                </div><span>&nbsp; </span>
                <div className="form-group">
                    <label htmlFor="pwd">Date</label><span>&nbsp; </span>
                    <input type="datetime-local" className="form-control" name="date" value={this.state.date} onChange={this.handleChange} id="Date"/>
                </div><span>&nbsp; </span>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    mailSchedule:(data) => dispatch (mailSchedule(data))
});
export default connect(null, mapDispatchToProps)(Schedule);