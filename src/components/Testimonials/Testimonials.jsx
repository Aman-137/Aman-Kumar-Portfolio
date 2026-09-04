import React from "react";
import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "Devendra Yadav",
    role: "CEO, OexTech Solutions",
    review:
      "Aman consistently took ownership well beyond what was asked of him. He understood the business goal behind each project and made decisions accordingly — whether that meant rethinking an approach or pushing back on a spec that wouldn't serve the client. That kind of judgement is rare this early in a career, and it's why we trusted him with our most demanding client work.",
  },
  {
    id: 2,
    name: "Shubham Mishra",
    role: "Team Lead",
    review:
      "Aman became one of the people the team naturally gravitated towards. He mentored juniors without being asked, unblocked others before they had to escalate, and kept discussions focused on solutions rather than blame. He raised the standard of how the whole team worked, not just his own output.",
  },
  {
    id: 3,
    name: "Ajjay Mittal",
    role: "Senior AI/ML Engineer",
    review:
      "Collaborating with Aman on our AI features was genuinely easy. He picked up model behaviour, streaming responses, and tool-calling quickly, and asked the right questions about latency, token cost, and failure handling instead of treating the model as a black box. He bridged the gap between our ML work and a product users could actually use.",
  },
  {
    id: 4,
    name: "Shubham Jauhari",
    role: "Software Engineer",
    review:
      "Aman is equally comfortable on both sides of the stack. He would build the interface, then go and write the API it needed and tune the query behind it. When something broke in production he traced it end to end instead of stopping at the boundary of his own code. That made him one of the most useful people on the team to pair with.",
  },
  {
    id: 5,
    name: "Lakshay Khanna",
    role: "QA Lead",
    review:
      "From a QA perspective, Aman is a pleasure to work with. His builds arrive with the edge cases already considered, he documents reproduction steps as carefully as he writes code, and he never treats a bug report as criticism. Regression counts on the modules he owned were consistently the lowest on the team.",
  },
  {
    id: 6,
    name: "Nikhil Mishra",
    role: "Software Engineer",
    review:
      "Aman cares about the details most people skip — unnecessary re-renders, bundle size, the loading state nobody thinks about until it's missing. He is also the first to jump in when someone else is stuck close to a deadline. A reliable engineer, and genuinely good to have on a team.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className="testimonial">
              <div className="client__avatar" aria-hidden="true">
                {getInitials(item.name)}
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__role">{item.role}</small>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
