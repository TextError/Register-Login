import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className='register'>
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4>
                      <i className="fas fa-user-plus"></i> Register</h4>
                  </div>
                  <div className="card-body">
                      <form>
                        <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password2">Password</label>
                        <input type="password" name="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="password2" className="form-control" />
                      </div>
                      <input type="submit" value="Register" className="btn btn-secondary btn-block" />
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
