import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Prime Number Guessing Game</p>
      <p>
        Powered by <a href="https://randomplayables.com" target="_blank" rel="noopener noreferrer">RandomPlayables</a>
      </p>
    </footer>
  );
};

export default Footer;