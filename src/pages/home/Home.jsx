import { Container, Row } from "reactstrap"
import { Link }           from "react-router-dom"
import homeVideo          from "../../assets/images/home_video.mp4"
import gymVideo           from "../../assets/images/gym_video.mp4"
import Testimonials       from "../../component/testimonials/Testimonials"
import WeightTraining     from "../../component/cards/weight/WeightTraining"
import Cardio             from "../../component/cards/cardio/Cardio"
import MobilityAndCore    from "../../component/cards/mobility/MobilityAndCore"
import "./home.css"
import Coach from "../../component/coach/Coach"

const Home = () => {
  return (
    <section className="home_page">
      <div className="px-4 py-2">
        <video
          src={gymVideo}
          autoPlay
          loop
          muted
          playsInline
          className="home_video"
        />
      </div>
      <Container className="my-5">
        <Row>
          <Testimonials />
        </Row>
      </Container>

      <WeightTraining />
      <Cardio />
      <MobilityAndCore />
      <Coach />

      <div className="video_container">
        <video
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="home_video"
        />

        <p className="home_description">
          No more excuses! <Link to="/register">Join Now</Link> and become your
          strongest self
        </p>
      </div>
    </section>
  )
}

export default Home
