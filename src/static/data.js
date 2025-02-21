import email from "../assets/images/email_icon.png";
import gitHub from "../assets/images/GitHubIcon.png";
import linkedIn from "../assets/images/linkedin.png";
import Project_image from "../assets/images/Project_image.jpg";

export const nav_items = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about-me",
    display: "About me",
  },
  {
    path: "/projects",
    display: "Projects",
  },
  {
    path: "/skills",
    display: "Skills",
  },
  {
    path: "/contacts",
    display: "Contacts",
  },
];

export const imageList = [
  { src: email, alt: "Email" },
  { src: gitHub, alt: "GitHub" },
  { src: linkedIn, alt: "LinkedIn" },
];

export const buttonList = [
  { variant: "primary", size: "small", name: "Resume" },
  { variant: "secondary", size: "small", name: "Contact me" },
];

export const project_content = [
  {
    src: Project_image,
    alt: "ProjectImage",
    title: "E-commerce platform",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    src: Project_image,
    alt: "ProjectImage",
    title: "E-commerce platform",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    src: Project_image,
    alt: "ProjectImage",
    title: "E-commerce platform",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
];
