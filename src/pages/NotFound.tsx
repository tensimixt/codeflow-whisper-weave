
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="glass-card max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
            <h2 className="text-2xl font-semibold text-dark-text mb-4">
              Flow Interrupted
            </h2>
            <p className="text-dark-text-secondary leading-relaxed">
              The page you're looking for has drifted out of the flow. 
              Let's get you back to where the magic happens.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="bg-flow-primary hover:bg-flow-primary/90 text-white rounded-xl"
            >
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </a>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="glass-button border-flow-accent/30 text-flow-accent rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
