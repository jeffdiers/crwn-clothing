import { Key } from "react";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

export type SectionCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
};

const sections: SectionCategory[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    linkUrl: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    linkUrl: "shop/womens",
    size: "large",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    linkUrl: "shop/mens",
    size: "large",
  },
];

const Directory = () => {
  return (
    <DirectoryMenuContainer>
      {sections.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
