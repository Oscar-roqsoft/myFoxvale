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

export const uploadFile = async (file) => {
    const form = new FormData();
    form.append('file', file);

    const {ipfs_url} = await fetch('https://api.nftport.xyz/v0/files',{
        method: 'POST',
        headers: {
            'Authorization': `2bfdfa37-489e-4fca-952e-d3de08cf702b`,
            'content-type': 'multipart/form-data',
            'accept': 'application/json' 
        },
        body: form,
    }).then(response => response.json())
    .catch(error => {ipfs_url:""});
    return ipfs_url
}

export const handleFileChange = async (event,selectedFile,profileImg=null)=>{
    const file = event.target.files[0]
    selectedFile.value = file
    console.log(file)

    if(file.type=="image/png"){
        const reader = new FileReader();
        reader.onload = (event) => {
            profileImg.value.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    const file_url = await uploadFile(file);
    console.log("here......1...",file_url,file)
}