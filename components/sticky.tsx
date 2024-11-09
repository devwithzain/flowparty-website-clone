"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Sticky() {
	const cursorSize = 100;
	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		mouse.x.set(clientX - cursorSize / 2.1);
		mouse.y.set(clientY - cursorSize / 3.5);
	};
	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
		};
	});

	return (
		<motion.div
			className="fixed rounded-[50px] z-[100] bg-white p-4 pointer-events-none"
			style={{
				left: smoothMouse.x,
				top: smoothMouse.y,
			}}>
			<div className="flex items-center gap-2 justify-center">
				<BsArrowLeft size={10} />
				<h1 className="text-black text-center uppercase font-helveticaNeue font-medium text-sm">
					Drag
				</h1>
				<BsArrowRight size={10} />
			</div>
		</motion.div>
	);
}
