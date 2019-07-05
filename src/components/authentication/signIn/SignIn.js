import React, { Component } from 'react';

// Components
import LabelInput from '../../common/components/Label_Input';

// Css
import '../../../css/sign-in.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: ''
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    
    const data = { email, password };
    
    console.log(data)
  };

  render() {

    const { errors } = this.state;

    return (
      <div className='sign-in d-flex'>
        <section className="m-auto">
          <div className="container no-gutters">
            <div className="row no-gutters">
              <div className="col">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4 className='mb-0'>
                      <i className="fas fa-sign-in-alt"></i> Sign In</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <LabelInput
                        text='Email'
                        type='email'
                        icon='fas fa-envelope'
                        name='email'
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors}
                      />
                      <LabelInput
                        text='Password'
                        type='password'
                        icon='fas fa-lock'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors}
                      />

                      <input type="submit" value="Login" className="btn btn-secondary btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SignIn;