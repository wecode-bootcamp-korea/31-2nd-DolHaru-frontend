import React, { useState } from 'react';
import styled from 'styled-components';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const Photos = ({ setPhotos }) => {
  const [images, setImages] = useState([]);

  const previewPictures = e => {
    const selectedFiles = [];
    const { files } = e.target;
    setPhotos(files);
    const targetFilesObject = [...files];
    targetFilesObject.map(file => {
      return selectedFiles.push(URL.createObjectURL(file));
    });
    setImages(selectedFiles);
  };

  return (
    <PageContainer>
      {images[0] ? (
        <PreviewWrapper>
          <PreviewTitle>어때요? 사진이 마음에 드시나요?</PreviewTitle>
          <ImgContainer>
            {images.map((url, index) => {
              return (
                <ImgHolder key={index}>
                  <PreviewImage alt="subPreview1" src={url} />
                </ImgHolder>
              );
            })}
          </ImgContainer>
        </PreviewWrapper>
      ) : (
        <ImageHolder>
          <ImageForm method="post" enctype="multipart/form-data">
            <ImageLabel htmlFor="pictureUpload">
              사진을 5장 이상 올려주세요
            </ImageLabel>
            <ImageInput
              type="file"
              id="pictureUpload"
              multiple={true}
              accept="image/*"
              onChange={previewPictures}
            />
          </ImageForm>
          <IconHolder>
            <AddPhotoAlternateOutlinedIcon style={{ fontSize: 60 }} />
          </IconHolder>
        </ImageHolder>
      )}
    </PageContainer>
  );
};

export default Photos;

const ImageHolder = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 470px;
  height: 470px;
  margin: 0 auto;
  border: 1px dashed ${({ theme }) => theme.darkGrey};
`;

const IconHolder = styled.div`
  ${({ theme }) => {
    theme.flexBox('column', 'center', '');
  }}
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;

const ImageForm = styled.form`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translateX(-50%);
`;

const ImageInput = styled.input`
  visibility: hidden;
`;

const ImageLabel = styled.label`
  margin-top: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  text-decoration: underline;
  cursor: pointer;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const PreviewWrapper = styled.div`
  width: 86%;
  height: 100%;
  padding: 100px 0 150px 0;
  margin: 0 auto;
  overflow: hidden;
`;

const PreviewTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
`;

const ImgContainer = styled.div`
  ${({ theme }) => theme.flexBox('', '', 'space-between')}
  flex-wrap: wrap;
  height: 100%;
  padding: 0 10px;
  overflow-y: scroll;
`;

const ImgHolder = styled.div`
  width: 49%;
  height: 200px;
  margin-top: 15px;

  &:first-child {
    width: 100%;
    height: auto;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;
