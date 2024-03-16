import Footer from '@/components/footer';
import Header from '@/components/header';
import ResumeButton from '@/components/resumeButton';
import Synopsis from '@/components/synopsis';
import TopSection from '@/components/topSection';

export default function Home() {
	return (
		<div>
			<main className='flex w-[100dvw] flex-col items-center justify-between'>
				<Header />
				<section className='mx-4 mt-10 '>
					<TopSection />
					<div className='w-full pr-4 md:pr-10 text-2xl md:text-[14pt] text-justify'>
						<Synopsis />
						<ResumeButton />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
