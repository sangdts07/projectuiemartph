"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login after 3 seconds
    const timer = setTimeout(() => {
      router.push("/login")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-primary-700 to-primary-900">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            className="mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
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
              className="mb-4"
            >
              <path d="M12 2v1"></path>
              <path d="M12 21v1"></path>
              <path d="M4.93 4.93l.7.7"></path>
              <path d="M18.37 18.37l.7.7"></path>
              <path d="M2 12h1"></path>
              <path d="M21 12h1"></path>
              <path d="M4.93 19.07l.7-.7"></path>
              <path d="M18.37 5.63l.7-.7"></path>
              <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
              <path d="M12 8a2 2 1 0 0 4 0"></path>
              <path d="M12 16a2 2 1 0 1 4 0"></path>
              <path d="M8 12a2 2 0 0 0 0 4"></path>
              <path d="M16 12a2 2 0 0 1 0 4"></path>
              <path d="M8 12a2 2 0 0 1 0-4"></path>
            </svg>
          </motion.div>

          {/* App Name */}
          <motion.h1
            className="text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-primary-100">Ocean</span>
            <span className="text-white">Mart</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-primary-200 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Fresh from the sea to your table
          </motion.p>

          {/* Loading indicator */}
          <motion.div
            className="mt-8 relative w-48 h-1 bg-primary-800 rounded-full overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "12rem", opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary-300"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.7 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
