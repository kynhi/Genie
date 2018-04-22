import React, {Component} from 'react';
// import '../Styles/RegisterStyle.css';
// import $ from 'jquery';
export default class RegisterComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirm: ''
    };

  }

  updateSearchName(event) {
    this.setState({name: event.target.value});
  }

  updateSearchEmail(event) {
    this.setState({email: event.target.value});
  }

  updateSearchUsername(event) {
    this.setState({username: event.target.value});
  }

  updateSearchPassword(event) {
    this.setState({password: event.target.value});
  }

  updateSearchConfirm(event) {
    this.setState({confirm: event.target.value});
  }

  render(){
    return(
      <div className="container">
			<div className="row main">
				<div className="main-login main-center">
				<h5>Become a Genie today</h5>
					<form className="" method="post" action="#">

						<div className="form-group">
							<label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="name" id="name" placeholder="Enter your Name"
                  value={this.state.name} onChange={this.updateSearchName.bind(this)}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email"
                  value={this.state.email} onChange={this.updateSearchEmail.bind(this)}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="username" className="cols-sm-2 control-label">Username</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username"
                  value={this.state.username} onChange={this.updateSearchUsername.bind(this)}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                  <div className="input-group">
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"
                  value={this.state.password} onChange={this.updateSearchPassword.bind(this)}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
              <div className="cols-sm-10">
              <div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"
                  value={this.state.confirm} onChange={this.updateSearchConfirm.bind(this)}/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<a href="http://www.google.com" target="_blank" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</a>
						</div>

					</form>
				</div>
			</div>
		</div>
    )
  }
}
