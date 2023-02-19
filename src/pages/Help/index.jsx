import { ArticleLayout } from 'components/layouts';


function HelpPage(props) {
	const setNavOpaqueEvent = "setNavOpaque";

	return (
		<ArticleLayout>
			<ArticleLayout.ReactiveNavTarget event={setNavOpaqueEvent} />
			<ArticleLayout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />
			<ArticleLayout.Body>
				FAQ
			</ArticleLayout.Body>
			<ArticleLayout.Footer />
		</ArticleLayout>
	);
}

export default HelpPage;