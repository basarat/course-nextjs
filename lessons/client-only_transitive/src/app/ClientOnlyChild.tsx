console.log('Module: ClientOnlyChild');

export const ClientOnlyChild = () => {
  console.log('Component: ClientOnlyChild');
  return (
    <div onClick={() => alert('client only child')}>Client Only Child</div>
  );
}