import { Accordion } from "react-bootstrap";
import Div from "../../components/Div";
import styles from "../../styles/Faqs.module.css";

export default function Faqs({ faqs }) {
  return (
    <Div title={"FAQs"} section_id={"FAQs"}>
      <div className={`${styles.grid_container}`}>
        {faqs.map((e, i) => (
          <div className="contents">
            <Accordion>
              <Accordion.Item eventKey={`${i}`} style={{backgroundColor:"rgb(108 58 106)"}}>
                <Accordion.Header className={`${styles.header}`}>{e.question}</Accordion.Header>
                <Accordion.Body>{e.answer}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
      </div>
    </Div>
  );
}
