import React from 'react';
import styles from './login.less'
import config from '../utils/config'
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';

function Login({isLogin, userForm, onLogin, loginButtonLoading}) {
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
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src={config.logoSrc}/>
            <span>Ant Design</span>
          </div>
          <Row type="flex" justify="center" align="top" style={{marginTop: 10 + "%"}}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem hasFeedback>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: '请输入用户名!'}],
                  initialValue: userForm.username
                })(
                  <Input addonBefore={<Icon type="user"/>} placeholder="用户名"/>
                )}
              </FormItem>
              <FormItem hasFeedback>
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
                <Button type="primary" htmlType="submit" loading={loginButtonLoading} className="login-form-button">
                  登录
                </Button>
              </FormItem>
            </Form>
          </Row>
        </div>
      );
    },
  }));


  return (
    <NormalLoginForm></NormalLoginForm>
  )
}


export default Login;
