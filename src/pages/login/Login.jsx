import { Container, Row, Col, Form, FormGroup } from "reactstrap"
import loginVideo from "../../assets/videos/login-video.mp4"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import {AuthContext} from "../../context/AuthContext"
import "./login.css"
import { useContext, useState } from "react"

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email, password} = data
    const success = login(email, password)

    if(success){
      setLoginError("")
      navigate("/home")
    }else{
      setLoginError("Invalid Email or password")
    }
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
                      type="text"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        validate: (value) =>{
                          if(!value.includes("@")){
                            return "your Email must includes @"
                          }
                          return true
                        }
                      })}
                    />
                  </FormGroup>
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        validate: (value) => {
                          const lengthCheck = value.length >= 8 && value.length <= 24
                          const uppercaseCheck = /[A-Z]/.test(value)
                          const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(value)

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
                  {errors.password && (
                    <span className="text-danger">{errors.password.message}</span>
                  )}
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
