import plank from "../../../assets/videos/plank.mp4"
import stretching from "../../../assets/videos/stretching.mp4"
import wheel_rollout from "../../../assets/videos/wheel_rollout.mp4"
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap"
import "./mobilityAndCore.css"

const MobilityAndCore = () => {
  return (
    <>
      <div className="title_container">
        <h1 className="title">Core & Control Zone</h1>
      </div>
      <Row className="m-4">
        <Col md="4">
          <Card className="text-center bg-dark text-white border-0">
            <video
              src={plank}
              className="w-100"
              autoPlay
              loop
              muted
              playsInline
              style={{
                borderRadius: "10px",
                height: "400px",
                objectFit: "contain",
              }}
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#FFD700" }}>
                Strengthen Your Core
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="text-center bg-dark text-white border-0">
            <video
              src={stretching}
              className="w-100"
              autoPlay
              loop
              muted
              playsInline
              style={{
                borderRadius: "10px",
                height: "400px",
                objectFit: "contain",
              }}
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#FFD700" }}>
                Improve Your Flexibility
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="text-center bg-dark text-white border-0">
            <video
              src={wheel_rollout}
              className="w-100"
              autoPlay
              loop
              muted
              playsInline
              style={{
                borderRadius: "10px",
                height: "400px",
                objectFit: "contain",
              }}
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#FFD700" }}>
                Balance & Control
              </CardTitle>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default MobilityAndCore
