import { Container, Stack } from 'react-bootstrap';


function Footer(props) {
	return (
		<Container fluid className="bottom-0 p-5 bg-dark d-flex flex-row justify-content-center">
			<Stack direction="horizontal" gap={3}>
				<a 
				href={import.meta.env.VITE_URL_REPO} 
				target="_blank" 
				className="m-0 link-light text-decoration-none">
					Проект на GitHub <i className="bi bi-github" />
				</a>
				<div className="border-start border-secondary h-100"></div>
				<a 
				href={import.meta.env.VITE_URL_CREATOR} 
				target="_blank" 
				className="m-0 link-light text-decoration-none">
					Сообщить об ошибке <i className="bi bi-telegram" />
				</a>
			</Stack>
		</Container>
	);
}

export default Footer;
