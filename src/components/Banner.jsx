import { motion } from "framer-motion";
import { IoCloudOfflineOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <motion.div class="banner" initial={{ y: -100 }} animate={{ y: 100 }}>
      <div>
        <IoCloudOfflineOutline aria-label="Offline Cloud" />
        <p>
          You are currently offline. Changes will be synced when you re-connect
        </p>
      </div>
    </motion.div>
  );
};

export default Banner;
