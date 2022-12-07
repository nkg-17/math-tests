import { Form } from 'react-bootstrap';


function SearchBar(props) {
	return (
		<Form.Control placeholder="Поиск" {...props} style={{ width: "18rem" }} />
	);
}

export default SearchBar;