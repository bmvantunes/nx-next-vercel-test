import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TranslationsComponent(props: unknown) {
  const { locale } = useRouter();

  return (
    <div>
      <h5>{locale}</h5>

      <Link href="/ssg" locale="es">
        <a style={{ marginLeft: '20px' }}>/ES</a>
      </Link>

      <Link href="/ssg" locale="en">
        <a style={{ marginLeft: '20px' }}>/EN</a>
      </Link>

      <pre>{JSON.stringify(props, null, 4)}</pre>

      {/* <pre>{t('HELLO')}</pre> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    revalidate: 2,
    props: {
      minhaData: await Promise.resolve(new Date().toISOString()),
      // ...(await serverSideTranslations(locale || 'en', ['common'], i18nConfig)),
    },
  };
};
