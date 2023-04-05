import accordionData from "./Q&A.json";
import FAQCard from "./components/FAQCard";
import "./index.css";

const App = () => {
  return (
    <main>
      <FAQCard
        headerImageMobile="/images/illustration-woman-online-mobile.svg"
        headerImageDesktop="/images/illustration-woman-online-desktop.svg"
        accordionData={accordionData}
      />
    </main>
  );
};

export default App;
