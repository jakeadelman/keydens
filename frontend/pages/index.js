import MainWrap from "../components/main/MainWrap";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Karla:400,700');
        </style>
      </Head>
      <MainWrap />
    </div>
  );
}
