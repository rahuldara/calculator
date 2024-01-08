import './styles.css';
function Row1(){
let buttonNumbers=['1','=','2','3','4','5','6','7','8','9','0','+','-','x','/']

    return <div id="bttn">
        {buttonNumbers.map(number =><button id="btn">{number}</button>)
        }
        
       
    </div>
}
export default Row1;