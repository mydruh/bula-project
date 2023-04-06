import React from "react";

import styles from "./SubNav.module.css";
import { SubNavItem } from "./subNavItem/SubNavItem";

export function SubNav() {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Restaurants" icon="fa-utensils" />
          <SubNavItem label="Home Services" icon="fa-home" />
          <SubNavItem label="Delivery" icon="fa-truck" />
          <SubNavItem label="More" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          
        
        </div>
      </div>
    </div>
  );
}
