import { useSelector } from 'react-redux'
import { addNumber, minusNumber } from './redux/modules/counter'
import { useDispatch } from 'react-redux'

function App() {
  const number = useSelector((state) => state.counter.number)
  const dispatch = useDispatch()
  const onPlusButtonClickHandler = () => {
    dispatch(addNumber(1))
  }
  const onMinusButtonClickHandler = () => {
    dispatch(minusNumber(1))
  }
  return (
    <div>
      {number}
      <br />
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
    </div>
  )
}

export default App

{
  /* <button onClick={minusButtonClickHandler()}>-1</button>
이렇게 하면 함수 할당이 아닌 호출을 해버려서 원하는 값이 안나온다 만약 괄호를 넣어야 하는 상황이 생기면 무조건
()=>minusButtonClickHandler() 이렇게 호살표 함수로 감싸줘여 한다 */
}
