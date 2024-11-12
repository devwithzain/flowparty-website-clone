"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { emoji1, emoji2, emoji3, flowCurveText, whoweareline } from "@/public";

export default function WhoWeAre() {
	const container1Ref = useRef(null);
	const container2Ref = useRef(null);
	const container3Ref = useRef(null);
	const container4Ref = useRef(null);
	const container5Ref = useRef(null);
	const container6Ref = useRef(null);

	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: container1Ref,
		offset: ["start end", "end start"],
	});

	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: container2Ref,
		offset: ["start end", "end start"],
	});
	const { scrollYProgress: scrollYProgress3 } = useScroll({
		target: container3Ref,
		offset: ["start end", "end start"],
	});
	const { scrollYProgress: scrollYProgress4 } = useScroll({
		target: container4Ref,
		offset: ["start end", "end start"],
	});
	const { scrollYProgress: scrollYProgress5 } = useScroll({
		target: container5Ref,
		offset: ["start end", "end start"],
	});
	const { scrollYProgress: scrollYProgress6 } = useScroll({
		target: container6Ref,
		offset: ["start end", "end start"],
	});
	const cq = useTransform(scrollYProgress1, [0, 1], [0, 200]);
	const crq = useTransform(scrollYProgress1, [0, 1], [0, 40]);
	const mq = useTransform(scrollYProgress2, [0, 1], [0, -200]);
	const mrq = useTransform(scrollYProgress2, [0, 1], [0, 40]);

	const textLeft1 = useTransform(scrollYProgress3, [0, 1], [0, 40]);
	const textRight2 = useTransform(scrollYProgress4, [0, 1], [0, -40]);
	const textLeft3 = useTransform(scrollYProgress5, [0, 1], [0, 40]);
	const textRight4 = useTransform(scrollYProgress6, [0, 1], [0, -40]);
	return (
		<>
			<div className="w-full h-screen bg-greenColor">
				<div className="w-full flex items-center justify-between gap-5 p-10 h-full">
					<div className="w-1/2 flex flex-col justify-between gap-5 relative h-full">
						<div className="flex flex-col overflow-hidden">
							<span className="flex text-[250px] uppercase leading-[0.8] font-humaneMedium text-[#1c1c1c]">
								{"What is the".split("").map((item: string, i: number) => (
									<motion.p
										initial={{ y: "100%" }}
										whileInView={{ y: 0 }}
										transition={{
											delay: i * 0.05,
											duration: 0.5,
											ease: [0.4, 0, 0.2, 1],
											type: "tween",
										}}
										viewport={{ once: true }}
										key={i}>
										{item}
									</motion.p>
								))}
							</span>
							<span className="flex text-[250px] uppercase leading-[0.8] font-humaneMedium text-[#1c1c1c]">
								{"Flow party".split("").map((item: string, i: number) => (
									<motion.p
										initial={{ y: "100%" }}
										whileInView={{ y: 0 }}
										transition={{
											delay: i * 0.06,
											duration: 0.8,
											ease: [0.4, 0, 0.2, 1],
											type: "tween",
										}}
										viewport={{ once: true }}
										key={i}>
										{item}
									</motion.p>
								))}
							</span>
						</div>
						<div className="absolute top-1/2 -left-1/4 -translate-y-1/2">
							<Image
								src={whoweareline}
								alt="whoweareimg"
								width={300}
								height={300}
							/>
						</div>
						<div className="w-full flex justify-end items-end">
							<motion.p className="w-1/2 leading-tight text-lg uppercase font-helveticaNeue text-[#1c1c1c]">
								The Flow Party is a safe, inclusive, and fun space for website
								developers and designers. We are an upbeat community, not for
								the faint of heart. We work hard but always in a Party Mood.
								Whether we&apos;re coding up a storm or taking a break to chat
								and share ideas, we always have a good time.
							</motion.p>
						</div>
					</div>
					<div
						ref={container1Ref}
						className="w-1/2 relative h-full flex justify-end items-end">
						<Image
							src={flowCurveText}
							alt="flowCurveTextImg"
							width={700}
							height={700}
						/>
						<motion.div
							className="absolute top-0 right-12"
							style={{ y: cq, rotate: crq }}>
							<Image
								src={emoji1}
								alt="flowCurveTextImg"
								width={300}
								height={300}
							/>
						</motion.div>
						<div className="absolute -bottom-12 left-28">
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
									width={250}
									height={250}
									className="w-[250px] h-[250px]"
								/>
								<h1 className="text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black">
									party
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-screen bg-greenColor py-20">
				<div className="w-full flex h-full relative">
					<div
						ref={container2Ref}
						className="w-1/4 flex flex-col justify-between gap-5 relative h-full">
						<motion.div
							className="flex flex-col"
							style={{ y: mq, rotate: mrq }}>
							<Image
								src={emoji3}
								alt="emoji3img"
								width={300}
								height={300}
							/>
						</motion.div>
					</div>
					<div className="w-1/2 h-full flex justify-center items-center relative z-50">
						<div className="flex flex-col gap-5">
							<motion.p className="text-center leading-tight tracking-tight text-[18px] uppercase font-medium font-bodoniseventytwo text-[#1c1c1c] flex items-center justify-center gap-3 flex-col">
								WHO WE ARE
							</motion.p>
							<div className="w-full flex flex-col items-center justify-center">
								<span
									className="flex text-[220px] uppercase leading-[0.8] font-humaneMedium text-[#1c1c1c]"
									ref={container3Ref}>
									{"A Witty, and Upbeat place"
										.split("")
										.map((item: string, i: number) => (
											<motion.p
												style={{ x: textLeft1 }}
												initial={{ y: "100%" }}
												className="text-center"
												whileInView={{ y: 0 }}
												transition={{
													delay: i * 0.06,
													duration: 0.6,
													ease: [0.4, 0, 0.2, 1],
												}}
												viewport={{ once: true }}
												key={i}>
												{item}
											</motion.p>
										))}
								</span>
								<span
									className="flex text-[220px] uppercase leading-[0.8] font-humaneMedium text-[#1c1c1c]"
									ref={container4Ref}>
									{"for Webflow Developers"
										.split("")
										.map((item: string, i: number) => (
											<motion.p
												style={{ x: textRight2 }}
												initial={{ y: "100%" }}
												className="text-center"
												whileInView={{ y: 0 }}
												transition={{
													delay: i * 0.07,
													duration: 0.7,
													ease: [0.4, 0, 0.2, 1],
												}}
												viewport={{ once: true }}
												key={i}>
												{item}
											</motion.p>
										))}
								</span>
								<span
									className="flex text-[220px] uppercase leading-[0.8] font-humaneMedium text-[#1c1c1c]"
									ref={container5Ref}>
									{"to learn, share knowledge"
										.split("")
										.map((item: string, i: number) => (
											<motion.p
												style={{ x: textLeft3 }}
												initial={{ y: "100%" }}
												className="text-center"
												whileInView={{ y: 0 }}
												transition={{
													delay: i * 0.08,
													duration: 0.8,
													ease: [0.4, 0, 0.2, 1],
												}}
												viewport={{ once: true }}
												key={i}>
												{item}
											</motion.p>
										))}
								</span>
								<span
									className="flex text-[220px] uppercase leading-[0.8] font-humaneMedium text-[#1c1c1c]"
									ref={container6Ref}>
									{"and network".split("").map((item: string, i: number) => (
										<motion.p
											style={{ x: textRight4 }}
											initial={{ y: "100%" }}
											whileInView={{ y: 0 }}
											className="text-center"
											transition={{
												delay: i * 0.09,
												duration: 0.9,
												ease: [0.4, 0, 0.2, 1],
											}}
											viewport={{ once: true }}
											key={i}>
											{item}
										</motion.p>
									))}
								</span>
							</div>
						</div>
						<motion.div
							className="absolute -bottom-40 -right-10 overflow-hidden"
							style={{ y: mq, rotate: mrq }}>
							<Image
								src={emoji2}
								alt="emoji2img"
								width={300}
								height={300}
							/>
						</motion.div>
					</div>
					<div className="w-1/4 h-full">
						<Image
							src={whoweareline}
							alt="whoweareimg"
							width={400}
							height={400}
							className="absolute top-1/2 -right-20 -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
