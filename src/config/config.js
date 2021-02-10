const prod = {
    API_BASE_URL:"prod"
}

const dev = {
    API_BASE_URL:"dev"
}

const environment = process.env.REACT_APP_STAGE === 'production' ? prod : dev

const config = {...environment}
export default config