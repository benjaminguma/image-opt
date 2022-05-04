import Image from 'next/image';
export default function WithCloudinary() {
	/** UNCOMMENT THE `loader` and `path` settings in the next.config.js file for this to work **/
	return (
		<>
			{/* IMAGE WITH LEAVES */}
			<Image
				src={'/chqvqwjxsxl7nlhzzpym.avif'}
				height={500}
				width={800}
				alt={'some sample file'}
				quality={'auto'}
			/>
		</>
	);
}
