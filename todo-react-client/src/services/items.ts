import axios from 'lib/axios'
import { Item } from 'store/types'

export const loadItems = async (): Promise<Item[]> => {
  const response = await axios.get('/items/')
  const { results } = response.data
  return results
}
