 // components/SectionList.tsx'
 
'use client';
import Link from 'next/link';

export default function SidebarNav() {
  return (
    <>
    < div className='grid grid-cols-[auto_700px] justify-center gap-6 flex'>
    
    <aside className="grid grid-cols-[auto_700px] justify-center gap-6 flex bg-white shadow-md w-[180px] h-fit">
      <Link href="/ranking">
        <button className="text-black hover:text-blue-600">推薦景點排行榜</button>
      </Link>
      <Link href="/guide">
        <button className="text-black hover:text-green-600">推薦文章景點分享</button>
      </Link>
      <Link href="/reviews">
        <button className="text-black hover:text-purple-600">建立分享</button>
      </Link>
      <div className="text-xs text-gray-400 mt-4">2021.12.19</div>
    </aside>
    </>
    </>
  );
}



// 'use client';
// import Link from 'next/link';

// export default function SectionList() {
//   return (
//     <div className="mt-6 flex justify-center gap-8">
//       <Link href="/ranking">
//         <button className="flex flex-col items-center text-sm text-black hover:text-shadow-white">
//           <span className="mt-2">推薦景點排行榜</span>
//         </button>
//       </Link>

//       <Link href="/articles">
//         <button className="flex flex-col items-center text-sm text-black hover:text-shadow-white">
//           <span className="mt-2">推薦文章景點分享</span>
//         </button>
//       </Link>

//       <Link href="/share">
//         <button className="flex flex-col items-center text-sm text-black hover:text-shadow-white">
//           <span className="mt-2">建立分享</span>
//         </button>
//       </Link>
//     </div>
//   );
// }




