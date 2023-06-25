import { NextPage } from 'next';
import Link from 'next/link';
import SafayetCard from './SafayetCard';

const SafayetPage: NextPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
			<div className="text-center space-y-4">
				<h2 className="text-5xl font-extrabold">
					Discover <span className="text-sky-500">Cards</span> websites built by
					the Webflow community
				</h2>
				<h6 className="text-lg">
					Browse, clone, and customize the latest websites.{' '}
					<Link href="/" className="text-sky-500 hover:underline transition">
						Looking for premium templates?
					</Link>
				</h6>
			</div>

			<div className="w-full max-w-sm mt-8">
				<input
					type="text"
					placeholder="Search"
					className="w-full py-2 px-3 rounded-lg ring-2 ring-sky-300 text-gray-900"
				/>
			</div>

			<div className="flex items-center mt-8 gap-2">
				<button className="py-2 px-4 bg-gray-100 text-gray-900 rounded transition border hover:border-sky-500 ring ring-sky-600">
					All
				</button>
				<button className="py-2 px-4 bg-gray-100 text-gray-900 rounded transition border hover:border-sky-500">
					CMS
				</button>
				<button className="py-2 px-4 bg-gray-100 text-gray-900 rounded transition border hover:border-sky-500">
					Ecommerce
				</button>
				<button className="py-2 px-4 bg-gray-100 text-gray-900 rounded transition border hover:border-sky-500">
					Portfolio
				</button>
			</div>

			<div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Card */}
				<SafayetCard />
				<SafayetCard />
				<SafayetCard />
				<SafayetCard />
				<SafayetCard />
				<SafayetCard />
			</div>
		</div>
	);
};

export default SafayetPage;
