import { Form, InputGroup, /*Button*/ } from 'react-bootstrap';


function SearchBar(props) {
	// useCallback() ?
	function onChange(e) {
		if (props.onChange)
			props.onChange(e.target.value)
	}

	return (
		<InputGroup {...props}>
			{/*<Button variant="secondary"><i className="bi bi-funnel-fill" style={{color: "var(--bs-white)"}}/></Button>*/}
			<Form.Control placeholder="Поиск" onChange={onChange} />
		</InputGroup>
	);
}

export default SearchBar;