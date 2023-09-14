import Accordition from "../components/mobile-d";
import { useTranslation, withTranslation } from "react-i18next";

const FAQ = function () {
  const { t } = useTranslation("faqBox");
  return (
    <div className="faq-section">
      <div className="faq-header">
        <p>{t("faq.header")}</p>
      </div>
      <div className="faq-container">
        <div className="faq-row">
          <div className="faq-column">
            <Accordition title={t("faq.question1")} id="section_1">
              <p>{t("faq.answer1")}</p>
            </Accordition>
          </div>
          <div className="faq-column">
            <Accordition title={t("faq.question2")} id="section_2">
              <p>{t("faq.answer2")}</p>
            </Accordition>
          </div>
          <div className="faq-column">
            <Accordition title={t("faq.question3")} id="section_3">
              <p>{t("faq.answer3")}</p>
            </Accordition>
          </div>
          <div className="faq-column">
            <Accordition title={t("faq.question4")} id="section_4">
              <p>{t("faq.answer4")}</p>
            </Accordition>
          </div>
          <div className="faq-column">
            <Accordition title={t("faq.question5")} id="section_5">
              <p>{t("faq.answer5")}</p>
            </Accordition>
          </div>
          <div className="faq-column">
            <Accordition title={t("faq.question6")} id="section_6">
              <p>{t("faq.answer6")}</p>
            </Accordition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
