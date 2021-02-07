/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
// TODO: swap with our own style
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
