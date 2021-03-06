import React from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Question from "../components/Question";
import { faq as content } from "../contents.json";

const FAQ = () => (
  <Section id="faq">
    <SectionTitle title="자주하는 질문" />
    <div className="responsive-container">
      {content.map(question => (
        <Question title={question.q} text={question.a} />
      ))}
    </div>
  </Section>
);

export default FAQ;
