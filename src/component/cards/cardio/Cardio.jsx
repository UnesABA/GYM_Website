import battle_ropes from "../../../assets/videos/battle_ropes.mp4"
import bicycle from "../../../assets/videos/bicycle.mp4"
import cardio from "../../../assets/videos/cardio.mp4"
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap"
import "./cardio.css"

const CardioTraining = () => {
  return (
    <>
      <div className="title_container">
        <h1 className="title">Sweat & Burn Series</h1>
      </div>
      <Row className="m-4">
        <Col md="4">
          <Card className="text-center bg-dark text-white border-0">
            <video
              src={battle_ropes}
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
              <CardTitle tag="h5" style={{ color: "#FFD700" }}>
                Battle Ropes Power
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="text-center bg-dark text-white border-0">
            <video
              src={bicycle}
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
              <CardTitle tag="h5" style={{ color: "#FFD700" }}>
                Burn with Cycling
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="text-center bg-dark text-white border-0">
            <video
              src={cardio}
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
              <CardTitle tag="h5" style={{ color: "#FFD700" }}>
                Full-Body Cardio Burn
              </CardTitle>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CardioTraining
