import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksElement = links.map((link) => {
    console.log(link)
    const href = `#${link}`
    return <a key={link} href={href}>{link}</a>
   });
    return (
      <nav>
         {linksElement} 
      </nav>);


  
}

export default NavBar;
