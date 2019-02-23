import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Form
} from "react-bootstrap";

export default class login extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={6} md={12} lg={6} className="form-container">
          <Col xs={12}>
            <h4 className="text-center title">MyApp</h4>
            <h3 className="text-center title-message">Welcome Back</h3>
          </Col>
          <Col xs={12}>
            <Col xs={12} sm={{ span: 8, offset: 2 }}>
              <Row>
                <Col xs={12} className="google-btn">
                  <Button variant="outline-primary" block>
                    <img
                      src={require("../assets/images/google.png")}
                      style={{ width: "6%" }}
                      className="pull-left"
                    />
                    Log in with Google
                  </Button>
                </Col>
                <Col xs={12} className="text-center or-text">
                  <p>OR LOGIN WITH EMAIL</p>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl placeholder="Email Address" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl placeholder="Password" type="password" />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <Form.Check
                    controlId="chk"
                    type="checkbox"
                    label="Keep me logged in"
                    className="pull-left"
                  />
                  <Link to="" className="pull-right">
                    Forgot Password?
                  </Link>
                </Col>
                <Col xs={12}>
                  <Button variant="primary" block className="login-btn">
                    Log in
                  </Button>
                </Col>
                <Col xs={12}>
                  <Col className="login-btn-separator" />
                </Col>
                <Col xs={12} className="signup-link">
                  <p className="text-center">
                    Don't have account? <Link to="">Sign up</Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Col>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={12}
          lg={6}
          className="d-none d-sm-block d-md-none d-lg-block"
        >
          <img
            src={require("../assets/images/person.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
      </Row>
    );
  }
}
