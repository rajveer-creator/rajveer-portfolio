import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="section-padding flex min-h-[60vh] items-center justify-center">
      <div className="section-container text-center">
        <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-ink-muted">
          404 Error
        </span>
        <h1 className="mt-2 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-ink">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm sm:text-base leading-relaxed text-ink-muted">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto">
          <Button to="/" variant="lime" className="w-full sm:w-auto justify-center">
            <HomeIcon size={15} />
            <span>Return to Home</span>
          </Button>
          <Button to="/projects" variant="ghost" className="w-full sm:w-auto justify-center">
            <ArrowLeft size={15} />
            <span>Browse Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
