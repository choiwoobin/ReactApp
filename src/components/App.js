import LeftList from './LeftList'
import LeftChildren from './LeftList/LeftChildren.js'
import { useState,  useEffect} from 'react';

function App() {
    const Data = [
        {title:"상품관리", subTitle:["-팝업공지", "-배너광고관리","-설문지관리"]},
        {title:"부가정보관리", subTitle:["-영업점관리", "-자사(팀)관리"]},
        {title:"용도관리", subTitle:["용도자동분류관리"]},
        {title:"설문지관리", subTitle:["설문지관리"]}

    ]
    const [todo, setTodo] = useState([]);
     useEffect (() => {
        setTodo(Data)
     },[])
     return <LeftList><LeftChildren toData={todo}/></LeftList>

}

export default App