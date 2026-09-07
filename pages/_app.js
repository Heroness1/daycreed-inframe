import { Sora } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sora.variable} font-sans`}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
