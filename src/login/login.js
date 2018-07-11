import React, {Component} from "react";
import {Link} from "react-router-dom";
import{connect} from 'react-redux';
 class LoginPage extends Component{
constructor(){
    super();
    this.state={
        username:'',
        password:''

    }
    this.change= this.change.bind(this);
    this.submit = this.submit.bind(this);
}

    change(e){
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value}) //
    
      //  this.setState({password:e.target.value})

        console.log(this.state);

        //let username = this.state.username;
      //  const password = this.state.password;

       const {username,password} = this.state;
    }

    submit(e){
        e.preventDefault();
        
        const login_data = {"username":this.state.username,"password":this.state.password}
        console.log(login_data);

        const loginaction={type:"LOGIN_USER", payload:login_data}
        console.log(this.props);

        const{dispatch}= this.props;
        dispatch(loginaction);

    }
    render(){

        
        return(
            <div className="col-md-6 col-md-offset-3">
                <h1>login</h1>{(this.props.login_data)?(this.props.login_data.username):'data not available'}
              <form name='form' onSubmit={this.submit} >  
              <div className="form-group">
                  <label htmlFor="username">username</label>
                    <input type="text" className="form-control" onChange={this.change} name="username" />
                  </div>

                  <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="text" className="form-control" onChange={this.change} name="password"/>
                  </div>

                  <div className="form-group">
                      <button className="btn btn-primary">login</button>
                    {/* <Link to='./register' className="btn btn-link">register</Link> */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps= function (state){
    console.log(state);
    return {login_data:state};
}

export default connect(mapStateToProps)(LoginPage)