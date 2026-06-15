import Head from "next/head";
import RootLayout from "@/layouts/RootLayout";
import HomeTemplate from "@/templates/HomeTemplate/Index";

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>EMPI Autocenter | Mecânica e Elétrica Automotiva</title>
        <meta
          name="description"
          content="EMPI Autocenter em Governador Valadares. Troca de óleo, freios, amortecedores, diagnóstico elétrico e mecânica automotiva."
        />
      </Head>
      <HomeTemplate />
    </RootLayout>
  );
}
