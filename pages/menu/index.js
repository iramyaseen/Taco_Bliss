// pages/about.js
import Banner from "@/components/Banner";
import List_Item from "@/components/List_Item";
import React from "react";

const About = () => {
  return (
    <div>
      <Banner />
      <List_Item />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
