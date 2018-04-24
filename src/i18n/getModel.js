import Polyglot from 'node-polyglot';
import { messages as defaultMessages } from './';

export default (locale = 'zh', customMessages) => {
  const customMessage = customMessages[locale] || {};
  const defaultMessage = defaultMessages[locale] || {};
  const message = { ...defaultMessage, ...customMessage };

  return {
    name: 'i18n',
    initialState: new Polyglot({
      locale,
      phrases: message
    }),
    effects: {
      translate: (i18n, text) => {
        return i18n.t(text);
      }
    }
  };
};