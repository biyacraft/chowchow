import Image from "next/image";
import MenuItem from "../MenuItem";
import SectionHeaders from "@/components/Layout/SectionHeaders";
export default function HomeMenu() {
    return (
       <section className="">
        <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
       <div className="text-center mb-4">
       <SectionHeaders 
       subHeader={"Check Out"} 
       mainHeader={"Menu"} />
       </div>
        <div className="grid grid-cols-3 gap-4">
        <MenuItem image={"pizza.png"}/>
        <MenuItem image={"cuisine-removebg-preview.png"}/>
        <MenuItem image={"beyeaynet-removebg-preview.png"}/>
        <MenuItem image={"burgerr.png"}/>
        <MenuItem image={"burgerr.png"}/>
        <MenuItem image={"burgerr.png"}/>
        <MenuItem image={"pizza.png"}/>
        <MenuItem image={"cuisine-removebg-preview.png"}/>
        <MenuItem image={"pizza.png"} />
        </div>
        </section>
        /* 
        def alternativeMerge(self, word1: string , word2: string):
            n = len(word1)
            m = len(word2)
            MIN_LENGTH = min(n,m)
            merged = ""
            for i in range(MIN_LENGTH):
                merged += word1[i] + word2[i]
            if len(word1) > len(word2):
                merged += word1[MIN_LENGTH:]
            if len(word2) > len(word1):
                merged += word2[MIN_LENGTH:]
            return merged
        */
    );
};
