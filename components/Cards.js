import Image from "next/image";
import { Card } from "react-bootstrap";

export default function Cards({title,url,width,height,description}) {
  return (
    <Card className="card col-xs-12 col-sm-4">
      <Image
        variant="top"
        src={url}
        width={width}
        height={height}
        className="img-card"
      />
      <Card.Body className="card-content">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
