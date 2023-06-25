import Image from 'next/image';
import React from 'react';

const SafayetCard = () => {
	return (
		<div className="group hover:cursor-pointer">
			<div className="overflow-hidden">
				<Image
					src="/demoCard.jpg"
					width={500}
					height={500}
					alt="Picture of the author"
					className="group-hover:scale-110 transition duration-500"
				/>
			</div>

			<div className="flex items-center w-full gap-4 p-4 border border-gray-600 border-t-0">
				<Image
					src="/demoCard.jpg"
					width={50}
					height={50}
					alt="Picture of the author"
					className="rounded-full h-16 w-16 object-cover"
				/>
				<div>
					<h6>Cards 2.0 - UI Kit</h6>
					<p>Sheldon Cooper</p>
				</div>
				<div className="ml-auto">
					<p>1.2k</p>
				</div>
			</div>
		</div>
	);
};

export default SafayetCard;
