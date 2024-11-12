"use client";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { Event, Hero, WhoWeAre } from "@/components";

export default function App() {
	const container = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	return (
		<>
			<div
				ref={container}
				className="relative">
				<Hero scrollYProgress={scrollYProgress} />
				<Event scrollYProgress={scrollYProgress} />
			</div>
			<WhoWeAre />
		</>
	);
}
