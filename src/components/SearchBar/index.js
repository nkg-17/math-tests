import { Form } from 'react-bootstrap';


function SearchBar(props) {
	// useCallback() ?
	function onChange(e) {
		if (props.onChange)
			props.onChange(e.target.value)
	}

	return (
		<Form.Control placeholder="Поиск" onChange={onChange} style={{ width: "18rem" }} />
	);
}

export default SearchBar;