import type { AppProps } from "next/app";


function App({ Component, pageProps }: AppProps) {
  return (
    // I was going to wrap this in a provider if I got as far as adding Redux state for searched logs
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
