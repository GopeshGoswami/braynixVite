import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "./animations/TublightNav";

export function Navbar() {
  const navItems = [
    { name: "Home", url: "#", icon: <Home /> },
    {
      name: "About Us",
      url: "#",
      icon: <User />,
      dropdown: [
        {
          title: "Our Story",
          description: "Learn more about us",
          image: "https://source.unsplash.com/200x200/?story",
        },
        {
          title: "Team",
          description: "Meet our team",
          image: "https://source.unsplash.com/200x200/?team",
        },
      ],
    },
    {
      name: "Services",
      url: "#",
      icon: <Briefcase />,
      dropdown: [
        {
          title: "Web Development",
          description: "See our web projects",
          image: "https://source.unsplash.com/200x200/?technology",
        },
        {
          title: "Mobile Apps",
          description: "Our mobile solutions",
          image: "https://source.unsplash.com/200x200/?mobile",
        },
      ],
    },
    {
      name: "Careers",
      url: "#",
      icon: <FileText />,
      dropdown: [
        {
          title: "Experience",
          description: "Check my work history",
          image: "https://source.unsplash.com/200x200/?experience",
        },
        {
          title: "Skills",
          description: "What I am good at",
          image: "https://source.unsplash.com/200x200/?skills",
        },
      ],
    },
    {
      name: "Research",
      url: "#",
      icon: <FileText />,
      dropdown: [
        {
          title: "Experience",
          description: "Check my work history",
          image: "https://source.unsplash.com/200x200/?experience",
        },
        {
          title: "Skills",
          description: "What I am good at",
          image: "https://source.unsplash.com/200x200/?skills",
        },
      ],
    },
    {
      name: "Contact Us",
      url: "#",
      icon: <FileText />,
      dropdown: [
        {
          title: "Experience",
          description: "Check my work history",
          image: "https://source.unsplash.com/200x200/?experience",
        },
        {
          title: "Skills",
          description: "What I am good at",
          image: "https://source.unsplash.com/200x200/?skills",
        },
      ],
    },
  ];

  return <NavBar items={navItems} />;
}
