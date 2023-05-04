import React, { useState } from "react";
import "./content.css";
import Next from "../images/Next.svg";
import Prev from "../images/Prev.svg";
import Notification from "../images/Notification.svg";
import Input from "../images/Input.svg";
import Profile from "../images/Profile.svg";

const Content = () => {
  const Patients = [
    {
      id: "1",
      patient: "Saurabh Singh",
      age: "32",
      gender: "Male",
      date: "1/1/2023",
      billNo: "12345",
      receipt: "232543523",
      services: [
        {
          id: "1",
          label: "Consultation",
          price: "500",
          quantity: "1",
        },
        {
          id: "2",
          label: "Health CheckUp",
          price: "1000",
          quantity: "1",
        },
      ],
    },
    {
      id: "2",
      patient: "Jessy Marry",
      age: "39",
      gender: "Female",
      date: "2/2/2023",
      billNo: "57678",
      receipt: "32857385",
      services: [
        {
          id: "1",
          label: "Consultation",
          price: "500",
          quantity: "2",
        },
        {
          id: "2",
          label: "Health CheckUp",
          price: "1000",
          quantity: "2",
        },
      ],
    },
    {
      id: "3",
      patient: "Marlin Dey",
      age: "32",
      gender: "Male",
      date: "3/3/2023",
      billNo: "84763489",
      receipt: "3948673489",
      services: [
        {
          id: "1",
          label: "Consultation",
          price: "500",
          quantity: "3",
        },
        {
          id: "2",
          label: "Health CheckUp",
          price: "1000",
          quantity: "3",
        },
      ],
    },
    {
      id: "4",
      patient: "Kim John",
      age: "40",
      gender: "Female",
      date: "4/4/2023",
      billNo: "39847",
      receipt: "4875348975",
      services: [
        {
          id: "1",
          label: "Consultation",
          price: "500",
          quantity: "4",
        },
        {
          id: "2",
          label: "Health CheckUp",
          price: "1000",
          quantity: "4",
        },
      ],
    },
    {
      id: "5",
      patient: "Ricardo Cook",
      age: "45",
      gender: "Male",
      date: "5/5/2023",
      billNo: "438967",
      receipt: "94876486",
      services: [
        {
          id: "1",
          label: "Consultation",
          price: "500",
          quantity: "5",
        },
        {
          id: "2",
          label: "Health CheckUp",
          price: "1000",
          quantity: "5",
        },
      ],
    },
  ];

  const Months = [
    {
      id: "1",
      month: "January 2023",
    },
    {
      id: "2",
      month: "February 2023",
    },
    {
      id: "3",
      month: "March 2023",
    },
    {
      id: "4",
      month: "April 2023",
    },
    {
      id: "5",
      month: "May 2023",
    },
    {
      id: "6",
      month: "June 2023",
    },
    {
      id: "7",
      month: "July 2023",
    },
    {
      id: "8",
      month: "August 2023",
    },
    {
      id: "9",
      month: "September 2023",
    },
    {
      id: "10",
      month: "October 2023",
    },
    {
      id: "11",
      month: "November 2023",
    },
    {
      id: "12",
      month: "December 2023",
    },
  ];

  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState(null);

  function handleCardClick(patient) {
    setSelectedPatient(patient);
  }

  const handleNextMonth = () => {
    setCurrentMonth((currentMonth + 1) % 12);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((currentMonth - 1 + 12) % 12);
  };

  return (
    <div className="content">
      <div className="navbar">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="Search Patient..."
          />
          <img className="search-icon" src={Input} alt="Input" />
        </div>

        <button className="appointment">
          <p>Make an Appointment</p>
        </button>
        <button className="patient">
          <p>Add a Patient</p>
        </button>
        <button className="notification">
          <img src={Notification} alt="Notification" />
        </button>
      </div>

      <div className="patient-cards">
        <div className="subHeading">
          <h2>Billing Overview</h2>
          <div className="button_group">
            <button className="prev" onClick={handlePrevMonth}>
              <img src={Prev} alt="Prev" />
            </button>
            <div className="month">
              <h3>{Months[currentMonth].month}</h3>
            </div>
            <button className="next" onClick={handleNextMonth}>
              <img src={Next} alt="Next" />
            </button>
          </div>
        </div>
      </div>

      <div className="content_body">
        <div className="patient-cards">
          {Patients.map((patient) => (
            <div
              className={`card${
                selectedPatient === patient ? " selected" : ""
              }`}
              key={patient.id}
              onClick={() => handleCardClick(patient)}
            >
              <img src={Profile} alt="Profile" />
              <div className="profile">
                <h3>{patient.patient}</h3>
                <p>
                  {patient.age}, {patient.gender}
                </p>
                {selectedPatient === patient ? (
                  <button className="bill-button">View Bill</button>
                ) : (
                  <p>Bill No.: {patient.billNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="output">
          {selectedPatient && (
            <div className="prescription">
              <div className="head">
                <h2>Billing Details</h2>
                <button className="print_btn">Print Bill</button>
              </div>

              <div className="patient_details">
                <div className="desc">
                  <div className="col-1">
                    <div className="patient_name">
                      <h4>Patient Name</h4>
                    </div>
                    <p>{selectedPatient.patient}</p>
                  </div>
                  <div className="col-2">
                    <div className="patient_age">
                      <h4>Age/Gender</h4>
                    </div>
                    <p>
                      {selectedPatient.age}/{selectedPatient.gender}
                    </p>
                  </div>
                  <div className="col-3">
                    <div className="patient_bill">
                      <h4>Bill No</h4>
                    </div>
                    <p>{selectedPatient.billNo}</p>
                  </div>
                  <div className="col-4">
                    <div className="patient_bill">
                      <h4>Date/ Time</h4>
                    </div>
                    <p>{selectedPatient.date}</p>
                  </div>
                  <div className="col-5">
                    <div className="patient_bill">
                      <h4>Receipt No</h4>
                    </div>
                    <p>{selectedPatient.receipt}</p>
                  </div>
                </div>
              </div>

              <div className="index">
                <div className="serialNo">
                  <span>
                    <h4>Sr N0.</h4>
                  </span>
                  <span>
                    <h4>Service Name</h4>
                  </span>
                  <span>
                    <h4>Price</h4>
                  </span>
                  <span>
                    <h4>Quantity</h4>
                  </span>
                  <span>
                    <h4>Amount</h4>
                  </span>
                </div>

                <div className="result">
                  {selectedPatient.services.map((service) => (
                    <div key={service.id} className="data">
                      <div className="value">{service.id}</div>

                      <div className="value">{service.label}</div>

                      <div className="value">{service.price}</div>

                      <div className="value">{service.quantity}</div>

                      <div className="value">
                        {service.price * service.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="totalAmount">
                <div class="total">
                  <span>Total</span>
                  <span>
                    {" "}
                    {selectedPatient.services.reduce(
                      (total, service) =>
                        total + service.price * service.quantity,
                      0
                    )}
                  </span>
                </div>
                <div class="tax">
                  <span>Tax</span>
                  <span>200</span>
                </div>
                <div class="discount">
                  <span>Discount</span>
                  <span>20</span>
                </div>
                <hr />
                <div className="totalSum">
                  <span>Grand Total</span>
                  <span>
                    {selectedPatient.services.reduce(
                      (total, service) =>
                        total + service.price * service.quantity,
                      0
                    ) +
                      200 -
                      20}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
