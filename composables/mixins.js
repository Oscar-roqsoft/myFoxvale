// export const user = {
//     name: "Johnson Akpabio", 
//     image: "/images/client/05.jpg",
//     profession: "Software Engineer",
//     status: "admin" // "user"
// }

export const baseURL = "https://foxvale.onrender.com";

export const validateEmail = (email)=>{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}