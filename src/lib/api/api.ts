import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error types
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response

      switch (status) {
        case 400:
          throw new Error(data.message || 'Bad request')
        case 401:
          throw new Error('Unauthorized - please log in')
        case 403:
          throw new Error("Forbidden - you don't have permission")
        case 404:
          throw new Error('Resource not found')
        case 500:
          throw new Error('Server error - please try again later')
        default:
          throw new Error(data.message || 'An error occurred')
      }
    } else if (error.request) {
      // Request made but no response
      throw new Error('Network error - please check your connection')
    } else {
      // Something else happened
      throw new Error(error.message || 'An unexpected error occurred')
    }
  }
)

export default apiClient
