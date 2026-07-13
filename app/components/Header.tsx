'use client'
import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"



export const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const headerElement = headerRef.current
        if (!headerElement) return

        const setHeaderHeight = () => {
            const headerHeight = headerElement.getBoundingClientRect().height
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
        }

        setHeaderHeight()

        const resizeObserver = new ResizeObserver(() => {
            setHeaderHeight()
        })

        resizeObserver.observe(headerElement)
        window.addEventListener('resize', setHeaderHeight)

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener('resize', setHeaderHeight)
        }
    }, [])

    return(
        <motion.div 
        ref={headerRef}
        key="header"
        initial={{ opacity: 1, height: '100vh', }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeIn' }}
        className="flex justify-center items-center p-6! w-full text-white font-bold">
            <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl">
                <Image src={'/logo.png'} alt="Logo" width={64} height={64} />
            </motion.div>
        </motion.div>
    )
}