import { Slider } from "@/components";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function TheTutors({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	return (
		<motion.div
			style={{ scale, rotate }}
			className="w-full min-h-screen bg-eventBgColor sticky top-0 left-0">
			<div className="w-full flex items-center justify-between gap-2 pt-60 px-10">
				<span className="flex text-[200px] uppercase leading-none font-humaneMedium text-white">
					{"events".split("").map((item: string, i: number) => (
						<motion.p
							initial={{ y: "100%" }}
							whileInView={{ y: 0 }}
							transition={{
								delay: i * 0.08,
								duration: 1,
								ease: [0.4, 0, 0.2, 1],
							}}
							viewport={{ once: true }}
							key={i}>
							{item}
						</motion.p>
					))}
				</span>
				<h1 className="text-[18px] font-helveticaNeue leading-[0.9] text-white uppercase">
					Our virtual events feature <br /> the{" "}
					<span className="text-[24px] font-bodoniseventytwo leading-[0.9] lowercase">
						top talent
					</span>
					in the design <br /> & development{" "}
					<span className="text-[24px] font-bodoniseventytwo leading-[0.9] lowercase">
						space.
					</span>
				</h1>
			</div>
			<Slider />
		</motion.div>
	);
}
