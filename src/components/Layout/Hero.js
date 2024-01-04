import Image from "next/image";
import Right from "../icons/Right.";

export default function Hero() {
  return (
    <section className="hero mt-4">
        <div className="py-12">
        <h1 className="text-4xl font-semibold leading-12">በፍቅር የተዘጋጁ
         <br/>ጣፋጭ ምግቦች<br/>ይገኛሉ &nbsp;
        <span className="text-primary">ፒዛ </span></h1>
        <p className="my-4 text-gray-500 text-sm">Pizza makes your day.</p>
        <div className="flex gap-4">
            <button className="flex gap-2 uppercase text-white text-sm items-center bg-primary p-3 font-semibold rounded-full">
                አሁን ይዘዙ 
                <Right />
                </button>
            <button className=" flex gap-2 bg-gray-400 text-black  p-3 font-semibold rounded-full">
                ተጨማሪ 
                <Right />
                </button>
        </div>
        </div>
        <div className="relative">
        <Image src={'/pizza.png'} layout={"fill"} objectFit={"contain"} alt={'pizza'}/>
        </div>
    </section>
  );
}
