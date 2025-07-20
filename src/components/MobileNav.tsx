import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Search, LayoutDashboard, Plus, LogOut, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Marketplace', path: '/market', icon: Search },
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'List Property', path: '/create', icon: Plus },
  ];

  if (user?.isAdmin) {
    navItems.push({ label: 'Admin Panel', path: '/admin', icon: User });
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-card/95 backdrop-blur-md">
        <SheetHeader>
          <SheetTitle className="text-left gradient-text">PropertyFlow</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          
          {user && (
            <>
              <div className="border-t border-border my-4" />
              <div className="px-4 py-2">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground font-mono">{user.walletAddress}</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="mx-4 justify-start"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;