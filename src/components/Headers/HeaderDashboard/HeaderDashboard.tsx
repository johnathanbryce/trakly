'use client'
import { useEffect, useState } from 'react';
import styles from './HeaderDashboard.module.css'
// Internal Components
import Button from '@/components/Buttons/Button/Button';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
// Clerk Auth
import { SignOutButton } from '@clerk/nextjs';

export default function HeaderDashboard() {
  // isClient state prevents the hydration error between client-server from SignOutButton usage
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className={styles.header}>
        <h2> Trakly</h2>
        <div className={styles.header_buttons_container}>
          <ThemeToggle />
          {isClient && (
          <SignOutButton>
            <Button label='Log out' isLoading={false} />
          </SignOutButton>
        )}
        </div>
        
    </header>
  )
}
