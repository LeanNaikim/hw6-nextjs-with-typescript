
// import { Carousel } from 'flowbite-react';

// export default function SlideComponent() {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//           <img src="/banner.jpg" alt="" />
//         </div>
//         <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//           <img src="/banner1.jpg" alt="" />
//         </div>
//         <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//           <img src="/banner2.webp" alt="" />
//         </div>
//       </Carousel>
//     </div>
//   );
// }


import { Carousel } from 'flowbite-react';

export default function SlideComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex flex-col h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded">
          <div>
            <img src="/banner.jpg" alt="" />
            <h2 className="mt-2 text-xl font-bold">Slide 1 Title</h2>
            <p className="mt-2 text-center">Description of Slide 1 goes here</p>
          </div>
        </div>
        <div className="flex flex-col h-full items-center justify-center bg-gray-500 dark:bg-gray-800 dark:text-white rounded">
          <div>
            <img src="/banner1.jpg" alt="" />
            <h2 className="mt-2 text-xl font-bold">Slide 2 Title</h2>
            <p className="mt-2 text-center">Description of Slide 2 goes here</p>
          </div>
        </div>
        <div className="flex flex-col h-full items-center justify-center bg-gray-600 dark:bg-gray-900 dark:text-white rounded">
          <div>
            <img src="/banner2.webp" alt="" />
            <h2 className="mt-2 text-xl font-bold">Slide 3 Title</h2>
            <p className="mt-2 text-center">Description of Slide 3 goes here</p>
          </div>
        </div>
      </Carousel>

      <div>
        
      </div>
    </div>

    
  );
}
