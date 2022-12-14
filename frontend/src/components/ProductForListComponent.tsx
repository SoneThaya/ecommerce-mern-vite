import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductForListComponent = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="src/assets/images/tablets-category.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductForListComponent;
