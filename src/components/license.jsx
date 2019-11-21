import React, { Component } from "react";

class License extends Component {
  firstname = React.createRef();

  state = {
    account: { firstname: "", password: "" }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();

    const firstname = this.firstname.current.value;
    console.log(firstname);
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <section>
          <div className="text-center">
            <h5>
              <strong>Get / Renew License</strong>
            </h5>
            <p className="text-muted">
              Please ensure that information entered are accurate to the best of
              your knowledge.
            </p>
          </div>
        </section>

        <section className="my-5 col-md-10 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="firstname">
                    First Name <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      value={account.firstname}
                      onChange={this.handleChange}
                      id="firstname"
                      name="firstname"
                      type="text"
                      autoFocus
                      autoComplete="off"
                      //required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="lastname">
                    Last Name <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      id="lastname"
                      type="text"
                      autoComplete="off"
                      //required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="gender">
                    Gender <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 mx-1 form-control"
                      type="button"
                      value="Male"
                      autoComplete="off"
                      //required
                    />
                    <input
                      className="py-4 mx-1 btn btn-disabled form-control"
                      type="button"
                      value="Female"
                      autoComplete="off"
                      //required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <label htmlFor="email">
                  Email <sup className="text-danger">*</sup>
                </label>
                <div className="input-group input-group-sm">
                  <input
                    className="py-4 form-control"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    //required
                  />
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="mobile">
                    Mobile Number <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      type="text"
                      id="mobile"
                      autoComplete="off"
                      //required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="businessnumber">
                    Business Registration Number
                    <sup className="text-danger"> * </sup>
                    <i className="fa fa-info-circle text-success"></i>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      type="text"
                      id="businessnumber"
                      autoComplete="off"
                      //required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group form-group">
                  <label htmlFor="business">
                    Business <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <select className="form-control">
                      <option>Individual Business Name</option>
                      <option>Corporate Business Name</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-8 my-2">
                <div className="form-group">
                  <label htmlFor="companyaddress">
                    Company Address
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      type="text"
                      id="companyaddress"
                      autoComplete="off"
                      //required
                    />
                  </div>
                  <small className="text-muted mt-2">
                    Please ensure that the address entered is verifiable
                  </small>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="cofinc">
                    Upload Certificate of Incorporation
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-auto border-right-0 form-control form-control-sm"
                      type="file"
                      //required
                    />
                    <span className="input-group-prepend">
                      <div className="input-group-text bg-muted border-left-0">
                        <i className="fa fa-cloud-upload input-icon"></i>
                      </div>
                    </span>
                  </div>
                  <small className="text-muted mt-2">
                    Please ensure file is not more than 3mb
                  </small>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="identification">
                    Mode of Identification
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <select className="form-control">
                      <option value="National ID">National ID</option>
                      <option value="Driver's License">Driver's License</option>
                    </select>
                  </div>

                  <small className="text-muted mt-2">
                    Valid proof of Identification
                  </small>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="uploadidentification">
                    Upload Identification Document
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-auto border-right-0 form-control text-muted"
                      type="file"
                      id="uploadidentification"
                      //required
                    />
                    <span className="input-group-prepend">
                      <div className="input-group-text bg-muted border-left-0">
                        <i className="fa fa-cloud-upload input-icon"></i>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Upload Photo of Yourself
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-auto border-right-0 form-control text-muted"
                      type="file"
                      //required
                    />
                    <span className="input-group-prepend">
                      <div className="input-group-text bg-muted border-left-0">
                        <i className="fa fa-cloud-upload input-icon"></i>
                      </div>
                    </span>
                  </div>
                  <small className="text-muted mt-2">
                    Please take your sun glasses or hat off, and make sure your
                    face is visible. Photo within the last 6 month
                  </small>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Password <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      type="password"
                      value={account.password}
                      onChange={this.handleChange}
                      name="password"
                      //required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Confirm Password <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      className="py-4 form-control"
                      type="password"
                      placeholder=""
                      //required
                    />
                  </div>
                </div>
              </div>
              <input
                className="btn btn-info my-4 btn-lg btn-block"
                value="Register"
                type="submit"
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default License;
