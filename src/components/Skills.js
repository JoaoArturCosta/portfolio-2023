import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className='flex items-center justify-center rounded-full font-semibold py-3 px-6
         bg-dark text-light shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
				 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
				 xs:text-dark xs:dark:text-light xs:font-bold'
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y, transition: { duration: 0.5 } }}
			viewport={{ once: true }}>
			{name}
		</motion.div>
	)
}

const Skills = () => {
	return (
		<>
			<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
				Skills
			</h2>
			<div
				className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
				  mt-6 lg:bg-circularLightLg lg:dark:bg-circularDarkLg
					md:bg-circularLightMd md:dark:bg-circularDarkMd
					sm:bg-circularLightSm sm:dark:bg-circularDarkSm
					dark:bg-circularDark lg:p-6 md:p-4 xs:text-xs lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
				<Skill name='SASS' x='-10vw' y='-10vh' />
				<Skill name='React' x='10vw' y='10vh' />
				<Skill name='TypeScript' x='10vw' y='-10vh' />
				<Skill name='tRpc' x='25vw' y='0vh' />
				<Skill name='TailwindCSS' x='-15vw' y='-22vh' />
				<Skill name='Angular' x='-10vw' y='20vh' />
				<Skill name='NextJs' x='-25vw' y='0vh' />
				<Skill name='SQL' x='-10vw' y='10vh' />
				<Skill name='MongoDb' x='10vw' y='-20vh' />
			</div>
		</>
	)
}

export default Skills
