import React, { Component } from "react";
import { Link } from "react-router-dom";

class License extends Component {
  state = {};

  render() {
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
          <form>
            <div className="row">
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="firstname">
                    First Name <sup className="text-danger">*</sup>
                  </label>
                  <div id="firstname" className="input-group input-group-lg">
                    <input
                      className="py-4 form-control text-muted"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Last Name <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 form-control text-muted"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Gender <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 mx-1 form-control text-muted"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                    <input
                      className="py-4 mx-1 form-control text-muted"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <label>
                  Email <sup className="text-danger">*</sup>
                </label>
                <div className="input-group input-group-lg">
                  <input
                    className="py-4 form-control text-muted"
                    type="text"
                    value=""
                    placeholder=""
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Mobile Number <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 form-control text-muted"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Business Registration Number
                    <sup className="text-danger">*</sup>
                    <i className="fa fa-info-circle text-success"></i>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 mx-1 form-control text-muted input"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Business <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <select name="" id="" className="py-4 mx-1 form-control">
                      <option value="Individual Business Name">
                        Individual Business Name
                      </option>
                      <option value="Individual Business Name">
                        Coporate Business Name
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-8 my-2">
                <div className="form-group">
                  <label>
                    Business Registration Number
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 mx-1 form-control text-muted"
                      type="text"
                      value=""
                      placeholder=""
                      autocomplete="off"
                      required
                    />
                  </div>
                  <small className="text-muted mt-2">
                    Please ensure that the address entered is verifiable
                  </small>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Upload Certificate of Incorporation
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="border-right-0 form-control text-muted"
                      type="file"
                      value=""
                      placeholder=""
                      required
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
                  <label>
                    Mode of Identification
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <select name="" id="" className="py-4 mx-1 form-control">
                      <option value="Individual Business Name">
                        National ID
                      </option>
                      <option value="Individual Business Name">
                        Driver's License
                      </option>
                    </select>
                  </div>
                  <small className="text-muted mt-2">
                    Valid proof of Identification
                  </small>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Upload Identification Document
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="border-right-0 form-control text-muted"
                      type="file"
                      value=""
                      placeholder=""
                      required
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
                      className="border-right-0 form-control text-muted"
                      type="file"
                      value=""
                      placeholder=""
                      required
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
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 form-control text-muted"
                      type="password"
                      value=""
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label>
                    Confirm Password <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      className="py-4 form-control text-muted"
                      type="password"
                      value=""
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <input
                type="button"
                className="btn primary-color my-4 btn-lg btn-block"
                value="Register"
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default License;
