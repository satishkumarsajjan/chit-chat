import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

async function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    // @ts-expect-error
    <Sidebar>
      <div className='h-full'>{children}</div>
    </Sidebar>
  );
}

export default UsersLayout;
