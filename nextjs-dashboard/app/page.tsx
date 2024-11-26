import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/font';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 顶部蓝色横幅和 Logo */}
      <div className="h-20 bg-blue-500 md:h-32">
        <div className="container mx-auto flex items-center justify-start p-4">
          <AcmeLogo />
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="container mx-auto mt-8 flex flex-col gap-4 p-6 md:flex-row md:p-0">
        {/* 左侧文本部分 */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* 右侧图片部分 */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            // tailwind 響應式
            alt="Screenshots of the dashboard project showing desktop version"
          />
           <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
