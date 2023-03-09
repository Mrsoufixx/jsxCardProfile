import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row,Button } from "react-bootstrap";
import Address from "./Profile/Address";
import Fullname from "./Profile/FullName";
import ProfilePhoto from "./Profile/ProfilePhoto";

function Main() {
  return (

    <Card className="d-flex flex-row col-6 mx-auto mt-5 p-4 shadow cardhover sm-flex-col">
        <ProfilePhoto/>
        <Row className="col-8 ms-4">

        <Card.Body >
          <Card.Title>
            <Fullname />
          </Card.Title>
            <Address />
          
        </Card.Body>
      <Button className="btns" >More details</Button>
        </Row>
    </Card>
  );
}

export default Main;
