import React, { useState } from 'react';
import styled from 'styled-components';
import HighlightsOption from './HighlightsOption';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';

const Highlights = ({ newStayInfo }) => {
  const [highlights, setHighlights] = useState([]);

  const isChosen = id => {
    return highlights.includes(id);
  };

  const changeHighlightsOptions = id => {
    if (highlights.includes(id)) {
      let newHighlightOption = highlights.filter(number => number !== id);
      setHighlights(newHighlightOption);
    } else {
      setHighlights([...highlights, id]);
      isChosen(id);
    }
  };

  newStayInfo.highlights = highlights;

  return (
    <PageContainer>
      <OptionContainer>
        <OptionTitle>
          숙소의 특징이 잘 드러나는 문구를 선택해주세요.
        </OptionTitle>
        <OptionBtns>
          {Highlights_OPTIONS.map(({ id, text, icon }) => {
            return (
              <HighlightsOption
                key={id}
                id={id}
                text={text}
                icon={icon}
                handleOptions={changeHighlightsOptions}
                isChosen={isChosen}
              />
            );
          })}
        </OptionBtns>
      </OptionContainer>
    </PageContainer>
  );
};

export default Highlights;

const Highlights_OPTIONS = [
  { id: 1, text: '평화로움', icon: <ForestOutlinedIcon /> },
  {
    id: 2,
    text: '독특함',
    icon: <CameraEnhanceOutlinedIcon />,
  },
  { id: 4, text: '세련됨', icon: <ThumbUpAltOutlinedIcon /> },
  {
    id: 5,
    text: '중심부에 위치',
    icon: <RoomOutlinedIcon />,
  },
  {
    id: 6,
    text: '넓은 공간',
    icon: <FamilyRestroomOutlinedIcon />,
    category: 'amenities',
  },
];

const PageContainer = styled.div`
  height: 100vh;
  margin: 0;
`;

const OptionContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 70%;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSemiMedium};
`;

const OptionTitle = styled.h1``;

const OptionBtns = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', '')}
  flex-wrap: wrap;
  width: 80%;
  margin-top: 10px;
  cursor: pointer;
`;
