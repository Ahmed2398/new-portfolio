import React from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

function QuickLinksDropdown() {
  return (
    <div className="sticky-quick-links">
      <div className="quick-links-container">
        <a 
          href="https://wa.me/01147266169" 
          target="_blank" 
          rel="noreferrer" 
          className="quick-link-btn whatsapp"
          title="WhatsApp"
        >
          <BsWhatsapp />
        </a>
        <a 
          href="https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/" 
          target="_blank" 
          rel="noreferrer" 
          className="quick-link-btn linkedin"
          title="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a 
          href="https://github.com/Ahmed2398" 
          target="_blank" 
          rel="noreferrer" 
          className="quick-link-btn github"
          title="GitHub"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
}

export default QuickLinksDropdown;
