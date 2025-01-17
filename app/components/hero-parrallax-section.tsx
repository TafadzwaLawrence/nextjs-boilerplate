"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import moonbeamImage from "../images/pexels-googledeepmind-18069694.jpg"; // Adjust the path as necessary
import socialbeings from "../images/socialbeings.png"; // Adjust the path as necessary
import tickets from "../images/263tickets.png"; // Adjust the path as necessary
import fillthisspot from "../images/fillthistime.png"; // Adjust the path as necessary
import thismytime from "../images/thismytime3.png"; // Adjust the path as necessary
import thismytime4 from "../images/thismytime4.png"; // Adjust the path as necessary
import thismytime5 from "../images/thismytime5.png"; // Adjust the path as necessary
import thismytime6 from "../images/thismytime6.png"; // Adjust the path as necessary
import { StaticImageData } from "next/image";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products: { title: string; link: string; thumbnail: string | StaticImageData; }[] = [
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Social Beings",
    link: "",
    thumbnail: socialbeings,
  },
  {
    title: "263Tickets",
    link: "https://263tickets.co.zw/",
    thumbnail: tickets,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: thismytime,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: thismytime4,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: thismytime5,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: thismytime6,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
  {
    title: "Fill me",
    link: "",
    thumbnail: fillthisspot,
  },
];

export default HeroParallaxDemo;
