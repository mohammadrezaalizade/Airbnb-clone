import Input from "../../UI/Input";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="relative flex items-center justify-between p-9 md:pl-12 pt-20 md:pt-0 w-full h-[100%] min-h-[80vh] md:h-[100%] lg:h-[80vh] bg-hero-bg bg-cover bg-left ">
      <motion.form
        className="w-[50%] h-[100%] max-h-[100%] md:max-h-[500px] bg-white rounded-md p-4 min-w-[100%] md:min-w-[30vw] md:max-w-[500px] flex flex-col gap-4 overflow-hidden"
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
          className="text-xl text-secondary_dark_gray-500 select-none"
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
          className="flex flex-1 flex-col gap-6"
        >
          <Input
            type="text"
            label="Where"
            name="where"
            placeholder="Where"
            onChange={setWhere}
            value={where}
          />
          <div className="flex flex-col md:flex-row gap-2">
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
          className="bg-primary_red-500 rounded-lg cursor-pointer p-4 text-secondary_white text-lg disabled:bg-primary_red-200 disabled:cursor-not-allowed"
          disabled={isDisabled}
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};

export default Hero;
