import styles from "../styles/About.module.css";

export default function Div({title=null,children}) {
  return (
    <div className={`${styles.box} vh-100 d-flex justify-content-center `}>
      <div className={`d-flex justify-content-center flex-column ${styles.heading}`}>
            {title ?  <h1 style={{textAlign:"center",fontSize:"3.5rem !important"}}>{title}</h1> : null}
            {children}
      </div>
    </div>
  );
}
