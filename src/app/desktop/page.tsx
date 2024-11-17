import Image from 'next/image';

export default function Desktop() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-10">
      <div
        className="border-[20px] border-black border-solid rounded-tl-md rounded-tr-md min-h-[700px] w-full max-w-[1300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/mac-os-background.jpg')" }}
      ></div>
      <div className="bg-[#DEE0E1] border-b-4 border-[#c8cbcc] rounded-bl-md rounded-br-md py-4 w-full max-w-[1300px]">
        <Image
          className="mx-auto"
          src="/apple-logo.svg"
          alt="Apple Logo"
          width={35}
          height={18}
          priority
        />
      </div>
      <div className="bg-[#DEE0E1] py-10 px-20 monitor-stand"></div>
    </div>
  );
}
