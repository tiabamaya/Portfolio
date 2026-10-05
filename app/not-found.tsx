import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <p className="hero-terminal">
          <span>&gt;</span> error 404
        </p>

        <h1>
          PAGE NOT
          <br />
          FOUND.
        </h1>

        <p>
          The page you&apos;re looking for
          doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="button button-primary"
        >
          <ArrowLeft size={17} />

          Return home
        </Link>
      </div>
    </main>
  );
}