'use client';

import { ClientOnlyChild } from './ClientOnlyChild';

console.log('Module: ClientOnlyRoot');

export default function ClientOnlyRoot() {
  console.log('Component: ClientOnlyRoot');
  return (
    <>
      <div onClick={() => alert('client only root')}>Client Only Root</div>
      <ClientOnlyChild />
    </>
  );
}