import SlideComponent from "@/component/SlideComponent";
import Image from "next/image";
import CardComponent from "@/component/CardComponent";
import Card1Component from "@/component/Card1Component";

export default function Home() {
  return (
    <main>
      <div>
        <SlideComponent/>
      </div>

      <div className="sm:mx-4 md:mx-10 lg:mx-20 xl:mx-28">
      <h1 className="font-bold text-xl my-5">COURSE</h1>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
      </div>
      </div>

      <div className="sm:mx-4 md:mx-10 lg:mx-20 xl:mx-28">
      <h1 className="font-bold text-xl my-5">USERFUL CONTENTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </div>
    </div>
    </main>
  );
}
