import React from 'react'
import { motion } from 'framer-motion'
import { IoCloudOffline } from 'react-icons/io5'

const Banner = () => {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className='banner'>
      <div>
        <IoCloudOffline aria-label='Offline Cloud' />
        <p>You are currently offline. Changes will be synced when you re-connect</p>
      </div>
    </motion.div>
  )
}

export default Banner
