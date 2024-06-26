const cloudinary = require("../utils/cloudinary");
const multer = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async(req,file)=>{
        return{
        folder:'podcast-files',
        resource_type:'auto',
        allowedFormats:['jpeg','png','jpg','mp3'],
        transformation:[
            {
                width:500,height:500, crop:"fill"
            }
        ],
        path:file.path
    }
    }
});

console.log(storage.cloudinary.url)
const upload =multer({storage});
module.exports = upload;