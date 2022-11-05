import Image from "next/image";
import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Hero from "../components/home/hero/Hero";
import Section from "../components/UI/Section";
import Long from "../components/UI/card/Long";
import Big from "../components/UI/banner/Big";
import Tour from "../components/UI/card/Tour";
import TourBig from "../components/UI/card/TourBig";
import Mid from "../components/UI/banner/Mid";
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

interface Tour {
  to: string;
  img: string;
  country: string;
  title: string;
  detail: string;
  rate: string;
}

const adventuresCards: Tour[] = [
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
];

interface Accommodation {
  to: string;
  photo: string;
  altImage: string;
  tag: boolean;
  city: string;
  rate: string;
  description: string;
}

const accommodationsCards: Accommodation[] = [
  {
    to: "/",
    tag: true,
    rate: "4.9",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "3.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
  {
    to: "/",
    tag: true,
    rate: "4.5",
    photo: "/static/img/chabahar-med.jpeg",
    altImage: "/static/img/chabahar-med.jpeg",
    city: "Chabahar",
    description: "From 577€/person - 3 days",
  },
];

const topTour: Tour[] = [
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
  {
    country: "USA",
    detail: "From 577€/person - 3 days",
    title: "2 Nights PACKAGE All Inclusive",
    to: "/",
    img: "/static/img/adven-1.jpeg",
    rate: "5.0",
  },
];

interface Featured {
  to: string;
  attachMarker: boolean;
  img: string;
  imgAlt: string;
  title: string;
  description: string;
}
const featuredCards: Featured[] = [
  {
    attachMarker: true,
    description: "From 577€/person - 3 days",
    img: "/static/img/fer-1.jpeg",
    imgAlt: "/static/img/fer-1.jpeg",
    title: "More than 200 verified stays",
    to: "/",
  },
  {
    attachMarker: true,
    description: "From 577€/person - 3 days",
    img: "/static/img/fer-2.jpeg",
    imgAlt: "/static/img/fer-1.jpeg",
    title: "More than 200 verified stays",
    to: "/",
  },{
    attachMarker: true,
    description: "From 577€/person - 3 days",
    img: "/static/img/fer-3.jpeg",
    imgAlt: "/static/img/fer-1.jpeg",
    title: "More than 200 verified stays",
    to: "/",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <section className="relative">
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
          <Section
            title="Airbnb Plus accommodations"
            comment="A selection of accommodation checked according to quality and design criteria."
          >
            <Big img="/static/banner/banner-1.svg" />
          </Section>
          <Section
            title="Discover Airbnb Adventures"
            comment="Multi-day trips organized by local experts with activities, meals and accommodation included"
          >
            <div className="flex flex-row gap-4 overflow-y-scroll w-full">
              {adventuresCards.map((item, index) => (
                <Tour
                  country={item.country}
                  detail={item.detail}
                  img={item.img}
                  rate={item.rate}
                  title={item.title}
                  to={item.to}
                  key={index}
                />
              ))}
            </div>
          </Section>
          <Section title="Accommodations around the world">
            <div className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-4 overflow-y-scroll">
              {accommodationsCards.map((acc, index) => (
                <TourBig
                  altImage={acc.altImage}
                  city={acc.city}
                  description={acc.description}
                  photo={acc.photo}
                  rate={acc.rate}
                  tag={acc.tag}
                  to={acc.to}
                  key={index}
                />
              ))}
            </div>
          </Section>
          <Section
            title="Highly rated experiences"
            comment="Multi-day trips organized by local experts with activities, meals and accommodation included"
          >
            <div className="flex flex-row gap-4 overflow-y-scroll w-full">
              {topTour.map((item, index) => (
                <Tour
                  country={item.country}
                  detail={item.detail}
                  img={item.img}
                  rate={item.rate}
                  title={item.title}
                  to={item.to}
                  key={index}
                />
              ))}
            </div>
          </Section>
          <Section
            title="Featured Airbnb Destinations More"
            comment="Multi-day trips organized by local experts with activities, meals and accommodation included"
          >
            <div className="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-cols-1 grid-flow-col gap-6 lg:gap-10 overflow-y-scroll">
            {
              featuredCards.map((item,index)=>(
                <Mid attachMarker={item.attachMarker} description={item.description} img={item.img} imgAlt={item.imgAlt} title={item.title} to={item.to} key={index} />
              ))
            }
            </div>
          </Section>
        </div>
      </section>
    </PageLayout>
  );
}
