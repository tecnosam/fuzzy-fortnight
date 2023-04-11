import { images } from "../assets/images";
const Data = () => {
  const {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleven,
    twelve,
    thirteen,
  } = images();
  const people = [
    {
      picture: first,
      name: "Jolomi Olajide",
      title: "Computer Science",
    },
    {
      picture: second,
      name: "Jolomi Olajide",
      title: "Software Engineering",
    },
    {
      picture: third,
      name: "Jolomi Olajide",
      title: "Computer Technology",
    },
    {
      picture: fourth,
      name: "Jolomi Olajide",
      title: "Information Technology",
    },
    {
      picture: fifth,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: sixth,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: seventh,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: eighth,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: ninth,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: tenth,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: eleven,
      name: "Jolomi Olajide",
      title: "C programming",
    },
    {
      picture: twelve,
      name: "Jolomi Olajide",
      title: "C programming",
    },
  ];

  const tabs = [
    {
      title: "President",
      route: "",
    },
    {
      title: "Vice President",
      route: "",
    },
    {
      title: "Senate",
      route: "",
    },
    {
      title: "Pro",
      route: "",
    },
    {
      title: "Chaplain",
      route: "",
    },
    {
      title: "Sport Director",
      route: "",
    },
    {
      title: "Overview",
      route: "",
    },
    {
      title: "Logout",
      route: "",
    },
  ];

  return { people, tabs };
};

export default Data;
