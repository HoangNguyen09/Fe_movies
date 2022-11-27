import React from "react";
import "./SlideBar.css";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SideItem from "./SideItems/SideItem";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function SlideBar() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className={show ? "sidebar side__show" : "sidebar"}>
        <Link to="/">
          {" "}
          <div className="logo">
            <img
              src="https://i.imgur.com/pri70BJ.png"
              alt="logo"
            />
            <h3>Movie</h3>
          </div>
        </Link>
        <div className="side__box">
          <div className="box__one">
            <span className="heading">Menu</span>
            <SideItem Icon={HomeMaxIcon} Name="Trang chủ" active link="/" />
           
            <SideItem
              Icon={FavoriteBorderIcon}
              Name="Yêu thích"
              link="/favorite"
            />
          </div>
          <div className="box__two">
            <span className="heading">Khác</span>
            <SideItem Icon={ManageAccountsIcon} Name="Tài khoản" link="/playlist" />           
          </div>
        </div>
        <div className="menu__icon" onClick={() => setShow(!show)}>
          <MenuIcon />
        </div>
      </div>
      <div className={show ? 'layer layer__show': 'layer'} onClick={() => setShow(false)}></div>
    </>
  );
}

export default SlideBar;
