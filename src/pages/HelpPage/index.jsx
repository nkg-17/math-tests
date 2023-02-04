import Layout from 'components/Layout';


function HelpPage(props) {
	return (
		<Layout>
			<Layout.Nav  transparent textColor="black" />
			<Layout.Body className="pt-6">
				FAQ
			</Layout.Body>
			<Layout.Footer />
		</Layout>
	);
}

export default HelpPage;