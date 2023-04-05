import Accordion from "./Accordion";
import "./FAQCard.css";

const FAQCard = ({ headerImageMobile, headerImageDesktop, accordionData }) => {
  return (
    <div className="container">
      <article className="faq-card">
        <img
          className="faq-card__image mobile"
          src="/images/illustration-woman-online-mobile.svg"
          alt="Icon"
        />
        <div className="desktop-images">
          <img
            className="faq-card__image desktop"
            src="/images/illustration-woman-online-desktop.svg"
            alt="Icon"
          />
        </div>

        <div className="faq-card__content">
          <h1 className="faq-card__header">FAQ</h1>
          <div className="faq-card__accordion-menu">
            {accordionData.map((acc) => {
              return (
                <Accordion
                  key={acc.title}
                  title={acc.title}
                  content={acc.content}
                  onClick={() => console.log(`Clicked ${acc.title}`)}
                />
              );
            })}
          </div>
        </div>
      </article>
      <img
        src="/images/illustration-box-desktop.svg"
        alt=""
        className="faq-card__image-extra desktop"
      />
    </div>
  );
};

export default FAQCard;
