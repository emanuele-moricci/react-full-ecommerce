export type Section = {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
  id: number;
};

const sections: Section[] = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: "hats",
    id: 1,
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    linkUrl: "jackets",
    id: 2,
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "sneakers",
    id: 3,
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    linkUrl: "womens",
    size: "large",
    id: 4,
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    linkUrl: "mens",
    size: "large",
    id: 5,
  },
];

export default sections;
