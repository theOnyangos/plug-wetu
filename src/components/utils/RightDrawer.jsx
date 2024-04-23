import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { BiSolidXCircle } from "react-icons/bi";

function RightDrawer({ isOpen, onClose, children }) {
  return (
    <Drawer
      open={isOpen}
      direction="right"
      onClose={onClose}
      containerClassName="bg-white dark:bg-dark w-full"
      lockBackgroundScroll={true}
      //   style={{ height: height ?? "100vh" }}
    >
      <div className="bg-white dark:bg-dark w-full h-full dark:border-t dark:border-slate-700 text-darken dark:text-slate-100 relative">
        <button onClick={onClose} className="absolute top-5 right-5">
          <BiSolidXCircle className="text-2xl" />
        </button>
        {children}
      </div>
    </Drawer>
  );
}

export default RightDrawer;
