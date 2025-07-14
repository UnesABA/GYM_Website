import coachD from "../../assets/images/coachD.jpg"
import coachB from "../../assets/images/coachB.jpg"
import coachC from "../../assets/images/coachC.jpg"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import "./coach.css"
import Slider from "react-slick"

const Coach = () => {
  const coaches = [
    { image: coachD, name: "TOUFIQ" },
    { image: coachB, name: "ANAS" },
    { image: coachC, name: "BADR" },  
  ]

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
  }

  return (
    <div className="coach_section py-5 px-4">
      <div className="title_container">
        <h2 className="title">Meet Our Coaches</h2>
      </div>
      <Row className="m-4">
        <Slider {...settings}>
          {coaches.map((coach, index) => (
            <Col className= "ticket" key={index}>
              <Card className="bg-dark text-center border-0 shadow-lg">
                <img
                  src={coach.image}
                  className="rounded-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <CardBody>
                  <CardTitle tag="h3" style={{ color: "#FFD700" }}>
                    {coach.name}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Slider>
      </Row>
    </div>
  )
}

export default Coach
