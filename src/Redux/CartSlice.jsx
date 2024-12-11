import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            const {productId,quantity,name,images,price,discountprice} = action.payload;
            const indexProductId = (state).findIndex(item => item.productId === productId)
            if (indexProductId>=0) {
                state[indexProductId].quantity+=quantity;
            }
            else{
               
                
            state.push({productId,quantity,name,images,price,discountprice});
            
            }
        },
            
          
            
        
        changeQuantity(state,action){
            const {productId,quantity} = action.payload;
            
            const indexProductId = (state).findIndex(item => item.productId === productId)
            if (quantity>0) {
                state[indexProductId].quantity=quantity;
            }
            else{
               
                
            // state = (state).filter(item => item.productId!==productId)
            console.log("deleted")
             return state.filter((item)=>item.productId!==productId)
             
            
            }
        },
        remove(state,action){
            
            
            return state.filter((item)=>item.productId!== action.payload.productId)
        },
            
        },
       
        
        
      
        
    }
)
export const {add,remove,changeQuantity } = cartSlice.actions;
export default cartSlice.reducer