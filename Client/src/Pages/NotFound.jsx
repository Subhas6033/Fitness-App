import { Link } from "react-router-dom";
import { Card, Button } from "../Components/index";
import useBackgroundSlice from "../Hooks/BgHook";

export default function NotFound() {
  const { currentBackground, changeBackground } = useBackgroundSlice();

  return (
    <section
      className={`${currentBackground} relative min-h-screen flex items-center justify-center px-6 transition-colors duration-500`}
    >
      {/* Optional subtle glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

      <Card className="relative z-10 max-w-lg w-full text-center bg-white/5 backdrop-blur-md border-white/10 text-white p-12 space-y-6 rounded-3xl">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-600/25 text-red-400 text-4xl animate-bounce">
          ⚠️
        </div>

        {/* Heading */}
        <h1 className="text-7xl font-extrabold tracking-tight text-white">
          404
        </h1>
        <h2 className="mt-2 text-2xl font-semibold">Page Not Found</h2>

        {/* Description */}
        <p className="mt-2 text-white/70 text-base sm:text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — your fitness journey is still on track.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="shadow-lg">
              Go Home
            </Button>
          </Link>

          <Link to="/login">
            <Button
              size="lg"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-red-600 shadow-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  );
}
