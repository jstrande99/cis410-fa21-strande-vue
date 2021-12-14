import{createStore} from 'vuex';
import axios from 'axios';
import myRoutes from "./routes.js"
export default createStore({
    state: {
        token: null,
        user: null, 
        products: []
    }, 
    mutations: {
        storeTokenInApp(state, myToken){
            state.token = myToken;
        }, 
        storeUserInApp(state, theUser){ 
            state.user = theUser;
        },
        storeProducts(state, products){
            state.products = products; 
        },
        clearAuthData(state){
            state.token = null; 
            state.user = null;
        }
    },
    actions: {
        getProducts({commit}){
            axios.get("/products").then((aResponse)=>{
                console.log("response in products:", aResponse);
                commit("storeProducts", aResponse.data);
            });
        },
        logout({commit, state}){
            axios.post("/customers/logout", null,{
                headers:{ Authorization: `Bearer ${state.token}`}
            }).then(()=>{
                commit("clearAuthData");
                myRoutes.replace("/");
            }).catch(()=>{
                console.log("ERROR in logging out");
            })
        }
    }
})