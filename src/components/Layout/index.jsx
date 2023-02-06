import Nav from './Nav';
import ArticleBody from './ArticleBody';
import FullscreenBody from './FullscreenBody';
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
Layout.ArticleBody = ArticleBody;
Layout.FullscreenBody = FullscreenBody;
Layout.Footer = Footer;

export default Layout;
