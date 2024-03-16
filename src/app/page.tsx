import ResumeButton from '@/components/resumeButton';
import Synopsis from '@/components/synopsis';
import TopSection from '@/components/topSection';

export default function Home() {
	return (
		<div>
			<main className='flex w-[100dvw] flex-col items-center justify-between'>
				<section className='p-4 lg:p-6 w-full flex justify-center items-center bg-black text-white'>
					<h1 className='font-bold text-2xl lg:text-4xl'>Paul Stinchcombe</h1>
				</section>
				{/* <section className='mx-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'> */}
				<section className='mx-4 mt-10 '>
					<TopSection />
					<div className='w-full pr-4 lg:pr-10 text-2xl lg:text-[14pt] text-justify'>
						<Synopsis />
						<ResumeButton />
					</div>
				</section>
			</main>
			<footer className='py-4 bg-black text-white text-center text-sm'>® Copyright 2024, Paul Stinchcombe</footer>
		</div>
	);
}
