import Image from 'next/image';
import React from 'react';

const ChatLoader = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    // <div ref={ref} className="flex justify-center items-center w-10 h-10 ml-2">
    //   <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    //     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm14-1.709A7.962 7.962 0 0120 12h4c0 4.418-3.582 8-8 8v-4z"></path>
    //   </svg>
    // </div>

    <div className='ml-4' ref={ref}>
      <Image src="/logo-round.svg" height={38} width={38} alt="User" className="animate-spin" />
    </div> 
  );
});

ChatLoader.displayName = 'ChatLoader';

export default ChatLoader;
