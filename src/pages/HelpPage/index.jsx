import Layout from 'components/Layout';


function HelpPage(props) {
	const setNavOpaqueEvent = "setNavOpaque";

	return (
		<Layout>
			<Layout.ReactiveNavTarget event={setNavOpaqueEvent} />
			<Layout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />
			<Layout.ArticleBody>
				FAQ
			</Layout.ArticleBody>
			<Layout.Footer />
		</Layout>
	);
}

export default HelpPage;