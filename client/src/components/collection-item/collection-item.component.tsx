import { FC } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CollectionItem as CollectionItemType } from "../../redux/shop/shop.types";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

type CollectionItemProps = {
  item: CollectionItemType;
};

const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => dispatch(addItem(item))}
      >
        ADD TO CART
      </Button>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
