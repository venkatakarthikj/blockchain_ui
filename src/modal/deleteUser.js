import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../service/search/action';
import * as propTypes from 'prop-types';

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:this.props.userId._id
        }
    }
    static propTypes = {
        onHide: propTypes.func,
        userId: propTypes.object
       
    }
  
    handleSubmit =(event) =>{
        event.preventDefault();
      
        const data = {
           "_id" :this.state.id
        }
       
        this.props.deleteUser(data);
        this.props.onHide();
    }

  
    render() {
        return (
            <div className="userinfo">
            <div id="myModal" className="modal fade in" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog" >
                    <div className="modal-content popupCont">
                        <div className="modal-body " >
                                
                            <h4>Delete Contract </h4>
                            <p> Would you like to Delete Contract Information....</p>

                        </div>
                        <div className="col-md-12 margintpDn">
                            <button type="button" className="btn btn-default cancelbtn" onClick={this.props.onHide} >cancel</button>
                            <button type="submit" className="btn btn-default deletebtn pull-right" onClick={this.handleSubmit} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    deleteUser: (data) => dispatch(deleteUser(data)),
});
export default connect(null,mapDispatchToProps)(CreateUser);