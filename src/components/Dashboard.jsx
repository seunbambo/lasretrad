import React from "react";

const Dashboard = () => {
  return (
    <div>
      <section>
        <div className="text-center">
          <h5>
            <strong>Welcome to your dashboard Ademola Gbadamosi!</strong>
          </h5>
        </div>
      </section>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="card mx-5">
              <div className="card-body px-5 text-center">
                <strong>Register Tenancy</strong>
                <br />
                <i className="fa fa-home icon my-3"></i>
                <p className="text-muted">Register Tenancy of a property</p>
              </div>
              <div className="card-footer bg-dark text-light text-center">
                Register
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card mx-5">
              <div className="card-body px-5 text-center">
                <strong>Profile</strong>
                <br />
                <i className="fa fa-user icon my-3"></i>
                <p className="text-muted">
                  Complete your profile within 60 days
                </p>
              </div>
              <div className="card-footer bg-dark text-light text-center">
                Get Started
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card mx-5">
              <div className="card-body px-5 text-center">
                <strong>Report Tenant</strong>
                <br />
                <i className="fa fa-comments icon my-3"></i>
                <p className="text-muted">Report tenant to LASRETRAD</p>
              </div>
              <div className="card-footer bg-dark text-light text-center">
                Report
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
