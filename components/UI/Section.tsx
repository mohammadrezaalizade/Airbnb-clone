import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

interface Props extends PropsWithChildren {
  title: String;
  comment?: String;
}

const Section: React.FC<Props> = ({ comment, title, children }) => {
  const { scrollY } = useScroll();
  const [currentScroll, setCurrentScroll] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setCurrentScroll(latest);
    });
  }, []);
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.4,
        },
      }}
      className="flex flex-col gap-3 p-4 select-none"
    >
      <div className="flex flex-col gap-1 mb-4">
        <motion.h1
          className="text-[24px] font-medium text-secondary_dark_gray-500"
          initial={{
            x: "-80vw",
          }}
          whileInView={{
            x: 0,
            transition: {
              duration: 0.2,
              delay: 0.5,
              type: "tween",
            },
          }}
        >
          {title}
        </motion.h1>
        {comment && (
          <motion.p
            className="text-[16px] text-secondary_dark_gray-400"
            initial={{
              opacity:0.8
            }}
            whileInView={{
              opacity:1,
              transition:{
                duration:1,
                delay:0.8,
              }
            }}
          >
            {comment}
          </motion.p>
        )}
      </div>
      <div className="flex justify-evenly gap-5 flex-col md:flex-row">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
