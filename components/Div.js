import styles from "../styles/About.module.css";

export default function Div({title=null,section_id,children}) {
  return (
    <div className={`${styles.box} vh-100 d-flex justify-content-center `} id={section_id}>
      <div className={`d-flex justify-content-center flex-column ${styles.heading}`}>
            {title ?  <h1 style={{textAlign:"center",fontSize:"5vw !important"}}>{title}</h1> : null}
            {children}
      </div>
    </div>
  );
}
