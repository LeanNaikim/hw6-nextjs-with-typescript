
import { Card } from 'flowbite-react';

export default function CardComponent() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/card1.png" 
    >
       <div className="flex justify-between">
        <p className="text-xs">Blog</p>
        <p className="text-xs">17-Jan-2024</p>  
       </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far.
      </p>
    </Card>
  );
}
