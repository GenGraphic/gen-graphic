import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GenGraphic | Consulting, Development, Hosting",
  description: "We offer expert consulting, web and mobile app development, as well as reliable cloud and web hosting services. Our fast backend implementation with Appwrite ensures your project is up and running smoothly and efficiently.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      {/*<Testimonials />*/}
      <Faq />
      {/*<Team />*/}
      {/*<HomeBlogSection posts={posts} />*/}
      <Contact />
      <Clients />
    </main>
  );
}
