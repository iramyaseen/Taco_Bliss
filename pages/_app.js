import { useRouter } from "next/router";
import Header from "@/components/Header";
import "../style/global.css";
import Footer from "@/components/Footer";
import Index from "./login";
import SignUp from "./signup";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeDashboard({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isSignUpPage = router.pathname === "/signup";

  return (
    <div>
      {isLoginPage && <Index />}
      {isSignUpPage && <SignUp />}
      {!isLoginPage && !isSignUpPage && <Header />}
      {!isLoginPage && !isSignUpPage && <Component {...pageProps} />}
      {!isLoginPage && !isSignUpPage && <Footer />}
    </div>
  );
}

export default HomeDashboard;
