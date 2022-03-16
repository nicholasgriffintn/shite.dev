import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

type Props = { session: any };

export const getServerSideProps: GetServerSideProps<Props> = async ({
	req,
}) => {
	const session = await getSession({ req });

	return {
		props: {
			session,
		},
	};
};

export default function Page({ session }: Props) {
	return (
		<section>
			{console.log("The user's session:", session)}
			<div className="bg-gray-900">
				<div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
					<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
						<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
							This is a <span className="text-grey-100">Shite</span> site
						</h1>
						<p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
							I don&apos;t know what to do with this yet...
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
