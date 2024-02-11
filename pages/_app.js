import { useRouter } from "next/router";
import Header from "@/components/Header";
import "../style/global.css";
import Footer from "@/components/Footer";
import Index from "./login";

function HomeDashboard({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <div>
      {isLoginPage && <Index />}
      {!isLoginPage && <Header />}
      {!isLoginPage && <Component {...pageProps} />}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default HomeDashboard;
