import { useRouter } from "next/router";
import Link from "next/link";
import NProgress from "nprogress";
import { useEffect } from "react";

const HeaderContainer = () => {
  const router = useRouter();
  useEffect(() => {
    const handleProgressBar = () => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleProgressBar);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleProgressBar);
    };
  }, [router.events]);
  return (
    <>
      <header className="bg-crimson-500 h-16">
        <h1 className="text-white text-2xl font-mono flex items-center justify-end h-full">
          <Link href="/">
            <a className="mr-10">PokeRegion</a>
          </Link>
        </h1>
        <nav className="bg-black h-6 grid grid-cols-1 place-items-center">
          <div className="bg-white w-28 h-4.5 rounded-full text-center text-black flex items-center justify-center">
            <Link href="/">
              <a className="text-xs">HOME</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderContainer;
