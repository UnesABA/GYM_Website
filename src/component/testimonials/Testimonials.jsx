import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import "./testimonials.css"

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Joining FITNESSFIRST transformed my life. The trainers are
          knowledgeable and supportive, and the environment is motivating.
          Highly recommend for anyone serious about their fitness journey!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="Client avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h3 className="mb-0 mt-3">Hassan Naada</h3>
            <p>Fitness Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          The flexible schedules and modern equipment make it so easy to stay
          committed. Plus, the friendly trainers always push me to reach new
          personal bests!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="Client avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h3 className="mb-0 mt-3">Soufyan Twacha</h3>
            <p>Gym Member</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I appreciate the clean and safe environment here. It’s perfect for
          anyone who wants to focus on fitness without distractions. The
          community is very welcoming too.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="Client avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h3 className="mb-0 mt-3">Ahmed Taki</h3>
            <p>Personal Trainer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
