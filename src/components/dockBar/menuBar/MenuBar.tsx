'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MenuBar() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const date = now.toLocaleString('en-US', options) || '';
      setDateTime(date.replaceAll(',', ''));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white bg-opacity-30 backdrop-blur-md py-1 px-4 w-full flex justify-between">
      <div className="left-side flex gap-5 items-center">
        <div>
          <Image
            src="/apple-logo.svg"
            alt="Menu Bar Apple Logo"
            width={18}
            height={18}
            priority
          />
        </div>

        <div className="content flex items-center gap-6">
          <p className="font-bold">Finder</p>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Window</p>
          <p>Help</p>
        </div>
      </div>

      <div className="right-side flex gap-4 items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="/menu-bar/ios-battery-full.png"
            alt="iOS Battery Full Icon"
            width={30}
            height={30}
          />

          <Image
            src="/menu-bar/ios-wifi.png"
            alt="iOS Wifi Icon"
            width={20}
            height={20}
          />

          <Image
            src="/menu-bar/ios-search.png"
            alt="iOS Search Icon"
            width={20}
            height={20}
          />

          <Image
            src="/menu-bar/ios-control-center.webp"
            alt="iOS Control Center Icon"
            width={20}
            height={20}
          />
        </div>

        <div className="content">
          <p>{dateTime}</p>
        </div>
      </div>
    </section>
  );
}
