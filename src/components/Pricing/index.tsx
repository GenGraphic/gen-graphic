"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { cloudSemiDedicated, cloudDedicated, webHosting } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Tables"
            title="SemiDedicted Cloud Solution"
            paragraph="Up to 5 projects share a single server. This is ideal for startups or smaller businesses with lower resource needs. It's cost-effective and ensures fair resource distribution."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {cloudSemiDedicated.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Tables"
            title="Dedicted Cloud Solution"
            paragraph="A dedicated server gives you isolated performance, enhanced security, and full control. This is perfect for larger projects or clients needing premium reliability."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {cloudDedicated.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Tables"
            title="Web Hosting"
            paragraph="Our web hosting solutions are designed for speed, security, and scalability. Whether you're launching a personal website or managing a complex application, we offer dedicated servers with unmatched performance, full control, and top-tier security to ensure your projects run smoothly and reliably."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {webHosting.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
