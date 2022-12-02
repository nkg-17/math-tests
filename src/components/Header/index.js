import './Header.css';


function Header(props) {
	return (
		<div className="px-2 py-3 border h-fit text-center flex flex-row justify-between">
			<div>Header</div>
			<div>Settings</div>
		</div>
	);
}

export default Header;