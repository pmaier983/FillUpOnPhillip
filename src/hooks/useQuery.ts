import { useQuery } from '@apollo/react-hooks'
import LoadingIcon from '../components/Loading/LoadingIcon'
import ErrorAlert from '../components/ErrorHandling/ErrorAlert'

const useQ = (props: any) => {
  const response = useQuery(props)
  // const { loading, error } = props;
  return {
    ...response,
    LoadingIcon,
    ErrorAlert,
  }
}

export default useQ
