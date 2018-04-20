import Polyglot from 'node-polyglot';

export default (locale = 'zh', messages) => {
  return {
    name: 'i18n',
    initialState: new Polyglot({
      locale,
      phrases: messages[locale]
    }),
    effects: {
      translate: (i18n, text) => {
        return i18n.t(text);
      }
    }
  };
};