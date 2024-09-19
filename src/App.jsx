import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReview,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";


const App = () => {
  return (

    <main className="relative" id="home">
      <Nav/>

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>

      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="padding padding-x padding-t bg-black pb-8">
        <Footer />
      </section>

    </main>
  );
};

export default App;
