import React from 'react';
import styles from './Login.css';
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';

function Login({isLogin, userForm, onLogin}) {
  const FormItem = Form.Item;
  const NormalLoginForm = Form.create()(React.createClass({
    handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          onLogin(values)
        }
      });
    },
    render() {
      const {getFieldDecorator} = this.props.form;
      return (
        <Row type="flex" justify="center" align="top" style={{marginTop: 10 + "%"}}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{required: true, message: '请输入用户名!'}],
                initialValue: userForm.username
              })(
                <Input addonBefore={<Icon type="user"/>} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请输入密码!'}],
                initialValue: userForm.password
              })(
                <Input addonBefore={<Icon type="lock"/>} type="password"
                       placeholder="密码"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('isRemember', {
                valuePropName: 'checked',
                initialValue: userForm.isRemember,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </Row>
      );
    },
  }));


  return (
    <NormalLoginForm></NormalLoginForm>
  )
}


export default Login;
