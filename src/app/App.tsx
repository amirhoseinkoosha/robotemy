import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import {Layout} from '@/components/layout/Layout';
import {HomePage} from '@/pages/HomePage';
import {TechnicalDetailsPage} from '@/pages/TechnicalDetailsPage';
import type {Language} from '@/i18n/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <Layout lang={lang} setLang={setLang}>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/technical-details" element={<TechnicalDetailsPage lang={lang} />} />
      </Routes>
    </Layout>
  );
}

