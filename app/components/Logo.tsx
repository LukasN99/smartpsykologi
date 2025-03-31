import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-2 left-2 bg-white flex items-center justify-center z-50">
        <Image
            src="/logo.png"
            alt="Smart Psykologi Logo"
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 320px"
            width={320} // Ökad bredd
            height={320} // Ökad höjd
            priority
        />
    </div>
  );
}