
import { Card } from 'flowbite-react';

export default function Card1Component() {
  return (
   <a href="">
      <Card className="max-w-sm" imgSrc="/card2.png" horizontal>
        <h5 className="text-lg hover:text-blue-800 font-bold tracking-tight text-gray-900 dark:text-white">
            FLUTTER MOBILE DEVELOPMENT
        </h5>
        <a href="">
           <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm px-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">20% Scholarship</button>
        </a>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        Flutter course is designed to develop multi-platform like iOS and Android.
        </p>
      </Card>
   </a>
  );
}
