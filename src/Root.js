kimport React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import axios from 'axios';

function Root() {
  const [counter, setNumber] = useState(0);
  const [bizno, setBizno] = useState(0);
  const [biznm, setBiznm] = useState(0);

  const countUp = () => {
    setNumber(counter + 1);
  }

  const countDown = () => {
    setNumber(counter - 1);
  }
  
  const apiCall = () => {
    // npm i axios | yarn add axios
    axios.post("http://localhost:3001/api/customers/select",
        {withCredentials: true, 
          data:{ 
                 use_intt_id: 'UTLZ_1710201302846'
                }     
        })
        .then((res) => {
          setBizno(res.data.rows[0].biz_no); 
          setBiznm(res.data.rows[0].use_intt_nm);
        }).catch((err) => {
            console.log(err);
       })    
  }

  return (
    <div>
      <Header title={`사업자번호 : ${bizno}`}/>
      <Header title={`사업자명 : ${biznm}`}/>
      <Button title="up" event={countUp}/>
      <Button title="down" event={countDown}/>
      <Button title="사업자번호 호출" event={apiCall}/>
    </div>
  );
}
 

export default Root;
