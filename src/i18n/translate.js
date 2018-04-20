import { connect } from 'mirrorx';

export default (Component) => connect(({ i18n }) => ({
  translate: (text) => i18n.t(text)
}))(Component);