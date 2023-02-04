import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';


function Layout({children, className, style}) {
	return (
		<div className={"w-screen min-h-screen m-0 p-0 flex flex-col items-center " + className} 
		style={style}>
			{children}
		</div>
	);
}

Layout.Nav = Nav;
Layout.Body = Body;
Layout.Footer = Footer;

export default Layout;
