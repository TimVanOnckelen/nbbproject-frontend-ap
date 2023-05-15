import React, { useState, ChangeEvent } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// const ImageUploadPreview: React.FC = () => {
//   const [file, setFile] = useState<File | undefined>(undefined);
//   const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files?.[0];

//     if (file) {
//       reader.onloadend = () => {
//         setFile(file);
//         setImagePreviewUrl(reader.result as string);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   let $imagePreview: JSX.Element | null = null;
//   if (imagePreviewUrl) {
//     $imagePreview = <Image src={imagePreviewUrl} thumbnail />;
//   } else {
//     $imagePreview = (
//       <div className="previewText">Please select an Image for Preview</div>
//     );
//   }

//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={12}>
//           <form>
//             <label>Please Select Image</label>
//             <br />
//             <input type="file" onChange={handleImageChange} />
//           </form>
//         </Col>
//         <Col xs={12} md={12}>
//           {$imagePreview}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

const InputFieldname =()=>{
    return(

        <>
        <fieldset style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
            

            <label  htmlFor="">naam </label>
            <input  type="text" name="" id="" /> <br />
            <label htmlFor="">voornaam </label>
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">NBB-identifier </label>
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Telefoon </label>
            <input type="text" name="" id="" /><br />
            <label htmlFor="">Geboorte </label>
            <input type="text" name="" id="" />
        </fieldset>
        
        
        </>
    )


}

const ProfileImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data as needed
          console.log('Upload successful:', data);
        })
        .catch(error => {
          // Handle any errors that occurred during the upload
          console.error('Error during upload:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};



 const Profile =()=> {

    return(
        <>
        {/* <ImageUploadPreview/> */}
        <ProfileImageUpload/>
        <InputFieldname/>
        
        </>
    )
}

export default Profile;