import { useQuery } from '@apollo/react-hooks'
import LoadingIcon from '../components/Loading/LoadingIcon'

// TODO specify props here
const useQ = (props: any, variables?: any) => {
  const response = useQuery(props, variables)
  return {
    ...response,
    LoadingIcon,
  }
}

export default useQ
