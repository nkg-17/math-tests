import Layout from 'components/Layout';


function HelpPage(props) {
	return (
		<Layout>
			<Layout.Nav showTitle textColor="black" />
			<Layout.ArticleBody>
				FAQ
			</Layout.ArticleBody>
			<Layout.Footer />
		</Layout>
	);
}

export default HelpPage;