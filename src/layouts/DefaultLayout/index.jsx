import Nav from 'components/Nav';
import Footer from 'components/Footer';


function DefaultLayout({children, className, style}) {
	return (
		<div className={"w-screen min-h-screen m-0 p-0 flex flex-col items-center " + className} style={style}>
			<Nav />
			<main className="w-2/3 mb-20 p-0 flex-1 flex flex-col items-center">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
