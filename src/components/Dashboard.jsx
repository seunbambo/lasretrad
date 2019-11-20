import React from "react";

const Dashboard = () => {
  return (
    <div>
      <section>
        <div class="text-center">
          <h5>
            <strong>Welcome to your dashboard Ademola Gbadamosi!</strong>
          </h5>
        </div>
      </section>

      <section class="mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card mx-5">
              <div class="card-body px-5 text-center">
                <strong>Register Tenancy</strong>
                <br />
                <i class="fa fa-home icon my-3"></i>
                <p class="text-muted">Register Tenancy of a property</p>
              </div>
              <div class="card-footer bg-dark text-light text-center">
                Register
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mx-5">
              <div class="card-body px-5 text-center">
                <strong>Profile</strong>
                <br />
                <i class="fa fa-user icon my-3"></i>
                <p class="text-muted">Complete your profile within 60 days</p>
              </div>
              <div class="card-footer bg-dark text-light text-center">
                Get Started
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mx-5">
              <div class="card-body px-5 text-center">
                <strong>Report Tenant</strong>
                <br />
                <i class="fa fa-comments icon my-3"></i>
                <p class="text-muted">Report tenant to LASRETRAD</p>
              </div>
              <div class="card-footer bg-dark text-light text-center">
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
