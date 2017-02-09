import React, {PropTypes} from 'react'
import { withRouter } from 'react-router';
import auth from '../../AuthService';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(event) {
      event.preventDefault();

      auth
        .login(this.state.username, this.state.password)
        .then(() => {
          this.props.router.replace('/app')
        })
        .catch(error => {
          this.setState({ error: true })
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/></label>
                <label><input name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/></label><br/>
                <button type="submit">login</button>
                {this.state.error && (
                    <p>Bad login information</p>
                )}
            </form>
        )
    }
}

export default withRouter(Login);
