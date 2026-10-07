import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

const templates = {
  t1: dynamic(() => import("../../components/ruang-hati/Template1"), { ssr: false }),
  t2: dynamic(() => import("../../components/ruang-hati/Template2"), { ssr: false }),
  t3: dynamic(() => import("../../components/ruang-hati/Template3"), { ssr: false }),
  t4: dynamic(() => import("../../components/ruang-hati/Template4"), { ssr: false }),
  "royal-jawa": dynamic(() => import("../../components/ruang-hati/Template4_RoyalJawa"), { ssr: false }),
  t5: dynamic(() => import("../../components/ruang-hati/Template5"), { ssr: false }),
};

const labels = {
  t1: "Nusantara Islamic",
  t2: "Japanese Minimal",
  t3: "Wedding Editorial",
  t4: "Pawiwahan Jawa",
  "royal-jawa": "Royal Jawa",
  t5: "Sunda Romance",
};

export default function RuangHatiTemplate() {
  const router = useRouter();
  const requested = Array.isArray(router.query.template) ? router.query.template[0] : router.query.template;
  const key = requested && templates[requested] ? requested : "t1";
  const Template = templates[key];

  return (
    <>
      <Head>
        <title>{labels[key]} — Ruang Hati | Subur Maju Printing</title>
        <meta name="description" content={`Preview template ${labels[key]} dari Ruang Hati, undangan pernikahan digital Subur Maju Printing.`} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="ruang-hati-root min-h-screen">
        <Template />
      </div>
    </>
  );
}
