import React from 'react'
import styles from './Tic.module.css'

const   Tic = () => {
    const [turn,setTurn]=React.useState("x");
    const [cell,setCell]=React.useState(Array(9).fill(""))
    const [win,setWin]=React.useState()
    const winner =(squares)=>
    {
       let checks={
           across:[
               [0,1,2],
               [3,4,5],
               [6,7,8]
           ],
           hori:[
               [0,3,6],
               [1,4,7],
               [2,5,8]
           ],
           diag:[
               [0,4,8],
               [2,4,6]
           ],
       }
       
       for(let check in checks)
       {
        checks[check].forEach((pat)=>
        {
            if(squares[pat[0]]===""||squares[pat[1]]===""||squares[pat[2]]==="")
            {
               //
            }
            else if(squares[pat[0]]===squares[pat[1]]&&squares[pat[1]]===squares[pat[2]])
            {
                setWin(squares[pat[0]]);
            }
            
           
        })
       }
    }
    
    const HandleClick=(num)=>
    {
        if(cell[num]!=='')
        {
            alert('Cant change');
            return;
        }
      let squares=[...cell];
      if(turn==="x")
      {
          squares[num]="x"
          setTurn("o");
      }
      else{
         squares[num]="o"
          setTurn("x");
      }
      setCell(squares);
      winner(squares);
    };
     
    const HandleRestart=()=>
    {
        window.location.reload();
    }

    const Cell=({num})=>
    {
        return <td onClick={()=>HandleClick(num)}>{cell[num]}</td>
    }
  return (
    <div >
        <h2 className={styles.heading}>Tic Tac Toe</h2>
        <h4 className={styles.turn}>Turn: {turn}</h4>
        <h4>{
                    win&&(
                        <>
                        <p className={styles.winner}>'{win}' is the Winner!</p>
                        </>
                        
                    )
                    
                }</h4>
                <button onClick={()=>
                {
                    HandleRestart();
                }}>Restart</button>
        <div className={styles.container}>
        
            <table>
             <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        
        </div>
        <div>
        {
            win&&(
                <>
                <button onClick={()=>({...window.location.reload()})}>Play Again!</button>
                </>
            )
        }
        </div>
    </div>
  )
}

export default Tic