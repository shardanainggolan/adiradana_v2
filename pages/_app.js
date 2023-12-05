import '../styles/globals.css'
import '../styles/custom.css'
import Layout from '../components/layout'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import localFont from 'next/font/local';

const avenirNext = localFont({
	src: [
		{
			path: '../public/assets/fonts/avenir-next/AvenirNextLTPro-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/avenir-next/AvenirNextLTPro-It.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../public/assets/fonts/avenir-next/AvenirNextLTPro-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/avenir-next/AvenirNextLTPro-Bold.woff2',
			weight: '700',
			style: 'normal',
		}
	],
});

export default function App({ Component, pageProps }) {
  return (
		<div className={avenirNext.className}>
			<Layout>
				<DefaultSeo
					openGraph={{
						type: 'website',
						locale: 'id_ID',
						url: process.env.APP_URL,
						siteName: 'Adira Dana',
					}}
					twitter={{
						handle: '@AdiraCaban73935',
						site: '@AdiraCaban73935',
						cardType: 'summary_large_image'
					}}
				/>

				<SocialProfileJsonLd
					type="Person"
					name="adiradana.com"
					url={process.env.APP_URL}
					sameAs={[
						'https://www.facebook.com/profile.php?id=100092339860049',
						'https://twitter.com/AdiraCaban73935',
						'https://www.instagram.com/adiracabang',
						'https://www.youtube.com/@Adiracabang',
						'https://www.linkedin.com/in/adira-cabang-25195b274',
					]}
				/>

				<Component {...pageProps} />
			</Layout>
		</div>
	)
}
