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

// how to upload file to ipf storage
export const uploadFile = async (file) => {
    const form = new FormData();
    form.append('file', file);

    const {ipfs_url} = await fetch('https://api.nftport.xyz/v0/files',{
        method: 'POST',
        headers: {
            Authorization: "2bfdfa37-489e-4fca-952e-d3de08cf702b"
        },
        body: form,
    }).then(response => response.json())
    .catch(error => {ipfs_url: "",error});
    return ipfs_url
}

export const handleFileChange = async (event , selectedFile ,profileImg=null)=>{
    const file = event.target.files[0];
    if(!file) return;
    selectedFile.value = file

    if(file?.type=="image/png" && profileImg){
        const reader = new FileReader();
        reader.onload = (event) => {
            profileImg.value.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

export const formatDateOfBirth = (dateOfBirthString) =>{
    const date = new Date(dateOfBirthString);
    // Extract the date components
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();
  
    // Format the date components into a desired format, for example:
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
  }
  