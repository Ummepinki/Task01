import Image from "next/image";
import watch from "../../assets/Alarm_Clock copy 2.png";
import vector from "../../assets/Vector (2).png";
import vector1 from "../../assets/Vector (1).png";
import mobile1 from "../../assets/Mobile Screen 1.png";
import mobile2 from "../../assets/Mobile Screen 2.png";
import clip from "../../assets/CLIPBOARD VERIFIED 1.png";
const Banner = () => {
  return (
    <>
      <section class="">
        <div class="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen lg:items-center">
          <div>
            <Image src={vector} alt="" className="absolute top-28 left-48" />
            <Image
              src={watch}
              className="w-[135px] h-[157px] absolute top-36 left-56 "
              alt="Picture of the author"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={mobile1}
              className="w-[337px] h-[500px] absolute top-72 left-7"
              alt=""
            />
          </div>
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-bold sm:text-5xl">
              A collaborative Time Tracking that you Need
            </h1>

            <p class="mt-4 sm:text-xl/relaxed">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium purus pretium ligula
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded-full bg-[#FF553E] px-12 py-5 text-[18px] font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Start 14 Days Trial
              </a>
            </div>
          </div>
          <div className="hidden md:block mt-5 px-5">
            <Image
              src={clip}
              alt=""
              className="w-[178px] h-[191px] absolute right-72 top-92"
            />
            <Image
              src={vector1}
              alt=""
              className="w-[119px] h-[100px] absolute right-72 top-72"
            />
          </div>
          <div className="hidden md:block px-10">
            <Image
              src={mobile2}
              className="w-[400px] h-[500px] absolute top-72 right-0  "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
