import type { AppProps } from "next/app";

import Layout from "@/layouts";
import { TempProvider } from "@/contexts";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TempProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</TempProvider>
	);
}
