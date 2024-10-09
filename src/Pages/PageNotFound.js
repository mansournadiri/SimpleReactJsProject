import NotFoundImg from "../assets/NotFound.png";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("404 - Page Not Found");
  return (
    <main>
      <section className="flex flext-col justify-center px-2">
        <div className="flex items-center my-4">
          <p className="text-4xl text-gray-700 font-bold my-10">
            404 Page Not Found, check your url
            <div className="max-w-lg">
              <img src={NotFoundImg} className="rounded" alt="PageNotFound" />
            </div>
          </p>
        </div>
      </section>
    </main>
  );
};
