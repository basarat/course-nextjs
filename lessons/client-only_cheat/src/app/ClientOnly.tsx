console.log('Module: ClientOnly');

export const ClientOnly = () => {
  console.log('Component: ClientOnly');
  return (
    <div onClick={() => alert('client only')}>Client Only</div>
  );
}