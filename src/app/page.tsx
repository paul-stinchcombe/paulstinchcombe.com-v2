export default function Home() {
	return (
		<div>
			<main className='flex w-[100dvw] flex-col items-center justify-between'>
				<section className='p-4 lg:p-6 w-full flex justify-center items-center bg-black text-white'>
					<h1 className='font-bold text-2xl lg:text-4xl'>Paul Stinchcombe</h1>
				</section>
				<section className='mx-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='flex justify-center items-center lg:block lg:mt-14'>
						<img className='w-2/3 lg:w-auto rounded-lg shadow-xl' src='Paul-2.jpg' />
					</div>
					<div className='w-full pr-4 lg:pr-10 text-2xl lg:text-[14pt] text-justify'>
						<h2 className='text-bold text-2xl lg:text-3xl mb-5 text-justify'>About Me</h2>
						<p>
							Born in the United Kingdom in 1963 and started programming at the age of 14. I started my professional career at
							the age of 20 (1983), working for Chemical Bank in Cardiff. In 1986 I moved to London and worked in retail
							(Harrods), and the betting industry (William Hill), before moving to manufacturing in Bristol. After a few years
							I started working in the telecomunications industry, moving back to London working with high-capacity IVR
							systems (Ladbrokes Racing).
						</p>
						<p className='mt-5'>
							In 1994 I moved to Kuala Lumpur (Malaysia) working as a consoltant helping to setup a company specialising in
							IVR and call center solutions.
						</p>
						<p className='mt-5'>
							I moved back to th UK in 1997 to work with Rockwell-Collins (Avionics), but in 1998 had the opportunity to move
							back to Malaysia and start a company specialising in premium-rate IVR systems. In 2001 I moved to Montreal
							(Canada) to work on a new form of AI (utilising genetic algorithms), returning to Malaysia in 2002 on a 2 year
							contract with Advanced BusinessLink as head of R & D. I then worked for several marketing companies as
							technology head until 1997 when I partnered with some like-minded people to start Dragonsoft Research. After a
							buy-out of Dragonsoft in 2019 I started working for Wiseyes Solutions as their Chief Technology Innovations
							Officer.
						</p>
						<p className='mt-5'>
							In July 2022 I joined Manyfold Pte Ltd as CTO. Manyfold is a startup focussed on NFT rental. My responsibilities
							include management of an outsourced project team (based in Vietnam) to deliver our primary web and mobile
							applications. Development and deployment of blockchain smart contracts for the rental application, and
							AMM/Treasury contracts for the tokenomics. I also developed a NFT player application for Android TV as a
							complimentary product, integrating with the rental applications to provide a managed display environment for
							NFTs.
						</p>
						<div className='flex justify-center lg:justify-between'>
							<p></p>
							<button className='my-16 lg:mt-10 py-3 px-8 bg-slate-600 text-white text-3xl lg:text-xl rounded-2xl'>
								<a href='Paul_Stinchcombe-2024.pdf' target='_blank'>
									Checkout my full resume
								</a>
							</button>
						</div>
					</div>
				</section>
			</main>
			<footer className='py-4 bg-black text-white text-center text-sm'>® Copyright 2024, Paul Stinchcombe</footer>
		</div>
	);
}
