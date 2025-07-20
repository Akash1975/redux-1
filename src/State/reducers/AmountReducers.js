const amountReducer = (action , state=0)=>{
    if(action.type === "deposite"){
        return state + action.payload;
    }
    else if(action.type === "withdraw"){
        return state - action.payload;
    }
    else{
    return state;
    } 
}

export default amountReducer;