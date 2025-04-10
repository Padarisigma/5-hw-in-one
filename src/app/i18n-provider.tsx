// app/i18n-provider.jsx
'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18.js';

export default function I18nProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}