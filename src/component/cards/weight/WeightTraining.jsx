import biceps from "../../../assets/videos/biceps.mp4"
import chest from "../../../assets/videos/chest.mp4"
import back from "../../../assets/videos/back.mp4"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import "./weightTraining.css"

const WeightTraining = () => {
  return (
    <>
    <div className="title_container">
      <h1 className="title">Weight Training</h1>
    </div>
    <Row className="m-4">
      <Col md="4">
        <Card className="text-center bg-dark text-white border-0">
          <video
            src={biceps}
            className="w-100"
            autoPlay
            loop
            muted
            playsInline
            style={{
              borderRadius: "10px",
              height: "550px",
              objectFit: "contain",
            }}
          />
          <CardBody>
            <CardTitle tag="h5" style= {{color: "#FFD700"}}>Build Bigger Biceps</CardTitle>
          </CardBody>
        </Card>
      </Col>
      <Col md="4">
        <Card className="text-center bg-dark text-white border-0">
          <video
            src={chest}
            className="w-100"
            autoPlay
            loop
            muted
            playsInline
            style={{
              borderRadius: "10px",
              height: "550px",
              objectFit: "contain",
            }}
          />
          <CardBody>
            <CardTitle tag="h5" style= {{color: "#FFD700"}}>Chisel Your Chest</CardTitle>
          </CardBody>
        </Card>
      </Col>
      <Col md="4">
        <Card className="text-center bg-dark text-white border-0">
          <video
            src={back}
            className="w-100"
            autoPlay
            loop
            muted
            playsInline
            style={{
              borderRadius: "10px",
              height: "550px",
              objectFit: "contain",
            }}
          />
          <CardBody>
            <CardTitle tag="h5" style= {{color: "#FFD700"}}>Forge a Powerful Back</CardTitle>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default WeightTraining
