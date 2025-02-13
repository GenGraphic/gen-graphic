import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Yanneck Bruder",
    designation: "Founder @ Uservii",
    content:
      "A reliable partner who always supports us when we need help. Thank you very much.",
    image: "/images/testimonials/author-01.jpeg",
    star: 5,
  },
  {
    id: 2,
    name: "Steven Brändle",
    designation: "Founder @ Pensionflow",
    content:
      "Die Zusammenarbeit mit Eduard und dem Team ist wirklich super und er ist sehr kundenorientiert. Auch seine unkomplizierte Art sowie seine Art finde ich super. Ich arbeite sehr gerne mit Eduard zusammen, da die Kommunikation wirklich gut ist und ich auch bei weiteren Anliegen Eduard immer eine optimale Lösung sucht. Ich kann GEN GRAPHIC wirklich empfehlen und freue mich auf die weiteren Projekte.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Van Heusden Pieter",
    designation: "Founder @ Pensionflow",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Here’s what our clients have to say about GenGraphic."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
