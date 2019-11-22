import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class License extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      mobile: "",
      businessNumber: "",
      business: "",
      companyAddress: "",
      certificateOfInc: "",
      modeOfIdentification: "",
      idDocument: "",
      photo: "",
      password: "",
      confirm: ""
    },
    options: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    gender: Joi.string()
      .required()
      .label("Gender"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    mobile: Joi.string()
      .required()
      .label("Mobile"),
    businessNumber: Joi.string()
      .required()
      .label("Businness Number"),
    business: Joi.string()
      .required()
      .label("Business Type"),
    companyAddress: Joi.string()
      .required()
      .label("Address"),
    certificateOfInc: Joi.string()
      .required()
      .label("Upload Certificate of Incorporation"),
    modeOfIdentification: Joi.string()
      .required()
      .label("Mode of Identification"),
    idDocument: Joi.string()
      .required()
      .label("Upload Identification Document"),
    photo: Joi.string()
      .required()
      .label("Upload Photo of Yourself"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    confirm: Joi.string()
      .required()
      .min(6)
      .label("Confirm Password")
  };

  render() {
    //const { data, errors } = this.state;
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
                {this.renderInput("firstName", "First Name")}
              </div>
              <div className="col-md-4 my-2">
                {this.renderInput("lastName", "Last Name")}
              </div>
              <div className="col-md-4 my-2">
                <label htmlFor="gender">
                  Gender <sup className="text-danger">*</sup>
                </label><br/>
                
                <div className="btn-group-sm btn-group-toggle" data-toggle="buttons">
                  
                    <label className="btn btn-light py-3">
                      <input type="radio" className="form-control" name="options" id="option2" autocomplete="off" /> Male
                      </label>
                      <label className="btn btn-light py-3">
                        <input type="radio" className="form-control" name="options" id="option3" autocomplete="off" /> Female
                      </label>
                </div>
              </div>
              <div className="col-md-4 my-2">
                {this.renderInput("email", "Email")}
              </div>
              <div className="col-md-4 my-2">
                {this.renderInput("mobile", "Mobile")}
              </div>
              <div className="col-md-4 my-2">
                {this.renderInput(
                  "businessNumber",
                  "Business Registration Number"
                )}
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group form-group">
                  <label htmlFor="business">
                    Business <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <select className="form-control">
                      <option className="form-control-sm">
                        Individual Business Name
                      </option>
                      <option className="form-control-sm">
                        Corporate Business Name
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-8 my-2">
                {this.renderInput("companyAddress", "Company Address")}
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="cofinc">
                    Upload Certificate of Incorporation
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group">
                    <input
                      className="border-right-0 form-control form-control-sm py-4 my-auto"
                      type="file"
                      value=""
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
                  <label htmlFor="business">
                    Mode of Identification <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group input-group-lg">
                    <select className="form-control form-control-sm py-2 my-auto">
                      <option className="form-control-sm">
                        Driver's License
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="form-group">
                  <label htmlFor="cofinc">
                    Upload Identification Document
                    <sup className="text-danger">*</sup>
                  </label>
                  <div className="input-group">
                    <input
                      className="border-right-0 form-control form-control-sm py-4 my-auto"
                      type="file"
                      value=""
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
                  <div className="input-group">
                    <input
                      className="border-right-0 form-control form-control-sm py-4 my-auto"
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
                {this.renderInput("password", "Password", "password")}
              </div>
              <div className="col-md-4 my-2">
                {this.renderInput("confirm", "Confirm Password", "password")}
              </div>

              {this.renderButton("Register")}
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default License;
