import { useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const updateFilter = (event) => {
    const filter = event.target.value
    dispatch(changeFilter(filter))
  }

  return (
    <div>
      Filter: <input name='filter' onChange={updateFilter} type="text" />
    </div>
  )
}

export default Filter