"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login after 5 seconds
    const timer = setTimeout(() => {
      router.push("/login")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-primary-700 to-primary-900 overflow-hidden relative">
      {/* Initial flash effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Pulsing background circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary-600/20"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-primary-500/20"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 0.9] }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      />

      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Logo with pulse effect */}
          <motion.div
            className="mb-6 relative"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {/* Pulse effect behind logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary-300/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            />

            {/* Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="124"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a7bf8f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 relative z-10"
            >
              <path d="M21.82 4.73a1 1 0 0 0-1.19-.4A9.94 9.94 0 0 0 15 6.8a10.87 10.87 0 0 0-6.33-1.7A10.87 10.87 0 0 0 2.3 6.94a1 1 0 0 0-.3 1.37c.24.41.58.76 1 1a10 10 0 0 0 1.6.5c.5.12 1 .2 1.5.24l.54.05a15.52 15.52 0 0 0-2.5 4.4c-.5 1.39-1 2.82-1.14 4.28a1 1 0 0 0 .4 1 1.09 1.09 0 0 0 .62.22 1.21 1.21 0 0 0 .4-.08 8.87 8.87 0 0 0 3.72-2.35c.52-.52 1-1.09 1.4-1.67l.48-.65c.39.16.79.29 1.18.4a9.92 9.92 0 0 0 4.26.52 10 10 0 0 0 3.45-1.08 10.86 10.86 0 0 0 3.72-3.2 10 10 0 0 0 1.08-1.94 1 1 0 0 0 .1-.77 1 1 0 0 0-.4-.51 10.87 10.87 0 0 0-4.18-2.3 15.58 15.58 0 0 0 2-1.43 10 10 0 0 0 1.45-1.5 1 1 0 0 0 .21-1.1z"></path>
              <path d="M8 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </svg>
          </motion.div>

          {/* App Name with flash effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {/* Flash effect on text */}
            <motion.div
              className="absolute inset-0 bg-white mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />

            <h1 className="text-5xl font-bold text-white mb-2">
              <span className="text-primary-100">Ocean</span>
              <span className="text-white">Mart</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-primary-200 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Fresh from the sea to your table
          </motion.p>

          {/* Loading indicator */}
          <motion.div
            className="mt-8 relative w-48 h-1 bg-primary-800 rounded-full overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "12rem", opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary-300"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                delay: 1.7,
                duration: 3,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="text-primary-200 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              delay: 2,
              duration: 3,
              times: [0, 0.1, 0.9, 1],
              ease: "easeInOut",
            }}
          >
            Preparing fresh catches...
          </motion.p>
        </motion.div>
      </div>

      {/* Final flash transition before redirect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 1] }}
        transition={{
          duration: 0.8,
          delay: 4.2,
          times: [0, 0.7, 0.8, 1],
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
