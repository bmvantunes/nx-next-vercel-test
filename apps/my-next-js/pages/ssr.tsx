import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: new Date().toISOString()
    }
  }
}


import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TranslationsComponent(props: unknown) {
  const { locale } = useRouter();

  return (
    <div>
      <h5>{locale}</h5>

      <Link href="/ssr" locale="es">
        <a style={{ marginLeft: '20px' }}>/ES</a>
      </Link>

      <Link href="/ssr" locale="en">
        <a style={{ marginLeft: '20px' }}>/EN</a>
      </Link>

      <pre>{JSON.stringify(props, null, 4)}</pre>

      {/* <pre>{t('HELLO')}</pre> */}
    </div>
  );
}
