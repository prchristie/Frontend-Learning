import accordionData from "./Q&A.json";
import FAQCard from "./components/FAQCard";
import "./index.css";

const App = () => {
  return (
    <main>
      <FAQCard accordionData={accordionData} />
    </main>
  );
};

export default App;
