export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://docs.google.com/forms/d/e/1FAIpQLSest-6iDMSQ4_LWTZO0XtdqbODv7gcwfQR5R6KUsgtftEiVxw/viewform?usp=sf_link`,
			permanent: false,
		},
	}
}
