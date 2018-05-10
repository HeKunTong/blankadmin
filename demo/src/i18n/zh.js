export default {
  models: {
    users: {
      name: '用户',
      fields: {
        id: 'ID',
        name: '姓名',
        username: '用户名',
        email: '邮箱',
        phone: '电话',
        website: '主页'
      }
    },
    posts: {
      name: '文章',
      fields: {
        id: 'ID',
        userId: '用户ID',
        title: '标题',
        body: '内容',
      }
    }
  }
};