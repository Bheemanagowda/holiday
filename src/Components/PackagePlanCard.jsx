import React from "react";
import { v4 as uuidv4 } from "uuid";
import PackagePlanInnerCard from "./PackagePlanInnerCard";
import { motion } from "framer-motion";
import Link from "next/link";
function PackagePlanCard({ places }) {
  return (
    <div className="grid grid-cols-1 capitalize overflow-hidden md:grid-cols-2 pt-6 gap-3 lg:gap-5 lg:grid-cols-3">
      {places.map((place, index) => (
        <motion.div
          key={uuidv4()}
          initial={{
            opacity: 0,
            translateX: index % 2 === 0 ? -50 : 50,
            translateY: 50,
          }}
          whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        >
       { place.link ? <Link href={place.link}> <PackagePlanInnerCard place={place} /> </Link> : <PackagePlanInnerCard place={place} /> }  
        </motion.div>
      ))}
    </div>
  );
}

export default PackagePlanCard;
