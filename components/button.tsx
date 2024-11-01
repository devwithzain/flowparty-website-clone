export default function Button({ title }: { title: string }) {
	return (
		<button className="px-4 py-2 border-[2px] outline-none border-white rounded-full text-sm text-white leading-tight tracking-tight uppercase font-medium font-helveticaNeue">
			{title}
		</button>
	);
}
