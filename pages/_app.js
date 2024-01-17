import Header from "@/components/Header";
import "../style/global.css";
import Footer from "@/components/Footer";

function HomeDashboard({ Component, pageProps }) {
  return (
    <div>
      <Header />

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default HomeDashboard;
