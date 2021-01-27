import React from 'react';

export const Footer = () => (
  <footer
    style={{
      marginTop: `48rem`,
      marginLeft: `40rem`,
      color: `#ffffff`,
    }}
  >
    © {new Date().getFullYear()} Juan Perez, Built with
    {` `}
    <a
      style={{ textDecoration: `none`, color: `dodgerblue` }}
      href='https://reactjs.org/'
    >
      Reactjs
    </a>
  </footer>
);
