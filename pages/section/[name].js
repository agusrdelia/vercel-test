export default function Page({name}) {
	return <>
		<p>Seccion: {name}</p>
	</>
}
export async function getServerSideProps( { query } ) {
	const { name } = query;
	console.log(query)
	return {
		props: {
			name
		},
	}
}