import React from 'react';

export const Button = ({children, handleClick}) => <button onClick={handleClick}>{children}</button>;