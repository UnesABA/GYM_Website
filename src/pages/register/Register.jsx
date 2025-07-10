import { Container, Row, Col, Form, FormGroup } from "reactstrap"
import registerImg from "../../assets/images/register-img.jpg"
import { useForm } from "react-hook-form"
import "./register.css"
import { Link } from "react-router-dom"

const Register = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="register">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="register_container d-flex align-items-center justify-content-center gap-4">
              <div className="register_img">
                <img src={registerImg}/>
              </div>

              <div className="register_form">
                <h2>Sign Up & Get Fit</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("fullName")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Phone number"
                      {...register("phone")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                  </FormGroup>
                  <button type="submit">
                    Sign Up
                  </button>
                </Form>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
