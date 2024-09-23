import HomeClient from '@/components/HomeClient/HomeClient';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../il8n';
const i18nNamespaces = ['default'];

export default async function Home({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
  	<TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
	    <HomeClient/>
	</TranslationsProvider>
  );
}