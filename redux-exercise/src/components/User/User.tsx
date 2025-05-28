import {  useDispatch, useSelector } from "react-redux";
import {  userFirstName, userLastName, incrementAge,  } from "./userslice";


type UserState = {
    user: {
        firstname: string
        lastname: string
        age: number
    }
}

const User = () => {
    const firstname = useSelector((state: UserState) => state.user.firstname)
    const lastname = useSelector((state: UserState) => state.user.lastname)
    const age = useSelector((state: UserState) => state.user.age)
    const dispatch = useDispatch()


    return (

        <>
    

    
        <div>
            <div>
                <h1>User Information</h1>
            </div>

            <h2>Firstname: {firstname}</h2>
            <input type="text" onChange={(e) => dispatch(userFirstName(e.target.value))} placeholder="Enter Your FirstName"/>
            
            
            <h2>Lastname: {lastname}</h2>
            <input type="text" onChange={(e) => dispatch(userLastName(e.target.value))} placeholder="Enter Your FirstName"/>

           <h2>Age: {age}</h2>
            <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
        </div>
        
        </>



    )
}


export default User