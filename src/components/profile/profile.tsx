import React, { useState, ChangeEvent } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

// const InputFieldname =()=>{
//     return(

//         <>
//         <fieldset style={{ color: 'blue', lineHeight : 2, padding: 10, display: 'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'flex-start' }}>
            
            
//             <label  htmlFor="">naam </label>
//             <input  type="text" name="" id="" /> 
//             <label htmlFor="">voornaam </label>
//             <input type="text" name="" id="" /> 
//             <label htmlFor="">NBB-identifier </label>
//             <input type="text" name="" id="" /> 
//             <label htmlFor="">Telefoon </label>
//             <input type="text" name="" id="" />
//             <label htmlFor="">Geboorte </label>
//             <input type="text" name="" id="" />
//         </fieldset>
       
        
//         </>
//     )


// }
const ColorTextFields=()=> {
    return (
      <Box style={{ color: 'blue', lineHeight : 2, padding: 10, display: 'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'flex-start' }}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" color="secondary" focused />
        <TextField label="Surname" color="secondary" focused />
        <TextField label="NBB-Number" color="secondary" focused />
        <TextField label="BirthYear" color="secondary" focused />
        
        
      </Box>
    );
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

      fetch('https://localhost:3000/profile', {
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
      <input style={{display: 'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'flex-start' }} type="file" accept="image/*" onChange={handleImageChange} /> <br />
      <button style={{display: 'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'flex-start' }} onClick={handleUpload}>Upload</button>
    </div>
  );
};





 const Profile =()=> {

    return(
        <>
        {/* <ImageUploadPreview/> */}
        <ProfileImageUpload/>
        {/* <InputFieldname/> */}
        <ColorTextFields/>
        
        </>
    )
}

export default Profile;