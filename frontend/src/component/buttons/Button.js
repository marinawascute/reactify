import React from "react";

import {
  TextButton,
  IconButton,
  ProfileButton,
  OptionButton,
} from "../buttons/ButtonsStyle";

function NavButton({ value, img, option, small, inbox }) {
  let button;
  if (value && !img) {
    button = <TextButton type="button">{value}</TextButton>;
  } else if (!value && img && inbox) {
    button = (
      <IconButton inbox type="button">
        <img src={img} alt="" />
      </IconButton>
    );
  } else if (!value && img) {
    button = (
      <IconButton type="button">
        <img src={img} alt="" />
      </IconButton>
    );
  } else if (value && img && !option) {
    button = (
      <ProfileButton type="button">
        <span>
          <img src={img} alt="" />
        </span>
        {value}
      </ProfileButton>
    );
  } else if (value && img && option && !small) {
    button = (
      <OptionButton type="button">
        <span>
          <img src={img} alt="" />
        </span>
        {value}
      </OptionButton>
    );
  } else if (value && img && option && small) {
    button = (
      <OptionButton small type="button">
        <span>
          <img src={img} alt="" />
        </span>
        {value}
      </OptionButton>
    );
  }

  return button;
}

export default NavButton;
