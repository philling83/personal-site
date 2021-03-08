import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <div className="footer_title">Contact</div>
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, target, url } = social;
          return (
            <li key={url}>
              <a href={url} target={target} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
