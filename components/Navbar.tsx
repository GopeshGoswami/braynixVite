import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "../components/Animations/tublight-nav";

export function Navbar() {
  const navItems = [
    { name: "Home", url: "#", icon: <Home /> },
    {
      name: "About",
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
      name: "Projects",
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
      name: "Resume",
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
