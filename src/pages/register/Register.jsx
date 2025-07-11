import { Container, Row, Col, Form, FormGroup } from "reactstrap"
import registerImg from "../../assets/images/register-img.jpg"
import { useForm } from "react-hook-form"
import "./register.css"
import { Link } from "react-router-dom"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="register">
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <div className="register_container d-flex align-items-center justify-content-center gap-4">
              <div className="register_img">
                <img src={registerImg} />
              </div>

              <div className="register_form">
                <h2>Sign Up & Get Fit</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("fullName", {
                        required: "You must enter your Full name",
                      })}
                    />
                  </FormGroup>
                  {errors.fullName && (
                    <span className="text-danger">
                      {errors.fullName.message}
                    </span>
                  )}
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        validate: (value) => {
                          if (!value.contain("@")) {
                            return "Your email must includes @"
                          }
                          return true
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                        validate: (value) =>
                          /^0[67][0-9]{8}$/.test(value) ||
                          "Enter a valid Moroccan phone number (e.g. 0612345678)",
                      })}
                    />
                    {errors.phone && (
                      <span className="text-danger">
                        {errors.phone.message}
                      </span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        validate: (value) => {
                          const lengthCheck =
                            value.length >= 8 && value.length <= 24
                          const uppercaseCheck = /[A-Z]/.test(value)
                          const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(
                            value
                          )

                          if (!lengthCheck)
                            return "Password must be 8–24 characters long"
                          if (!uppercaseCheck)
                            return "Password must contain at least one uppercase letter"
                          if (!symbolCheck)
                            return "Password must contain at least one symbol"

                          return true
                        },
                      })}
                    />
                  </FormGroup>
                  <button type="submit">Sign up</button>
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
