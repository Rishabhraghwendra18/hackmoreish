import React from 'react'
import Image from 'next/image'
import prize0 from '../../public/prize0.png'
import prize6 from '../../public/prize6.png'
import prize5 from '../../public/prize5.png'
import prize4 from '../../public/prize4.png'
import { Card } from 'react-bootstrap'
import styles from '../../styles/Prize.module.css'



export default function Prize(){
    return (
 <div className="d-flex justify-content-center">
   <div className="section">
   <div className="row">
        <Card className={styles.Card}style={{ width: '18rem' }} >
        <Image variant="top" src={ prize4 } className="img-card" width={200} height={200} style={{ margin: 'auto' }} />
  <Card.Body>
    <Card.Title >1st Prize!!!</Card.Title>
    <Card.Text>
    The team which builds the best hack
    </Card.Text>
    </Card.Body>
</Card>

<Card className={styles.Card} style={{ width: '18rem' }}>
<Image variant="top" src={ prize5 } className="img-card" width={200} height={200} style={{ margin: 'auto' }} />
  <Card.Body>
    <Card.Title>2nd Prize!!!</Card.Title>
    <Card.Text>
    The team which builds the 2nd best hack
    </Card.Text>
    </Card.Body>
</Card>

<Card className={styles.Card} style={{ width: '18rem' }}>
<Image variant="top" src={ prize6 } className="img-card" width={200} height={200} />
  <Card.Body>
    <Card.Title>3rd Prize!!!</Card.Title>
    <Card.Text>
    The team which builds the 2nd best hack
    </Card.Text>
    </Card.Body>
</Card>

<Card  className={styles.Card} style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Other Excting Prizes for all Participants</Card.Title>
    <Card.Text>
    Other Excting Prizes for all Participants
    </Card.Text>
    </Card.Body>
</Card>
</div>
</div>
</div>

    )
}

