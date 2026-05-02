import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="text-2xl font-extralight">Page not found</h2>
          <Link
            className="text-blue-600 text-md font-light p-2 underline"
            to="/"
          >
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}
