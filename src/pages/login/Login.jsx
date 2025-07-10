import { Container, Row, Col, Form, FormGroup } from "reactstrap"
import loginVideo from "../../assets/images/login-video.mp4"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <section className="login">
      <Container>
        <Row>
          <Col lg="12" className="m-auto">
            <div className="login_container d-flex align-items-center justify-content-center gap-4">
              <div className="login_video">
                <video
                  src={loginVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="login_form">
                <h2>Ready to Sweat Again?</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                  </FormGroup>
                  <button type="submit">Sign in</button>
                </Form>

                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
