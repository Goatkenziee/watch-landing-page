import React from 'react';
import '../globals.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Watch Landing Page</title>
        <meta name="description" content="Find your perfect watch on our landing page!" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;