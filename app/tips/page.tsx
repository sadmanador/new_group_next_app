
const Local = () => {
  return (
		<div className="flex justify-center items-center my-10">
			<div className="flex flex-col gap-4">
				<p className="text-3xl">Steps to follow</p>
				<p>1: রিপোটা ক্লোন করেন </p>
				<code className="bg-gray-200 p-4 rounded">
					git clone https://github.com/sadmanador/new_group_next_app
        </code>
        
				<p>
					2: নিজের ব্রাঞ্চ বানায়ে তাতে যান নইলে আগের ব্রাঞ্চে যান (-b
					বাদ সেক্ষেত্রে){" "}
				</p>
				<code className="bg-gray-200 p-4 rounded">
					git checkout -b morshed*
				</code>

				<p>3: ইচ্ছামতো কোড করতে থাকেন, তাপ্পর এ্যাড, কমিট, পুশ </p>
				<code className="bg-gray-200 p-4 rounded">
					git add * <br />
					git commit -m "ম্যালা কাজ কসসি" <br />
					git push origin morshed*
				</code>

				<p>4: আপডেটেড কোড নেয়ার জন্য মেইনে গিয়া টান মারেন </p>
				<code className="bg-gray-200 p-4 rounded">
					git checkout main <br />
					git pull
				</code>

				<p>তাপ্পর আবার সাথে সাথে নিজের ব্রাঞ্চে যাইতে ভুইল্লেন্না - মোদ্দাকথা মেইনে থাকা যাবে না</p>
			</div>
		</div>
  );
};

export default Local;