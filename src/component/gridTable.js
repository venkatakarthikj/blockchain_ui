import React, { Component } from 'react';
import EditUser from '../modal/editUser';
import CreateUser from '../modal/createUser';
import DeleteUser from '../modal/deleteUser';
import * as propTypes from 'prop-types';

class GridTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            id: "",
            firstName:  "",
            lastName:  "",
            amount:  "",
            currency:  "",
            date:  "",
            
			isEditUser:false,
			isCreateUser:false,
			isDeleteUser:false,
			userEditedInfo:[],
			userId:""
        }

    }

    static propTypes = {
      
        headerInfo:propTypes.array,
        userListInfo:propTypes.array,
        handleEditTable:propTypes.func,
        handleDeleteTable:propTypes.func


       
    }
  
	handleEditTable =(edit) =>{
	  this.setState({isEditUser:true , userEditedInfo:edit})
    }
    
	addUser =(event) =>{
		event.preventDefault();
		this.setState({ isCreateUser: true })
	}

	handleDeleteTable =(del) => {
		this.setState({isDeleteUser:true ,userEditedInfo:del})
    }
    
    closeModel = () => {
		this.setState({ isEditUser: false , isCreateUser:false ,isDeleteUser:false})
	}

  
render() {
    const { isCreateUser , isEditUser,userEditedInfo ,isDeleteUser} = this.state;

    const renderEditUser = isEditUser &&<EditUser  onHide={this.closeModel} userInfo={userEditedInfo}/>
    const renderCreateUser =  isCreateUser &&<CreateUser  onHide={this.closeModel} />
    const renderDeleteUser = isDeleteUser && <DeleteUser onHide={this.closeModel} userId={userEditedInfo} />

        return (<React.Fragment>
            {renderEditUser}
				{renderCreateUser}
				{renderDeleteUser}
            <div>
                <div style={{float:'right' ,marginBottom:'10px'}}>
					<button type="button" className="btn btn-primary btn-xs"  onClick={this.addUser} >Add</button>
				</div>

            <table className="table table-bordered table-top">
            {this.props.headerInfo && this.props.headerInfo.map((lst, i) => {
                    return (<thead key={i}>
            
                                    <tr>
                                        <td> {lst.username}</td>
                                        <td> {lst.amount}</td>
                                        <td> {lst.currency}</td>
                                        <td> {lst.date}</td>
                                        <td> {lst.action}</td>
                                    </tr>
                            </thead>)
            })}
                
            {this.props.userListInfo && this.props.userListInfo.map((lst, i) => {
                return (<tbody key={i}>
                                    <tr>
                                        <td>{lst.user.name} {lst.user.surname}</td>
                                        <td>{lst.amountInUsd}</td>
                                        <td>{lst.currency}</td>
                                        <td>{lst.date}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-xs"  onClick={(e) => this.handleEditTable(lst)} >Edit</button> <span>&nbsp; </span>
                                            <button type="button" className="btn btn-primary btn-xs"  onClick={(e) => this.handleDeleteTable(lst)} >Delete</button>
                                        </td>
                                    </tr>

                           </tbody>)
            })}

            </table>
            </div>
        </React.Fragment>);
    }
}

export default GridTable;