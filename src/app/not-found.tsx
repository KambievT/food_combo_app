import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="max-w-md">
        <div className="mb-8">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZldTZqenNwazB3NDAyaWltZzVydWNmdjh2cmxudTF3M3RqN2d2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YyKPbc5OOTSQE/giphy.gif"
            alt="404 NOT FOUND"
            className="mx-auto rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          Страница не найдена
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Извините, мы не смогли найти страницу, которую вы ищете.
        </p>

        <Link
          href="/"
          className="inline-block border-1 border-black/30 py-2 px-3 rounded-full transition-all bg-black text-white hover:bg-white hover:text-black hover:scale-105"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
