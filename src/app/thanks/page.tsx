import Link from "next/link";
import React from "react";

const ThanksPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-y-20 py-40 text-center">
      <h1 className="text-5xl">СПАСИБО! МЫ ПОЛУЧИЛИ ВАШУ ЗАЯВКУ!</h1>
      <p className="text-2xl">
        В ближайшее время с вами свяжется наш специалист для уточнения деталей
        вашей задачи.
      </p>
      <Link
        className="bg-red-600 px-2 py-3 w-full max-w-[300px] rounded-md font-bold text-white text-center"
        href={"/"}
      >
        ВЕРНУТЬСЯ НА ГЛАВНУЮ
      </Link>
    </div>
  );
};

export default ThanksPage;
