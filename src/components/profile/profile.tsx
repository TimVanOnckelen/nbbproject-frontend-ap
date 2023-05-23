import React, { useState, ChangeEvent } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TextFields = () => {
  const getUser = async () => {};
  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start', margin: 20 }}
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='Naam'
        label='Naam'
        variant='outlined'
      />{' '}
      <br />
      <TextField
        id='Voornaam'
        label='Voornaam'
        variant='outlined'
      />
      <br />
      <TextField
        id='Wachtwoord'
        label='Wachtwoord'
        variant='outlined'
      />
      <br />
      <TextField
        id='Wachtwoord herhalen'
        label='Wachtwoord herhalen'
        variant='outlined'
      />{' '}
      <br />
      <TextField
        id='Email'
        label='Email'
        variant='outlined'
      />
      <br />
      <Stack
        spacing={5}
        direction='row'
      >
        <Button variant='text'>SUBMIT</Button>
      </Stack>
    </Box>
  );
};

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
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data as needed
          console.log('Upload successful:', data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the upload
          console.error('Error during upload:', error);
        });
    }
  };

  return (
    <>
      <input
        style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start', margin: 20 }}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
      />
      <Stack
        spacing={5}
        direction='row'
      >
        <Button
          style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start', margin: 20 }}
          variant='text'
          onClick={handleUpload}
        >
          UPLOAD Profielfoto
        </Button>
      </Stack>
    </>
  );
};

const Profile = () => {
  return (
    <>
      {/* <ImageUploadPreview/> */}
      <ProfileImageUpload />
      {/* <InputFieldname/> */}
      <TextFields />
    </>
  );
};

export default Profile;
