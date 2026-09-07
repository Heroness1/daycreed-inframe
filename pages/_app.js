import { Sora } from "next/font/google";
import "../styles/globals.css"; // sesuaikan path-nya

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // sesuaikan weight yang kamu butuhkan
  display: "swap",
  variable: "--font-sora",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={sora.variable}>
      <Component {...pageProps} />
    </div>
  );
}
