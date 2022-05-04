import Image from 'next/image';
export default function QualityOpt() {
	return (
		<>
			<Image
				src={'https://res.cloudinary.com/dqydioa16/image/upload/v1651221513/chqvqwjxsxl7nlhzzpym.jpg'}
				height={500}
				width={800}
				layout={'responsive'}
				sizes={'100vw'}
				alt={'sample file'}
				quality={50}
			/>
		</>
	);
}
