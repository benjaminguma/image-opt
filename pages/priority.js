import Image from 'next/image';
export default function Home() {
	return (
		<>
			{/* IMAGE WITH COLORS */}
			<Image
				src={'https://res.cloudinary.com/dqydioa16/image/upload/v1649381664/deypyvdz4x0yknv4hf5i.jpg'}
				height={500}
				width={800}
				alt={'some sample file 2'}
			/>

			{/* IMAGE WITH LEAVES */}
			<Image
				src={'https://res.cloudinary.com/dqydioa16/image/upload/v1651221513/chqvqwjxsxl7nlhzzpym.jpg'}
				height={500}
				width={800}
				alt={'some sample file'}
				priority
			/>
		</>
	);
}
