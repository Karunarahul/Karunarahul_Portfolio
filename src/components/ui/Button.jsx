import React from 'react';

export const Button = ({
  children,
  href,
  className = '',
  as: Component = 'button',
  ...props
}) => {
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : Component;

  return (
    <Tag
      href={href}
      className={`btn-animated ${className}`}
      {...props}
    >
      <span className="text-container">
        <span className="text">{children}</span>
      </span>
    </Tag>
  );
};
