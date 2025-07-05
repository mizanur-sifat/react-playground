import ContactForm from "./components/ContactForm";
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  let marks = 79;
  const city = ['Dhaka', 'Barishal', 'Sylhet', 'Rangpur'];
  const abroadCity = ['London', 'Delhi', 'Tehran', 'Gaza'];

  const itemObject = {
    name: 'Mizanur Rahman Sifat',
    age: 27,
    city: 'Dhaka'
  }

  const ButtonClick = () => {
    alert("Alhamdulillah");
  }

  return (
    <div>
      {/* <Header />
            <Hero />
            <ContactForm/>
            <Footer/> */}

      {/* {
        marks >= 80 ? <h1> Brilliant Result</h1> : <h1> Good Result</h1>
      } */}
      <Hero title="React Playground" description="Props passing from mother to child 'Hero'" />
      <DemoOne item={itemObject} />
      <DemoTwo ButtonClick={ButtonClick} />

      {(() => {
        if (marks >= 80) {
          return <h1>A+</h1>
        }
        if (marks < 80) {
          return <h1>A</h1>
        }

      })()}

      <ol>
        {
          city.map((item, i) => {
            return <li key={i.toSring}>{item}</li>
          })
        }
      </ol>

      <hr />

      <ul>
        {abroadCity.map((item, i) => <li key={i}> {item}</li>)}
      </ul>

      <ContactForm />

    </div>
  );
};

export default App;
