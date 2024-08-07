import axios from 'axios';

const url = `https://api.cloudinary.com/v1_1/df6hnx3oc/image/upload`;

const UploadImage = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'Paws_and_Claws'); // Ensure this matches exactly with your Cloudinary preset name

    try {
        const response = await axios.post(url, formData);
        console.log("Image uploaded", response);
        return response.data.secure_url;
    } catch (error) {
        console.error("Error uploading image", error.response ? error.response.data : error.message);
        throw error;
    }
}

export default UploadImage;
