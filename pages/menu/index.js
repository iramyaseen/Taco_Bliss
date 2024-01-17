// pages/about.js
import Banner from "@/components/Banner";
import List_Item from "@/components/List_Item";
import Popular_Items from "@/components/Popular_Items";
import SubMenu from "@/components/SubMenu";
import React from "react";

const About = () => {
  return (
    <div>
      <Banner />
      <SubMenu />
      <Popular_Items />
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
