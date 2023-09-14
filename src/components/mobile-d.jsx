import React, { useEffect, useState } from "react";


const Accordition = ({ title, id, children }) => {
  const [isActive, setisActive] = useState(false);

  const toggleCollapseContent = () => {
    setisActive(!isActive);
  };

  useEffect(() => {
    let panelContent = document.querySelector(`#${id} .content`);
    window.addEventListener("resize", function () {
      if (isActive) {
        panelContent.style.maxHeight = panelContent.scrollHeight + "px";
      } else {
        panelContent.style.maxHeight = null;
      }
    });
  }, [isActive, id]);

  useEffect(() => {
    let panelContent = document.querySelector(`#${id} .content`);
    return () =>
      window.removeEventListener("resize", function () {
        if (isActive) {
          panelContent.style.maxHeight = panelContent.scrollHeight + "px";
        } else {
          panelContent.style.maxHeight = null;
        }
      });
  });

  useEffect(() => {
    let panelContent = document.querySelector(`#${id} .content`);
    if (isActive) {
      panelContent.style.maxHeight = panelContent.scrollHeight + "px";
    } else {
      panelContent.style.maxHeight = null;
    }
  }, [isActive, id]);

  return (
    <div className="lp-collapsible-content" id={id}>
      <button
        id="faq-btn"
        className={`title ${isActive ? "active" : ""}`}
        onClick={toggleCollapseContent}
      >
        {title}
      </button>
      <div className="content">{children}</div>
    </div>
  );
};
export default Accordition;
