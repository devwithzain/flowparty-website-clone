import { AnimatedText, Eye } from "@/components";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function OnDemand({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
	return (
		<>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="w-full flex flex-col items-center justify-center gap-10 overflow-hidden">
					<AnimatedText
						className="leading-none text-white text-[200px]"
						text="flow party"
					/>
					<div className="flex flex-col gap-2 items-center justify-center overflow-hidden text-center">
						<AnimatedText
							className="text-white leading-[0.85] text-[120px]"
							text="Embark on an exhilarating 4-month journey with expert"
						/>
						<AnimatedText
							className="text-white leading-[0.85] text-[120px]"
							text="tutors, each taking charge of their key discipline and expertise."
						/>
						<AnimatedText
							className="text-white leading-[0.85] text-[120px]"
							text="Through a real-life client example, you’ll discover their secrets"
						/>
						<AnimatedText
							className="text-white leading-[0.85] text-[120px]"
							text="and skills to successfully navigating a web project."
						/>
					</div>
				</div>
			</div>
			<motion.div
				style={{ scale, rotate }}
				className="w-full h-screen bg-heroColor sticky top-0 left-0 overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
					<h1 className="text-[45vw] uppercase leading-none tracking-[-5] font-humaneMedium text-white">
						flow
					</h1>
					<div className="absolute bottom-28 -right-16">
						<div className="relative">
							<motion.img
								animate={{
									rotate: [0, 360],
									transition: {
										duration: 6,
										ease: "linear",
										repeat: Infinity,
									},
								}}
								src={"/circlerotation.svg"}
								alt="right eye"
								width={50}
								height={50}
								className="w-[180px] h-[180px]"
							/>
							<h1 className="text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black">
								party
							</h1>
						</div>
					</div>
				</div>
				<Eye />
				<div className="absolute bottom-5 text-center left-1/2 -translate-x-1/2">
					<h1 className="text-[18px] font-helveticaNeue leading-tight text-white uppercase">
						The Flow Party is a{" "}
						<span className="text-[24px] font-bodoniseventytwo leading-tight lowercase">
							safe
						</span>
						, inclusive, and fun <br /> space for website developers and{" "}
						<span className="text-[24px] font-bodoniseventytwo leading-tight lowercase">
							designers
						</span>
					</h1>
				</div>
				<div className="absolute -top-20 -right-20">
					<motion.img
						src={"/linedraw.svg"}
						alt="right eye"
						width={300}
						height={300}
						className="w-full h-full rotate-[110deg]"
					/>
				</div>
				<div className="absolute bottom-20 -left-20">
					<motion.img
						src={"/linedraw.svg"}
						alt="right eye"
						width={300}
						height={300}
						className="w-full h-full"
					/>
				</div>
			</motion.div>
		</>
	);
}
