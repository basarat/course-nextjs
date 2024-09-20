'use client';

export default function WindowSize() {
  console.log('Rendering: WindowWidth');
  return <div>{window.innerWidth}</div>;
}