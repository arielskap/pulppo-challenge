import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-black">
			<h1 className='font-bold mb-8 text-2xl text-white'>Pulppo Challenge!</h1>
			<nav>
				<ul className='flex flex-col items-center gap-y-4'>
					<li>
						<Link href="/excel">
							<a
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Go to Excel
							</a>
						</Link>
					</li>
					<li>
						<a className='hover:underline text-white' href="/Ariel Villarreal Developer Challenge.pdf" download>Download Answers</a>
					</li>
				</ul>
			</nav>
		</section>
  )
}

export default Home
