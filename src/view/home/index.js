import React, { Component } from 'react';
import { connect } from 'react-redux';
import {listInfo  } from '../../service/search/action';
import Schedule from '../../component/schedule';
import GridTable from '../../component/gridTable';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
		
			userList:"",
			headerList:[{
				"username": "User Name",
				"amount" : "AmountIn Usd",
				"currency" :"Currency",
				"date":"Date",
				"action" :"Action"

			}],
			isEditUser:false,
			isCreateUser:false,
			isDeleteUser:false,
			userEditedInfo:[],
			userId:""
    }
	}
	
	componentDidMount(){
		this.props.listInfo();
	
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


  render() {
		const { userList } = this.props;
		const {headerList } = this.state;

  
    return(
			<div>
				<div className="container list">
					<Schedule/>
					<GridTable headerInfo={headerList} userListInfo={userList}/>
				</div>
			</div>
    )
  }
}
const mapStateToProps = (state) => ({
	userList: state.searchReducer.userList,

}) 	
const mapDispatchToProps = dispatch => ({
	listInfo:() => dispatch(listInfo())


})

export default connect(mapStateToProps,mapDispatchToProps)(Home);