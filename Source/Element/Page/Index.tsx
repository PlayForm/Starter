const [name] = (await import("solid-js")).createResource(() =>
	fetch("https://swapi.dev/api/people/1")
		.then((result) => result.json())
		.then((data) => data.name),
);

export default () => (
	<>
		<h2>Name:</h2>
		<div>{name()}</div>
	</>
);
