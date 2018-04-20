export default {
  name: 'collapsed',
  initialState: false,
  reducers: {
    toggle: (collapsed) => {
      return !collapsed;
    }
  }
};