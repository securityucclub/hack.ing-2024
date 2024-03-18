import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { AuthProvider } from "~/helpers/authContext";

import "~/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";
import { classNames } from "~/helpers/classNames";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Fintual</title>
        </Head>
        <div
          className={classNames(roboto.variable, poppins.variable, "font-sans")}
        >
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </>
  );
};

export default MyApp;
