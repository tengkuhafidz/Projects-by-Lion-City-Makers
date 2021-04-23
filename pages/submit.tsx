export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://docs.google.com/forms/d/e/1FAIpQLScCs9xogXr2rLZ6fx4FcwKnpEY_Q5q2DIG1nspf4zGi4Ghefw/viewform?usp=sf_link`,
			permanent: false,
		},
	}
}
