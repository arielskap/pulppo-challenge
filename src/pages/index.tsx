import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-black">
			<h1 className='font-bold mb-8 text-2xl text-white'>Pulpo Challenge!</h1>
			<nav>
				<ul className='space-y-4'>
					<li>
						<Link href="/excel">
							<a
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Go to Excel
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
  )
}

export default Home
