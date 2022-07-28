import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV == 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
