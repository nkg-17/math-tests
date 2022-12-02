import Header from '../components/Header';
import SideMenu from '../components/SideMenu';


function DefaultLayout(props) {
	return (
		<div className="flex flex-row">
			<SideMenu />
			<div className="text-center w-full h-fit">
				<div className="flex flex-col">
					<Header />
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;