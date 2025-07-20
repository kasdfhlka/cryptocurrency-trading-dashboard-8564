import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/AuthProvider';
import MobileNav from '@/components/MobileNav';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'PropertyFlow' }) => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { label: 'Marketplace', path: '/market' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'List Property', path: '/create' },
  ];

  if (user?.isAdmin) {
    navItems.push({ label: 'Admin Panel', path: '/admin' });
  }

  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link to="/" className="text-2xl font-bold gradient-text">
              {title}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-200 interactive ${
                  location.pathname === item.path
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  {user?.name}
                </span>
                <Button variant="ghost" size="sm" onClick={logout} className="hidden md:flex">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="btn-soft">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;