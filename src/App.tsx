import Footer from "./components/footer";
import Header from "./components/header";
import History from "./components/history";
import Team from "./components/team";

function App() {
  return (
    <section>
      <Header />
      <div className="-mt-20 hidden h-screen w-screen bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat md:block"></div>
      <img
        src="/images/hero-bg.png"
        alt="hero background"
        className="-mt-20 md:hidden"
      />
      <History />
      <Team />
      <Footer />
    </section>
  );
}

export default App;
