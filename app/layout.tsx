import './globals.css';
import AuthContext from './context/AuthContext';
import ActiveStatus from './components/ActiveStatus';
import ToasterContext from './context/ToasterContext';

export const metadata = {
  title: 'chit-chat',
  description: 'chit-chat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
