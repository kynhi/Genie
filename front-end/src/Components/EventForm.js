import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../Styles/RegisterStyle.css';
import {register} from '../actions/RegisterUser';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../history';

class EventForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      longitude: '',
      latitude: ''
    };
		this.registerUser = this.registerUser.bind(this);
  }

  componentDidUpdate(){
    if(this.props.user.loggedIn){
        history.push('/');
    }
  }

  updateSearchName(event) {
    this.setState({name: event.target.value});
  }

  updateSearchDescription(event) {
    this.setState({description: event.target.value});
  }

	updateLongitude(event) {
		this.setState({description: event.target.value});
	}

	updateLatitude(event) {
		this.setState({description: event.target.value});
	}

	registerUser(event){
		event.preventDefault();
		// this.props.register(this.state);
	}

  render(){
    return(
      <div className="container RegisterComponent">
			<div className="row main">
				<div className="main-login main-center">
				<h5>Create an Event</h5>
					<form onSubmit={this.registerUser}>
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
							<label htmlFor="description" className="cols-sm-2 control-label">Event Description</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="description" id="description"  placeholder="Enter your description"
                  value={this.state.description} onChange={this.updateSearchDescription.bind(this)}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="description" className="cols-sm-2 control-label">Longitude</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="description" id="description"  placeholder="Enter longitude of event"
                  value={this.state.longitude} />
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="description" className="cols-sm-2 control-label">Latitude</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="description" id="description"  placeholder="Enter latitude of event"
                  value={this.state.latitude} />
								</div>
							</div>
						</div>


						<div className="form-group">
							<button target="_blank" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</button>
						</div>

            <div className="form-group">
              <Link to="/login"><Button>Cancel</Button></Link>
            </div>
					</form>
				</div>
			</div>
		</div>
    )
  }
}

function mapStateToProps({user}){
	return {user};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({register}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
