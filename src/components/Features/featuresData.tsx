import { Feature } from "@/types/feature";
import { CiGift, CiServer  } from "react-icons/ci";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsLightning } from "react-icons/bs";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <CiGift
        color="white"
        size={30}
      />
    ),
    title: "Free Consulting Services",
    paragraph: "We provide expert consulting to guide you through every phase of your project, from ideation to deployment. Whether you need strategic advice, technical guidance, or help with managing your development process, our experienced team is here to help you achieve your goals.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <MdOutlineDashboardCustomize
        color="white"
        size={30}
      />
    ),
    title: "Custom Web/Mobile App",
    paragraph: "Our team specializes in building high-performance, scalable, and user-friendly web and mobile applications. We use the latest technologies to create apps tailored to your business needs, ensuring seamless experiences across all devices and platforms.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <CiServer
        color="white"
        size={30}
      />
    ),
    title: "Web/Cloud Hosting Solutions",
    paragraph: "We offer reliable and secure web hosting and cloud hosting services for your web and mobile applications. Our hosting solutions are designed to deliver high uptime, fast performance, and scalability, giving you peace of mind while your application grows.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <BsLightning 
        color="white"
        size={30}
      />
    ),
    title: "Fast Web/Mobile Backend",
    paragraph: "Need a robust backend solution for your web or mobile app? We use Appwrite to rapidly deploy scalable, secure, and customizable backends for your applications. Appwrite's open-source platform allows us to deliver backend services quickly, saving you time and resources.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
