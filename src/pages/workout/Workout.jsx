import { Container, Row, Col } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import workoutData from "../../data/workout.json";
import { useNavigate } from "react-router-dom";
import "./workout.css";

const Workout = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/workout/${workoutData.id}`)
  }

  return (
    <section className="workout">
      <div className="search_bar">
        <input type="text" placeholder="Search workouts" />
        <FaSearch className="search_icon" />
      </div>
      <Container>
        {workoutData.map((workout) => (
          <Row key={workout.id}>
            <h2 onClick={handleClick} className="workout_title">
              {workout.title}
            </h2>
            <div className="d-flex align-items-center">
              <Col lg="4">
                <div className="workout_card">
                  <img src={`/assets/images/${workout.image}`} />
                  <p>{workout.description}</p>
                </div>
              </Col>
              <Col lg="8">
                <video
                  src={`/assets/videos/${workout.video}`}
                  className="w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    borderRadius: "30px",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
              </Col>
            </div>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Workout;
