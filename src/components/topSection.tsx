export default function TopSection() {
	return (
		<div className='grid grid-cols-6 gap-10 w-full mb-10'>
			<div className='col-span-6 md:hidden flex justify-center items-center'>
				<img src='Paul-2.jpg' alt='Photo' className='w-full lg:hidden rounded-lg shadow-xl' />
			</div>
			<div className='hidden md:block col-span-2 md:bg-[url("../../public//Paul-2.jpg")] bg-center bg-cover bg-no-repeat rounded-lg shadow-xl'></div>
			<div className='md:col-span-4 col-span-6 md:mr-6'>
				<h2 className='text-2xl md:text-xl font-bold mb-2'>Skill Summary</h2>
				<table className='w-full border-[1px] border-black mr-4 text-xl md:text-xl'>
					<tr className='border-r-[1px] border-black my-6 '>
						<td className='px-4 py-4 w-1/2 align-top font-semibold'>Languages</td>
						<td className='py-4'>
							<p>TypeScript, JavaScript,</p>
							<p>Swift, Java, C#, Python</p>
							<p>c, c++</p>
							<p>RPG-400</p>
						</td>
					</tr>

					<tr className='border-r-[1px] border-black my-6 '>
						<td className='px-4 py-4 w-1/2 align-top font-semibold'>Web Frameworks</td>
						<td className='py-4'>
							<p>NextJS App Router & Page Router</p>
							<p>React / React Native</p>
							<p>Prisma</p>
						</td>
					</tr>

					<tr className='border-r-[1px] border-black my-6 '>
						<td className='px-4 py-4 w-1/2 align-top font-semibold'>Database Technologies</td>
						<td className='py-4'>
							<p>PostgreSQL, MySQL, SQLite</p>
							<p>Postgres, MySQL, SQLite</p>
							<p>Oracle, DB2</p>
						</td>
					</tr>

					<tr className='border-r-[1px] border-black my-6 '>
						<td className='px-4 py-4 w-1/2 align-top font-semibold'>Operating Systems</td>
						<td className='py-4'>
							<p>Linux, Unix, OSx </p>
							<p>Windows Server, Windows, </p>
							<p>iOS, Android</p>
							<p>OS/400</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
