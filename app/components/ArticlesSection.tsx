"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "The Future of Psychology",
    description: "Explore how technology is shaping mental health.",
    image: "./image1.jpg",
  },
  {
    title: "Mindfulness in the Digital Age",
    description: "Learn how to stay mindful in a fast-paced world.",
    image: "./image2.jpg",
  },
  {
    title: "The Science of Happiness",
    description: "Discover the secrets to a happier life.",
    image: "./image3.jpg",
  },
  {
    title: "The Future of Psychology",
    description: "Explore how technology is shaping mental health.",
    image: "./image1.jpg",
  },
  {
    title: "Mindfulness in the Digital Age",
    description: "Learn how to stay mindful in a fast-paced world.",
    image: "./image2.jpg",
  },
  {
    title: "The Science of Happiness",
    description: "Discover the secrets to a happier life.",
    image: "./image3.jpg",
  },
];

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="w-full h-[160vh] bg-transparent flex flex-col items-start justify-start gap-8 p-8"
    >
      {/* Heading and Description */}
      <motion.div
        className="flex flex-col items-start text-left max-w-4xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-[#ffffff] text-6xl font-extrabold leading-tight">
          Our Articles
        </h1>
        <p className="text-[#ffffff] text-xl mt-4 max-w-3xl">
          Explore our latest insights and stories designed to inspire and inform.
        </p>
      </motion.div>

      {/* Articles List */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-12 w-full px-16 mt-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            className="w-[350px] h-[350px] bg-[#f8f5f0] overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-[#072707] text-xl font-bold">{article.title}</h2>
              <p className="text-[#072707] text-sm mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}