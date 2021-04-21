import React, {Component} from 'react'

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.logIn = this.logIn.bind(this);
    }

    logIn(){
        window.alert(`Username: ${this.state.username}       Password: ${this.state.password}`)
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input onChange={e=>this.setState({username: e.target.value})} />
                <input onChange={e=>this.setState({password: e.target.value})}/>
                <button onClick={this.logIn}>Log In</button>
            </div>
        )
    }
    
}

export default Login