'use client'; // jika kamu pakai Next.js App Router

import { useEffect, useState } from 'react';
import HeroImage from './_components/HeroImage';
import HeroSection from './_components/HeroSection';
import IntroText from './_components/IntroText';
import SidebarAction from './_components/SidebarActions';
import DestinationGrid from './_components/DestinationGrid';

export default function HomePage() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/destinations')
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <div className="flex-1">
        <HeroImage />
        {/* <HeroSection /> */}
        <div className="text-center mt-6 text-xl font-bold">
          你的旅程，不只是回憶——也是靈感的起點！
        </div>
        <div className="flex">
          <SidebarAction />
          <DestinationGrid />
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {destinations.map((d) => (
            <div key={d.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{d.name}</h3>
              <p>{d.city}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}










// import HeroImage from './_components/HeroImage';
// import HeroSection from './_components/HeroSection';
// import IntroText from './_components/IntroText';
// import SidebarAction from './_components/SidebarActions';
// import DestinationGrid from './_components/DestinationGrid';

// export default function HomePage() {
//   return (
//     <main>
//       <div className="flex-1">
//         <HeroImage />
//         {/* <HeroSection /> */}
//         <div className="text-center mt-6 text-xl font-bold">
//           你的旅程，不只是回憶——也是靈感的起點！
//         </div>
//         <div className="flex">
//           <SidebarAction />
//           <DestinationGrid />
//         </div>
//       </div>
//     </main>
//     const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     // frontend memanggil backend API di sini
//     fetch('http://localhost:4000/api/destinations')
//       .then((res) => res.json())
//       .then((data) => setDestinations(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//       {destinations.map((d) => (
//         <div key={d.id} className="border p-4 rounded shadow">
//           <h3 className="font-bold">{d.name}</h3>
//           <p>{d.city}</p>
//         </div>
//       ))}
//     </div>
//   );


// import pageShare from './pageShare/page';
// import HeroImage from './_components/HeroImage';

// // import SidebarIconMenu from './_components/SidebarIconMenu';
// import SidebarNav from './_components/SideBarNav';

// import DestinationGrid from './_components/DestinationGrid';
// import DestinationCard from './_components/DestinationCard';

// import HeroSection from './_components/HeroSection';

// export default function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       {/* Konten lainnya */}
//     </main>
//   );
// }

// export default function HomePage() {
//   return (
//     <main className="flex">
//       <SidebarNav />
//       <div className="flex-1">
//         <HeroSection />
//         <div className="text-center mt-6 text-xl font-light">
//           你的旅程，不只是回憶——也是靈感的起點！
//         </div>
//         <DestinationGrid />
//       </div>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main>

//       <PageShare />
//       <HeroImage />
//     </main>
//   );
// }

// import Image from 'next/image';
// import SectionList from '@/app/_components/SectionList';
// import pageShare from './pageShare/page';

// // export default function pageShare() {
// //   return <div>Ini konten dari PageShare

// //   </div>;
// // }

// export function pageShare() {
//   return (
//     <main className="max-w-screen-lg mx-auto py-12 px-4">
//       <SectionList />
//     </main>
//   );
// }

// // export default function Home() {
// //   return (
// //      <div>
// //       <Image
// //   src="/image/BANNER-3.jpg"
// //   alt="Hero"
// //   width={800}
// //   height={600}
// // />

//     </div>
//   );

//   //   <div className="font-sans grid ...">
//   //     {/* kode bawaan */}
//   //   </div>
//   // );
// }

// // import Image from 'next/image';

// // import SectionList from '@/app/_components/SectionList';

// // export default function HomePage() {
// //   return (
// //     <main className="max-w-screen-lg mx-auto py-12 px-4">
// //       <SectionList />
// //     </main>
// //   );
// // }

// // export default function Home() {
// //   return (
// //     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
// //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         />
// //         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
// //           <li className="mb-2 tracking-[-.01em]">
// //             Get started by editing{' '}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
// //               app/page.tsx
// //             </code>
// //             .
// //           </li>
// //           <li className="tracking-[-.01em]">
// //             Save and see your changes instantly.
// //           </li>
// //         </ol>

// //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// //           <a
// //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={20}
// //               height={20}
// //             />
// //             Deploy now
// //           </a>
// //           <a
// //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Read our docs
// //           </a>
// //         </div>
// //       </main>
// //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/file.svg"
// //             alt="File icon"
// //             width={16}
// //             height={16}
// //           />
// //           Learn
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/window.svg"
// //             alt="Window icon"
// //             width={16}
// //             height={16}
// //           />
// //           Examples
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/globe.svg"
// //             alt="Globe icon"
// //             width={16}
// //             height={16}
// //           />
// //           Go to nextjs.org →
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }

// 'use client';

// import HeroImage from './_components/HeroImage';
// import SidebarNav from './_components/SideBarNav';
// import HeroSection from './_components/HeroSection';
// import IntroText from './_components/IntroText';
// import DestinationGrid from './_components/DestinationGrid';

// import React from 'react';
// import SectionTitle from './_components/SectionTitle';
// import ProductCard from './_components/ProductCard';
// import SidebarActions from './_components/SidebarActions';
// import { products } from './data/products';

// export default function HomePage() {
//   return (
//     <main className="flex">
//       <SidebarNav />
//       <div className="flex-1">
//         <HeroImage />
//         {/* <HeroSection /> */}
//         <div className="text-center mt-6 text-xl font-bold">
//           你的旅程，不只是回憶——也是靈感的起點！
//         </div>
//         <DestinationGrid />
//       </div>
//     </main>
//   );
// }

// export default function Page() {
//   return (
//     <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
//       <aside className="md:col-span-1">
//         <SidebarActions />
//       </aside>
//       <section className="md:col-span-3">
//         <SectionTitle />
//         <div className="grid gap-4">
//           {products.map((product, index) => (
//             <ProductCard
//               key={product.id}
//               rank={index + 1}
//               title={product.title}
//               description={product.description}
//               image={product.image}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{' '}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
