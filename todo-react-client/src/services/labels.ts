import axios from 'lib/axios'
import { Label } from 'store/types'

export const loadLabels = async (): Promise<Label[]> => {
  const response = await axios.get('/labels/')
  const { results } = response.data
  return results
}
