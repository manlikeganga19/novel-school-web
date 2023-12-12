import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Student's name" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Parent's/Guardian's name" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Interview date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Interview time"
            required
          />
        </FormGroup>
        
        <FormGroup className="form__group">
          <button className="btn find__car-btn">Book Now</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
