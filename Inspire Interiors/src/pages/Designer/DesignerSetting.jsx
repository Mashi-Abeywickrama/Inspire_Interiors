import { React, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import * as Icon from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../../styles/Designer/setting.css";

import Profile from "../../assets/Designer/profile.jpg";

function DesignerSetting() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };
  return (
    <>
      <div className="background-setting p-3 rounded-3 d-flex  ">
        <div className="d-flex flex-column flex-md-row flex-lg-row w-100 gap-4">
          <Tabs
            defaultActiveKey="account"
            id="uncontrolled-tab-example"
            className="setting-tab mb-3 bg-white tab flex-column "
          >
            <Tab
              eventKey="account"
              title={
                <div className="d-flex gap-2 p-1">
                  <div className="icon-cover d-flex align-items-center ">
                    <Icon.Person size={24} />
                  </div>
                  <div className="d-flex flex-column m-0 align-items-start gap-0">
                    <p className="m-0 text-left setting-nav-main">Account</p>
                    <p className="m-0 text-left setting-nav-sub">
                      Personal Information
                    </p>
                  </div>
                </div>
              }
            >
              <div className="account-setting-session d-flex flex-column ">
                <p className="bold-cabin m-0 mb-2">Personal Information</p>

                <p className="sub-heading">Avatar</p>
                <div className="d-flex align-items-center gap-4 ">
                  <img className="setting-profile-img" src={Profile} alt="" />
                  <button className="change-profilepic Cabin-text">
                    Change
                  </button>
                  <button className="remove-profilepic Cabin-text">
                    Remove
                  </button>
                </div>
                <div className="d-flex flex-column gap-0">
                  <div className="d-flex gap-4">
                    <div class="mb-2 mt-3 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        First name:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="Little"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                    <div class="mb-2 mt-3 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        Last name:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="Robertson"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-4">
                    <div class="mb-3 mt-2 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="jane.robertson@example.com"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                    <div class="mb-3 mt-2 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        Phone number:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="(217) 555-0113"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                  </div>
                  <p className="fs-6 fw-semibold Cabin-text mt-3">Address</p>
                  <div className="d-flex gap-4">
                    <div class="mb-2 mt-2 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        Lane No:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="No.13, Pussels Lane, Wellawatte"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                    <div class="mb-2 mt-2 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        City:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="Colombo"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-4">
                    <div class="mb-5 mt-2 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        District:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="Colombo"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                    <div class="mb-5 mt-2 w-50">
                      <label
                        for="exampleFormControlInput1"
                        className="sub-heading form-label Cabin-text "
                      >
                        Province:
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 Cabin-text disabled-setting-view"
                        id="exampleFormControlInput1"
                        value="Western"
                        style={{ backgroundColor: "#F2FAFF" }}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <p className="bold-cabin m-0 mb-2">Email notifications</p>
                <div className="d-flex flex-column gap-0">
                  <div className="d-flex gap-4">
                    <div class="mb-2 mt-2 w-50">
                      <Form.Check
                        type="checkbox"
                        id="custom-checkbox"
                        label={"New promotions"}
                        // checked={isChecked}
                        // onChange={onChange}
                      />
                    </div>
                    <div class="mb-2 mt-2 w-50">
                      <Form.Check
                        type="checkbox"
                        id="custom-checkbox"
                        label={"Password changes"}
                        // checked={isChecked}
                        // onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-4">
                    <div class="mb-2 mt-2 w-50">
                      <Form.Check
                        type="checkbox"
                        id="custom-checkbox"
                        label={"Order statuses"}
                        // checked={isChecked}
                        // onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="Address"
              title={
                <div className="d-flex gap-2 p-1">
                  <div className="icon-cover d-flex align-items-center ">
                    <Icon.Bank size={24} />
                  </div>
                  <div className="d-flex flex-column m-0 align-items-start gap-0">
                    <p className="m-0 text-left setting-nav-main">Bank</p>
                    <p className="m-0 text-left setting-nav-sub">
                      Bank Account Details
                    </p>
                  </div>
                </div>
              }
            >
              <div className="account-setting-session d-flex flex-column ">
                <p className="bold-cabin m-0 mb-2">Bank Account Details</p>
                <div>
                  <div className="d-flex gap-4 align-items-center justify-content-between ">
                    <div className="d-flex justify-content-start gap-3 align-items-center">
                      <div class="mb-2 mt-2  address-radio-form">
                        <Form.Check
                          type="radio"
                          id="option1"
                          checked={selectedOption === "option1"}
                          onChange={handleRadioChange}
                          label={"Peoples Bank PLC (7135)"}
                          defaultChecked
                        />
                      </div>
                      <p className="address-tag m-0 p-1 Cabin-text">PESRONAL</p>
                    </div>

                    <div d-flex>
                      <button className="edit-address Cabin-text">Edit</button>

                      <button className="remove-address Cabin-text">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row">
                      <p className="m-0 address-sub-para mb-2">
                        Branch: Wellawatte
                      </p>
                      <p className="m-0 address-sub-para mb-2">
                        Branch Code: 124
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="m-0 address-sub-para mb-4">
                        Full Name: Anoka Perera
                      </p>
                      <p className="m-0 address-sub-para mb-4">
                        Account No: 8743633474638
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-4 align-items-center justify-content-between ">
                    <div className="d-flex justify-content-start gap-3 align-items-center">
                      <div class="mb-2 mt-2  address-radio-form">
                        <Form.Check
                          type="radio"
                          id="option2"
                          checked={selectedOption === "option2"}
                          onChange={handleRadioChange}
                          label={"Bank of Ceylon"}
                          defaultChecked
                        />
                      </div>
                      <p className="address-tag m-0 p-1 Cabin-text">JOINT</p>
                    </div>

                    <div d-flex>
                      <button className="edit-address Cabin-text">Edit</button>

                      <button className="remove-address Cabin-text">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row">
                      <p className="m-0 address-sub-para mb-2">
                        Branch: Wellawatte
                      </p>
                      <p className="m-0 address-sub-para mb-2">
                        Branch Code: 124
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="m-0 address-sub-para mb-4">
                        Full Name: Anoka Perera
                      </p>
                      <p className="m-0 address-sub-para mb-4">
                        Account No: 8743633474638
                      </p>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="d-flex gap-1">
                  <Icon.Plus color={"#035C94"} size={22} />
                  <p className="blue-colour-para">Add New Account</p>
                </div>
              </div>
            </Tab>

            <Tab
              eventKey="security"
              title={
                <div className="d-flex gap-2 p-1">
                  <div className="icon-cover d-flex align-items-center ">
                    <Icon.ShieldLock size={24} />
                  </div>
                  <div className="d-flex flex-column m-0 align-items-start gap-0">
                    <p className="m-0 text-left setting-nav-main">Security</p>
                    <p className="m-0 text-left setting-nav-sub">Password</p>
                  </div>
                </div>
              }
            >
              <div className="account-setting-session d-flex flex-column  ">
                <p className="bold-cabin m-0 mb-2">Change Password</p>
                <div className="d-flex flex-column gap-3">
                  <div class="mb-2 mt-2 w-50">
                    <label
                      for="exampleFormControlInput1"
                      className="sub-heading form-label Cabin-text "
                    >
                      Current password:
                    </label>
                    <input
                      type="password"
                      className="form-control w-100 Cabin-text disabled-setting-view"
                      id="exampleFormControlInput1"
                      placeholder="Enter Password"
                      style={{ backgroundColor: "#F2FAFF" }}
                    />
                  </div>
                </div>

                <div className="d-flex gap-4">
                  <div class="mb-2 mt-3 w-50">
                    <label
                      for="exampleFormControlInput1"
                      className="sub-heading form-label Cabin-text "
                    >
                      New password:
                    </label>
                    <input
                      type="password"
                      className="form-control w-100 Cabin-text disabled-setting-view"
                      id="exampleFormControlInput1"
                      placeholder="Enter New Password"
                      style={{ backgroundColor: "#F2FAFF" }}
                      disabled
                    />
                  </div>
                  <div class="mb-2 mt-3 w-50">
                    <label
                      for="exampleFormControlInput1"
                      className="sub-heading form-label Cabin-text "
                    >
                      New password:
                    </label>
                    <input
                      type="password"
                      className="form-control w-100 Cabin-text disabled-setting-view"
                      id="exampleFormControlInput1"
                      placeholder="Again Enter New Password"
                      style={{ backgroundColor: "#F2FAFF" }}
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <hr />
                  <div className="d-flex gap-1 justify-content-between">
                    <button className="deactivate-btn-password Cabin-text">
                      Deactivate Account
                    </button>
                    <div className="d-flex gap-2">
                      <button className="discard-changes-btn Cabin-text">
                        Discard Changes
                      </button>
                      <button className="update-psw-btn Cabin-text">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DesignerSetting;
