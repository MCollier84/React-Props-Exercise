// 11/14/21 React Props Exercise
import Bonus from "../Bonus/bonus"
// 1a 3b 3d  
function Exercise ({good = `Great`}, {bad = `Not Great`}){
    // 2a
    return (
        <div>
            {/* 3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            <Bonus />
        </div>
        
    );
}

// 1b 
export default Exercise;