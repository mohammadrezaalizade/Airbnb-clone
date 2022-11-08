import Input from "../../UI/Input";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  const [where, setWhere] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [passenger, setPassenger] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (
      where.length >= 1 &&
      where &&
      arrival.length >= 1 &&
      arrival &&
      departure.length >= 1 &&
      departure &&
      passenger.length >= 1 &&
      passenger
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [where, arrival, departure, passenger]);

  return (
    <div className="relative flex justify-center md:justify-start items-center p-9 h-[98vh] md:h-[80vh] w-screen">
      <motion.form
        className="w-[50%] h-[50%] md:w-[70%] md:h-[70%] max-h-[100%] md:max-h-[500px] bg-white rounded-md p-4 min-w-[100%] md:min-w-[30vw] md:max-w-[500px] flex flex-col gap-2 overflow-hidden z-50"
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
          transition: {
            delay: 1.1,
            duration: 0.5,
            type: "tween",
          },
        }}
      >
        {/* HEADER */}
        <motion.p
          className="text-sm md:text-xl text-secondary_dark_gray-500 select-none"
          initial={{
            y: "-100px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.5,
            },
          }}
        >
          Book unique accommodations and activities.
        </motion.p>
        {/* FORM */}
        <motion.div
          initial={{
            x: "150vw",
          }}
          animate={{
            x:0,
            transition:{
              delay: 1.4,
              duration: 0.8,
            }
          }}
          className="flex flex-1 flex-col gap-3"
        >
          <Input
            type="text"
            label="Where"
            name="where"
            placeholder="Where"
            onChange={setWhere}
            value={where}
          />
          <div className="flex flex-col md:flex-row gap-1">
            <Input
              type="date"
              label="Arrival"
              name="arrival"
              placeholder="Arrival"
              onChange={setArrival}
              value={arrival}
            />
            <Input
              type="date"
              label="Departure"
              name="departure"
              placeholder="Departure"
              onChange={setDeparture}
              value={departure}
            />
          </div>
          <Input
            label="Passenger"
            type="number"
            name="passenger"
            placeholder="Passenger"
            onChange={setPassenger}
            value={passenger}
          />
        </motion.div>
        {/* SUBMIT BTN */}
        <button
          className="bg-primary_red-500 rounded-lg cursor-pointer p-2 text-secondary_white text-lg disabled:bg-primary_red-200 disabled:cursor-not-allowed"
          disabled={isDisabled}
        >
          Submit
        </button>
      </motion.form>
      <Image className="w-screen object-cover" fill={true} src="/assets/image/hero-bg.svg" alt="Background image landing page" blurDataURL="/assets/image/hero-bg.svg" />
    </div>
  );
};

export default Hero;
