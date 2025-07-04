
import axios from "axios"
const response= axios.create({
    baseURL:"https://randomuser.me/api/",

})

export const fetchData=async () =>{
try {
    const res=await response.get("?results=5")
    return res.data.results;
} catch (error) {
    console.error("Error fetching random users:", error);
    return [];
    
}    
}
