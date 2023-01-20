import Header from 'components/Header';
import Footer from 'components/Footer';


function DefaultLayout(props) {
	return (
		<div className="vw-100">
			<Header />
			<main className="px-5 pt-5 pb-5">
				{props.children}
			</main>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
