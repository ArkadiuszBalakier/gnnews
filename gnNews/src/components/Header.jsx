import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeTrigger } from "../store";
import { handleToggle } from "../store";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import Button from "@mui/material/Button";

import { Popup } from "./Popup";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTrigger());
  };

  const handleCardtoggle = () => {
    dispatch(handleToggle());
  };

  return (
    <header>
      <Link to="/">
        <span>gnNews</span>
      </Link>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton onClick={() => handleCardtoggle()} color="primary">
          <FormatListBulletedRoundedIcon />
        </IconButton>
        <Button variant="outlined" onClick={() => handleClick()}>
          Popup
        </Button>
      </Stack>
      <Popup />
    </header>
  );
};
