"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { Hero } from "@/components";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Hero />
		</>
	);
}
