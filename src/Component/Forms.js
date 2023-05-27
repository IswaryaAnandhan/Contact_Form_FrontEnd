import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { config } from "./config";

function Register() {
  let formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      phoneNumber: "",
      jobTitle: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter the name";
      } else if (values.name.length > 15) {
        errors.name = "must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "Please enter the email id";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Please enter the phoneNumber";
      } else if (values.phoneNumber.length < 10) {
        errors.phoneNumber = "must be 10 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${config.api}/user/register`, values);
        alert("Successfully Registered");
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Lystloc</h1>
                  <div className="text-center">
                    Track your employees On and Off the field!
                  </div>
                  <p>
                    Invest more time on business growth and less time on sales
                    operation in just 4 easy
                  </p>
                </div>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        type={"text"}
                        className={`form-control form-control-user ${
                          formik.touched.name && formik.errors.name
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.name && !formik.errors.name
                            ? "success-box"
                            : null
                        }`}
                        id="exampleFirstName"
                        placeholder="Full Name"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.name}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      name="company"
                      className="form-control form-control-user"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.company}
                      type="text"
                      id="exampleInputEmail"
                      placeholder="Company Name"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`form-control form-control-user ${
                        formik.touched.email && formik.errors.email
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.email && !formik.errors.email
                          ? "success-box"
                          : null
                      }`}
                      type="email"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      name="jobTitle"
                      className="form-control form-control-user"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.jobTitle}
                      type="text"
                      id="exampleInputEmail"
                      placeholder="jobTitle"
                    />
                  </div>
                  <br />
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        className={`form-control form-control-user ${
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.phoneNumber &&
                          !formik.errors.phoneNumber
                            ? "success-box"
                            : null
                        }`}
                        type="phoneNumber"
                        id="exampleInputphoneNumber"
                        placeholder="phoneNumber"
                      />
                      {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.phoneNumber}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <br />
                  <button
                    type={"submit"}
                    className="btn btn-primary btn-user btn-block"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
