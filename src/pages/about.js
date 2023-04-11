import AnimatedText from '@/components/AnimatedText'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'
import {
	motionValue,
	useInView,
	useMotionValue,
	useSpring,
} from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/PhotofromJoaoCosta.png'

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null)

	const motionValue = useMotionValue(0)
	const springValue = useSpring(motionValue, { duration: 3000 })

	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			motionValue.set(value)
		}
	}, [isInView, value, motionValue])

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0)
			}
		})
	}, [springValue, value])

	return <span ref={ref}></span>
}

const about = () => {
	return (
		<>
			<Head>
				<title>João Costa | About Page</title>
				<meta name='description' content='João Costa Portfolio About' />
			</Head>
			<TransitionEffect />
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						text='/about.'
						className='mb-16 !text-4xl text-dark/75 sm:mb-8'
					/>
					<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
						<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
								About me
							</h2>
							<p className='font-medium mb-2'>
								Hi, my name is João Costa, a web developer and UI/UX designer
								with a passion for creating beautiful, functional, and
								user-centered digital experiences. With 6 + years of experience
								in the field.
							</p>
							<p className='font-medium mb-2'>
								I&apos;ve built products for companies and businesses around the
								globe ranging from marketing websites to complex solutions and
								enterprise apps with focus on fast, elegant and accessible user
								experiences.
							</p>
							{/* <p className='font-medium'>
								In building JavaScript applications, I&apos;m equipped with just
								the right tools, and can absolutely function independently of
								them to deliver fast, resilient solutions optimized for scale —
								performance and scalabilty are priorities on my radar.
							</p> */}
						</div>
						<div
							className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
						 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark dark:bg-light' />
							<Image
								src={profilePic}
								alt='João Costa'
								className='w-full h-auto rounded-2xl'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
						<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-col xl:items-center md:order-3 md:flex-col'>
							<div className='flex flex-col items-end justify-center mb-4 '>
								<span className='inline-block text-3xl font-bold mb-1'>
									Design
								</span>
								<p className=' text-sm  text-dark/75 dark:text-light/75 text-end'>
									I&apos;m probably not the typical designer positioned behind
									an Illustrator artboard adjusting pixels, but I design.
									Immersed in stylesheets tweaking font sizes and contemplating
									layouts is where you&apos;ll find me (~_^). I&apos;m committed
									to creating fluent user experiences while staying fashionable.
								</p>
							</div>
							<div className='flex flex-col items-end justify-center mb-3'>
								<span className='inline-block text-3xl font-bold mb-1'>
									Engineering
								</span>
								<p className=' text-sm  text-dark/75 dark:text-light/75 text-end'>
									In building JavaScript applications, I&apos;m equipped with
									just the right tools, and can absolutely function
									independently of them to deliver fast, resilient solutions
									optimized for scale — performance and scalabilty are
									priorities on my radar.
								</p>
							</div>
							{/* <div className='flex flex-col items-end justify-center'>
								<span className='inline-block text-3xl font-bold'>
									<AnimatedNumbers value={6} />+d
								</span>
								<p className=' font-sm  text-dark/75'>years of Experience</p>
							</div> */}
						</div>
					</div>
					<Skills />
					<Experience />
				</Layout>
			</main>
		</>
	)
}

export default about
