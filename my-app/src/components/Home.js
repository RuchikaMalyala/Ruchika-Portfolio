import React from "react";
import { motion } from "framer-motion";
import Image from "./Image.js";
import "../styles/Home.css";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Header from "./Header.js";
const filePath = "../images/file.png";
const itemData = require("../data/Drawings.json");

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the work of a Computer Science student
        </motion.p>
      </section>

      <section className="about">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>
            I am a passionate computer science student, constantly exploring new
            technologies and building innovative projects. From web development
            to machine learning, I am driven to create solutions that make a
            difference.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* <img src={portrait} alt="Profile" /> */}
          <Image filePath={filePath} />
        </motion.div>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <motion.div
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </motion.div>
        </div>
      </section>
      <section className="drawings">
        <h2>Art Showcase</h2>
        <Box sx={{ width: 1000, height: 450 }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={item.img}
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </section>
      <section>
        <div class="contact-form">
          <h2>Get in Touch</h2>
          <form action="/contact" method="POST">
            <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="Email" required></input>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}
