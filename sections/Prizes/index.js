import React from 'react'
import Image from 'next/image'
import prize1 from '../../public/prize1.png'
import prize2 from '../../public/prize2.png'
import prize3 from '../../public/prize3.png'
import prize4 from '../../public/prize4.png'
import { Card } from 'react-bootstrap'
import styles from '../../styles/Prize.module.css'



export default function Prize(){
    return (
 <div className="d-flex justify-content-center">
   <div className="section">
   <div className="row">
        <Card className={styles.Card}style={{ width: '18rem' }} >
        <Image variant="top" src={ prize1 } className="img-card" width={100} height={100}  />
  <Card.Body>
    <Card.Title >1st Prize!!!</Card.Title>
    <Card.Text>
    The team which builds the best hack
    </Card.Text>
    </Card.Body>
</Card>

<Card className={styles.Card} style={{ width: '18rem' }}>
<Image variant="top" src={ prize2 } className="img-card" width={100} height={100}  />
  <Card.Body>
    <Card.Title>2nd Prize!!!</Card.Title>
    <Card.Text>
    The team which builds the 2nd best hack
    </Card.Text>
    </Card.Body>
</Card>

<Card className={styles.Card} style={{ width: '18rem' }}>
<Image variant="top" src={ prize3 } className="img-card" width={100} height={100}  />
  <Card.Body>
    <Card.Title>3rd Prize!!!</Card.Title>
    <Card.Text>
    The team which builds the 2nd best hack
    </Card.Text>
    </Card.Body>
</Card>

<Card  className={styles.Card} style={{ width: '18rem' }}>
<Image variant="top" src={ prize4 } className="img-card" width={100} height={100}  />
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

