import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-base font-medium text-primary underline hover:text-primary/80 transition"
        >
          ← Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
