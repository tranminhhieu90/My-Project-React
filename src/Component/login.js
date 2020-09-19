import React from 'react';
import { Row, Col, Input, Button } from 'antd';

export function Login() {
  const handleSubmit = (event) => {
    console.log('event', event.target.value)
    event.preventDefault();
  }
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col span={3}>
            Email:
        </Col>
          <Col span={10} >
            <Input
              name="email"
            ></Input>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            Password:
        </Col>
          <Col span={10} >
            <Input
              type='password'
              name="password"
            ></Input>
          </Col>
        </Row>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Login;
