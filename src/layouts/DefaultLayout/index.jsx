import Nav from 'components/Nav';
import Footer from 'components/Footer';


function DefaultLayout(props) {
	return (
		<div className={"w-screen min-h-screen bg-white m-0 p-0 flex flex-col items-center " + props.className}>
			<Nav />
			<main className="w-2/3 mb-20 p-0 flex-1 flex flex-col items-center">
				{props.children}
			</main>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
