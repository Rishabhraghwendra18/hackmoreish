import Div from "../../components/Div";

export default function ContactForm() {
  return (
    <Div title={"Contact Us"} section_id={"Contact_Us"}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ textAlign: "center" }}>
          Reach out to us at
          <a
            href="mailto:18hack11moreish21@gmail.com"
            target={"_blank"}
            style={{
              marginLeft: "0.2vw",
              "word-wrap": "break-word",
            }}
          >
            18hack11moreish21@gmail.com
          </a>
        </h4>
        <h6>
          Our Sponsorship
          <a
            href="https://drive.google.com/file/d/1MV-9mVr3jVPErf_xGjvYRxfisBp-DlQj/view?usp=sharing"
            target={"_blank"}
            style={{
              marginLeft: "0.2vw",
            }}
          >
           Prospectus
          </a>
        </h6>
      </div>
    </Div>
  );
}
