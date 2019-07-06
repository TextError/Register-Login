import React, { Component } from 'react';

// Components
import LabelInput from '../common/components/Label_Input';

// Css
import '../../css/dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      user_text: '',
      errors: ''
    }
  }

  onSubmit = e => {

  }

  onChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { text, user_text, errors } = this.state;
    return (
      <div className='dashboard d-flex pl-3 pr-3'>
        <div className='m-auto'>
          <div className='row no-gutters mb-5'>
            <div className='col'>
              <div className='dashboard-title text-center'>
                <h1 className='text-primary'>CRUD</h1>
                <p>Create - Read - Update - Delete</p>
              </div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <form onSubmit={this.onSubmit} >
                <div className='row no-gutters'>
                  <div className='col-9'>
                    <LabelInput 
                      text='Text'
                      type='text'
                      icon='far fa-plus-square'
                      name='text'
                      onChange={this.onChange}
                      value={text}
                      error={errors}
                    />
                  </div>
                  <div className='col-3 m-auto pt-3'>
                    <button className='btn btn-primary float-right'>Add</button>
                  </div>
                </div>
                <div className='row no-gutters'>
                  <div className='col'>
                    <div className='dashboard-user'>
                      
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;