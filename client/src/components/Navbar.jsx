import React, { useContext } from "react";
import { IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { logo_invert, logo_navaden } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <nav
      className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      style={{ background: colors.grey[900] }}
    >
      <Link to="/">
        <img
          src={theme.palette.mode === "dark" ? logo_invert : logo_navaden}
          alt="logo"
          className="w-40 object-contain stroke-cyan-500"
        />
      </Link>
      <div>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
      </div>
      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
