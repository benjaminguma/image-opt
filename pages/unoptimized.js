import Image from 'next/image';

export default function Home() {
	return (
		<Image
			src={'https://res.cloudinary.com/dqydioa16/image/upload/v1651221513/chqvqwjxsxl7nlhzzpym.jpg'}
			height={500}
			width={800}
			alt={'some sample file'}
			unoptimized={true}
			layout='intrinsic'
		/>
	);
}
