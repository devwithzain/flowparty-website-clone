import Eye from "./eye";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Event({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	return (
		<motion.div
			style={{ scale, rotate }}
			className="w-full h-screen bg-eventBgColor sticky top-0 left-0 pb-[10vh]">
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
				<h1 className="text-[45vw] uppercase leading-none tracking-[-5] font-humaneMedium text-white">
					event
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
		</motion.div>
	);
}
