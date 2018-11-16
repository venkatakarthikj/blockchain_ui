import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../service/search/action';
import * as propTypes from 'prop-types';

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            id: this.props.userInfo._id||"",
            firstName: this.props.userInfo.user.name || "",
            lastName: this.props.userInfo.user.surname || "",
            amount: this.props.userInfo.amountInUsd || "",
            currency: this.props.userInfo.currency || "",
            date: this.props.userInfo.date || "",
        }

    }

    static propTypes = {
        onHide: propTypes.func,
        userInfo:propTypes.object
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
      
    }

    handleSubmit =(event) =>{
        event.preventDefault();
      
        const data = {
            user:{
                name:this.state.firstName,
                surname:this.state.lastName,
            },
            _id: this.state.id,
            amountInUsd:this.state.amount ,
            currency:this.state.currency,
            date:this.state.date|| ""
        }
       
        this.props.updateUser(data);
        this.props.onHide();
    }

  
render() {
         return (
            <div id="myModal" className="modal fade in" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content popupCont">

                        <div className="modal-body">
                                                   
                            <div className="col-md-12">
                            <h4>Edit Contract </h4>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="name">First name</label>
                                    <input type="text" className="form-control"  name="firstName" value={this.state.firstName} onChange={this.handleChange} id="username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Last name</label>
                                    <input type="text" className="form-control"  name="lastName" value={this.state.lastName} onChange={this.handleChange} id="username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Amount">Amount</label>
                                    <input type="text" className="form-control" name="amount" value={this.state.amount} onChange={this.handleChange} id="pwd"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="currency">Currency</label>
                                    <input type="text" className="form-control" name="currency"  value={this.state.currency} onChange={this.handleChange} id="pwd"/>
                                </div>
                               
                                <div className="form-group">
                                    <label htmlFor="currency">Date</label>
                                    <input type="date" className="form-control" name="date"  value={this.state.date} onChange={this.handleChange} id="pwd"/>
                                </div>
                            </form>
                            
                            <div className="margintpDn">
                                <button type="button" className="btn btn-default cancelbtn" onClick={this.props.onHide} >cancel</button>
                                <button type="submit" className="btn btn-default deletebtn pull-right" onClick={this.handleSubmit} >save</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateUser: (data) => dispatch(updateUser(data)),
});
export default connect(null,mapDispatchToProps)(CreateUser);