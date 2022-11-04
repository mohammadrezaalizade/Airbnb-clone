import Image from "next/image";
import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import {Bars3Icon} from "@heroicons/react/24/outline"
import Hero from "../components/home/hero/Hero";
interface NavLink{
  title:String;
  link:String;
}


const navLinks:NavLink[] = [
  {
    title:"Become a host",
    link:"/user/host"
  },
  {
    title:"Login",
    link:"/auth/login"
  },
  {
    title:"Home",
    link:"/"
  },
]


export default function Home() {
  return (
    <PageLayout>
      <section className=" relative">
        {/* HEADER */}
        <header className="px-2 py-4 flex justify-between items-center fixed z-50 w-full translate-x-0">
          <Link href="/">
            <Image src="/assets/logo/logo-small.svg" alt="Logo" width={35} height={35}/>
          </Link>
          <div className="hidden md:flex gap-3">
            {
              navLinks.map((item,index)=>(
                <Link className="text-secondary_white hover:text-primary_red-500 transition duration-150 text-sm" href={item.link as string} key={index}>
                  {item.title}
                </Link>
              ))
            }
          </div>
          {/* MENU BTN FOR MOBILE SIZE */}
          <Bars3Icon className="h-6 w-6 cursor-pointer md:hidden hover:text-primary_red-500"/>
        </header>
        <div className="w-full h-full">
          <Hero/>
        </div>
      </section>
    </PageLayout>
  )
}
