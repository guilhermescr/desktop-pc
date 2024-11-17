import Image from 'next/image';

type DockAppProps = {
  src: string;
  hasNotification?: boolean;
};

export default function DockApp({
  src,
  hasNotification = false,
}: DockAppProps) {
  return (
    <div className='relative'>
      <Image
        src={`/dock-apps/${src}`}
        alt={`${src} Logo`}
        width={50}
        height={50}
        priority
      />

      {hasNotification && (
        <div className="w-1 h-1 bg-black rounded-full absolute left-1/2 -bottom-1.5 -translate-x-1/2"></div>
      )}
    </div>
  );
}
