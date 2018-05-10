import React, { Component } from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import omitBy from 'lodash/omitBy';
import isEmpty from 'lodash/isEmpty';

const FormItem = Form.Item;

class Filter extends Component {

  handleSearch = () => {
    const { form, onSearch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        values = omitBy(values, value => isEmpty(value));
        onSearch(values);
      }
    });
  }

  render() {

    const { translate, model, form: { getFieldDecorator } } = this.props;

    return (
      <Form>
        <Row gutter={16}>
          <Col span={6}>
            <FormItem
              label={translate(`models.${model}.fields.name`)}
              labelCol={{span: 6}}
              wrapperCol={{span: 18}}
              colon={false}>
              {getFieldDecorator('name')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <div style={{padding: '4px 0 0'}}>
              <Button onClick={this.handleSearch}>查询</Button>
            </div>
          </Col>
        </Row>
      </Form>
    );

  }

}

export default Form.create()(Filter);