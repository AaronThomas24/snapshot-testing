import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNWvjIrRrWuNFRKRse29rnGanWWwqrISo8A&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>AaronThomas24</Card.Title>
          <Card.Text>
            Hello my name is Aaron Thomas. I am currently studying software
            devolopment at Csu Long Beach.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
