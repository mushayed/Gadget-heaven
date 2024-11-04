import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
