const initialState ={
    tasks:[],
}

export const reducer =(state =initialState,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return{...state, tasks:[...state.tasks,action.payload]};
        case 'REMOVE_TASK':
            return{tasks:state.tasks.filter((task)=>task.id !==action.payload )};    
        default:
         return state;
    }   
}