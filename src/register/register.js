import React, {Component} from "react";

import {connect} from 'react-redux';
//import registeraction from './actions/register-action.js';

 class RegisterPage extends Component{
    constructor(){
        super();
        this.change=this.change.bind(this);
        this.submit=this.submit.bind(this);
        
        this.state={
            username:'',
            password:'',
            email:''
        }
    }

    change(e){
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
        const{username,password,email}= this.state;
    }

    submit(e){
       
        e.preventDefault();
       const data= {"username" : this.state.username,"password":this.state.password,"email":this.state.email}
       console.log(data);
       // call dispatch fuction 

        const action1 = {type:"REGISTER_USER",payload:data}
        console.log(this.props)
        const {dispatch}= this.props;
         dispatch(action1);// sent data to store
      
    }

    render(){

        console.log(this.props)
        return(
            <div className="col-md-6 col-md-offset-3">
            <h1>Register</h1>{(this.props.data)?this.props.data.email:'data not available'}
            
                <form name="form" onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input type="text" className="form-control" name="username" onChange={this.change}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="text" className="form-control" name="password" onChange={this.change}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="text" className="form-control" name="email" onChange={this.change}/>
                </div>
                <div className="form-group">
                <button className="btn btn-primary">Register</button>
                </div>



                </form>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    console.log(state)// received store data in state object

    return {data:state}


}
export default connect(mapStateToProps)(RegisterPage)