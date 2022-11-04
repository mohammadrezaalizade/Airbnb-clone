import Image from "next/image";
import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Hero from "../components/home/hero/Hero";
import Section from "../components/UI/Section";
import Long from "../components/UI/card/Long";
import Big from "../components/UI/banner/Big";
interface NavLink {
  title: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    title: "Become a host",
    link: "/user/host",
  },
  {
    title: "Login",
    link: "/auth/login",
  },
  {
    title: "Home",
    link: "/",
  },
];

interface ExploreAirbnb {
  src: string;
  title: string;
  to: string;
}

const exploreAirbnbs: ExploreAirbnb[] = [
  {
    src: "/static/img/1-small.jpeg",
    title: "Housing",
    to: "/category/housing",
  },
  {
    src: "/static/img/2-small.jpeg",
    title: "Experiences",
    to: "/category/experiences",
  },
  {
    src: "/static/img/3-small.jpeg",
    title: "Adventures",
    to: "/category/adventures",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <section className=" relative">
        {/* HEADER */}
        <header className="px-2 py-4 flex justify-between items-center fixed z-50 w-full translate-x-0">
          <Link href="/">
            <Image
              src="/assets/logo/logo-small.svg"
              alt="Logo"
              width={35}
              height={35}
            />
          </Link>
          <div className="hidden md:flex gap-3">
            {navLinks.map((item, index) => (
              <Link
                className="text-secondary_white hover:text-primary_red-500 transition duration-150 text-sm"
                href={item.link as string}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* MENU BTN FOR MOBILE SIZE */}
          <Bars3Icon className="h-6 w-6 cursor-pointer md:hidden text-secondary_white hover:text-primary_red-500" />
        </header>
        <div className="w-full h-full">
          <Hero />
          <Section title="Explore Airbnb">
            {exploreAirbnbs.map((item, index) => (
              <Long
                src={item.src}
                title={item.title}
                to={item.to}
                key={index}
              />
            ))}
          </Section>
          {/* <Section
            title="Airbnb Plus accommodations"
            comment="A selection of accommodation checked according to quality and design criteria."
          >
            <Big/>
          </Section> */}
          <Section
            title="Airbnb Plus accommodations"
            comment="A selection of accommodation checked according to quality and design criteria."
          >
            <Big img="/static/banner/banner-1.svg" />
          </Section>
        </div>
      </section>
    </PageLayout>
  );
}
