import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Bitter } from 'next/font/google';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const bitter = Bitter({
	subsets: ['latin'],
	display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GoogleAnalytics trackPageViews gaMeasurementId='G-RJKNZ831ZK' />
			<main className={bitter.className}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
