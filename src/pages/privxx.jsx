import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import { AiFillCaretDown } from "react-icons/ai";

const ParishDentalPracticePolicy = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Parish Dental Practice Policy" />
      <div className="container mx-auto my-40">
        <div tabindex="0" class="faqblock">
          <input type="checkbox" id="faq" />
          <label for="faq">
            <div className="p">
            failed to attend policy
            </div>
            <div className="i">
              <AiFillCaretDown />
            </div>
          </label>
          <div class="faqblock-content">
            <p>
              No. The PCM control modules will output for a set number of
              seconds after every pulse is received. You will have to ensure
              that the flow rate combined with the flow meter's pulse rate is
              accounted for by ensuring the "on time" does not exceed the
              available time between pulses. If you do need to accumulate
              pulses, we recommend the SeaMetrics PT35 Pulse Timer. More
              information can be found on the PT35{" "}
              <a href="http://www.promagenviro.com/Counter-Timer">here</a>.
            </p>
          </div>
        </div>
        <div tabindex="0" class="faqblock">
          <input type="checkbox" id="faq" />
          <label for="faq">
            Can I accumulate pulses, and activate the output after a desired
            number of pulses are received?
          </label>
          <div class="faqblock-content">
            <p>
              No. The PCM control modules will output for a set number of
              seconds after every pulse is received. You will have to ensure
              that the flow rate combined with the flow meter's pulse rate is
              accounted for by ensuring the "on time" does not exceed the
              available time between pulses. If you do need to accumulate
              pulses, we recommend the SeaMetrics PT35 Pulse Timer. More
              information can be found on the PT35{" "}
              <a href="http://www.promagenviro.com/Counter-Timer">here</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ParishDentalPracticePolicy;
