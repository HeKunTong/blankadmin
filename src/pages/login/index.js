import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { actions } from 'mirrorx';
import { logo } from '../../images';
import './index.css';

const FormItem = Form.Item;

class Login extends Component {

  handleSubmit = (e) => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        message.success(values.userName);
        actions.routing.push('/');
      }
    });
  };

  render() {

    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
        <div className='login-wrap-container'>
            <div className='login-container'>
              <div className='login-title'>
                <img src={logo} alt='' style={{width: '44px', height: '44px', marginRight: '16px'}}/>
                <span>Ant Design</span>
              </div>
              <p className='login-description'>Ant Design 是西湖区最具影响力的 Web 设计规范</p>
              <div className='login-form'>
                <Form>
                  <FormItem>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '用户名必填' }],
                    })(
                        <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名' />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true,  message: '密码必填' }],
                    })(
                        <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='请输入密码' />
                    )}
                  </FormItem>
                  <Button size="large" style={{width: '100%'}} type='primary' onClick={this.handleSubmit}>登录</Button>
                </Form>
              </div>
            </div>
        </div>
    )
  }
}

export default Form.create()(Login);


