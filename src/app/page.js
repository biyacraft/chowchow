
import Hero from "@/components/Layout/Hero";
import HomeMenu from "@/components/Layout/HomeMenu";
import SectionHeaders from "@/components/Layout/SectionHeaders";

export default function Home() {
  return (
  <>
<Hero />
<HomeMenu />
<section className="text-center my-16">
  <SectionHeaders 
  subHeader={'Our Story'}
  mainHeader={'About Us'} />
  <div className=" text-gray-500 mx-auto max-w-md mt-4 flex flex-col gap-4">
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex blanditiis 
  ratione quis dicta consequatur atque non quos perspiciatis ad voluptatibus sint
   magnam,
</p> 
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex blanditiis 
  ratione quis dicta consequatur atque non quos perspiciatis ad voluptatibus sint
   magnam, 
</p>
</div>
</section>
<section className="text-center my-8 ">
  <SectionHeaders 
  subHeader={"Don't Hesitate"}
  mainHeader={'Contact Us'}
  />
  <div className="mt-8">
    <a href="" className="text-2xl text-gray-700"> 
    +251949257378
    </a>
  </div>
</section>

  </>
  )
} 
