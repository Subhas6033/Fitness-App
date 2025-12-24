import React from "react";
import Slider from "react-slick";
import { Card } from "../index";
import useBackgroundSlice from "../../Hooks/BgHook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    stars: 5,
    text: "FitBody completely changed my fitness routine. I lost 20 pounds in 3 months and feel stronger than ever!",
    name: "Sarah Mitchell",
    role: "Business Owner",
  },
  {
    stars: 5,
    text: "The personalized workouts are amazing. Finally, a fitness app that actually understands my goals.",
    name: "James Chen",
    role: "Software Engineer",
  },
  {
    stars: 5,
    text: "Best investment I made in my health. The community support keeps me motivated every single day.",
    name: "Maria Garcia",
    role: "Marketing Manager",
  },
  {
    stars: 5,
    text: "Best investment I made in my health. The community support keeps me motivated every single day.",
    name: "Maria Garcia",
    role: "Marketing Manager",
  },
  {
    stars: 5,
    text: "Best investment I made in my health. The community support keeps me motivated every single day.",
    name: "Maria Garcia",
    role: "Marketing Manager",
  },
  {
    stars: 5,
    text: "Best investment I made in my health. The community support keeps me motivated every single day.",
    name: "Maria Garcia",
    role: "Marketing Manager",
  },
  {
    stars: 5,
    text: "Best investment I made in my health. The community support keeps me motivated every single day.",
    name: "Maria Garcia",
    role: "Marketing Manager",
  },
];

function NextArrow(props) {
  const { className, style, onClick, isDark } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: isDark ? "#fff" : "#1a202c",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick, isDark } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: isDark ? "#fff" : "#1a202c",
      }}
      onClick={onClick}
    />
  );
}

export default function TestimonialsSection() {
  const { isDark } = useBackgroundSlice();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow isDark={isDark} />,
    prevArrow: <PrevArrow isDark={isDark} />,
    appendDots: (dots) => (
      <ul
        style={{
          color: isDark ? "#fff" : "#1a202c",
        }}
      >
        {dots}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className={`py-16 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories from Our Community
        </h2>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <Card
                className={`${
                  isDark ? "text-gray-200" : "text-gray-800"
                } h-full`}
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <span key={i} className="text-red-600 mr-1">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
