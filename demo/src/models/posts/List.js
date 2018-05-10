import React, { Component } from 'react';
import { actions, Link } from 'mirrorx';
import { List, simpleRestClient, GET_LIST } from '../../../../src';
import { Table } from 'antd';
import truncate from 'lodash/truncate';

class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      }
    };
  }

  componentWillMount() {
    this.get(1);
  }

  get = (current) => {
    const { pagination } = this.state;
    actions.loading.set(true);
    const restClient = simpleRestClient('https://jsonplaceholder.typicode.com');
    restClient(GET_LIST, 'posts', {_page: current, _limit: pagination.pageSize}).then(response => {
      actions.loading.set(false);
      this.setState({ pagination: {...pagination, total: response.total, current}, data: response.data });
    }).catch(e => {

    });
  }

  handleChangePage = (pagination) => {
    this.get(pagination.current);
  }

  render() {
    const { model, translate } = this.props;
    const { data, pagination } = this.state;

    const columns = [{
      title: translate(`models.${model}.fields.id`),
      dataIndex: 'id',
      render: (text) => <span>{text}</span>
    },{
      title: translate(`models.${model}.fields.userId`),
      dataIndex: 'userId',
      render: (text) => <span>{text}</span>
    }, {
      title: translate(`models.${model}.fields.title`),
      dataIndex: 'title',
      render: (text, record) => <Link to={`/${model}/${record.id}/show`}>{text}</Link>
    }, {
      title: translate(`models.${model}.fields.body`),
      dataIndex: 'body',
      render: (text) => <span>{truncate(text)}</span>
    }];

    return (
      <List>
        <Table rowKey='id' columns={columns} dataSource={data} pagination={pagination} onChange={this.handleChangePage}/>
      </List>
    );
  }

}

export default PostList;