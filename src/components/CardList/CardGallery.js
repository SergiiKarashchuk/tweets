import React from "react";
import Card from "../Card/Card";
import { CardList } from "./CardGallery.styled";

function CardGallery({ users }) {
  return (
    <CardList>
      {users.map(({ name, tweets, id, followers, avatar }) => (
        <Card
          key={id}
          id={id}
          name={name}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </CardList>
  );
}

export default CardGallery;
