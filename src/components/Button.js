export default function Button({ children, onClick, timeLaps }) {
	return (
		<button
			className={`btn ${timeLaps === children.toLowerCase() ? 'active' : 'btn'}`}
			value={timeLaps}
			onClick={onClick}>
			{children}
		</button>
	)
}
