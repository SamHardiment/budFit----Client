import React from 'react'
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MatchButton = styled(IconButton)({
  color:'var(--turquoise)',
  border: '1px solid',
  borderColor:'var(--turquoise)',
  backgroundColor: 'var(--off-white)',
  width:'12vw',
  height:'12vw'
});

const RejectButton = styled(IconButton)({
  color:'var(--mauve)',
  border: '1px solid',
  borderColor:'var(--mauve)',
  backgroundColor: 'var(--off-white)',
  width:'12vw',
  height:'12vw'
});

function SearchBtns() {
  return (
    <div style={{bottom:5}}>
      <RejectButton><FontAwesomeIcon icon="xmark"/></RejectButton>
      <MatchButton><FontAwesomeIcon icon="check"/></MatchButton>
    </div>
  )
}

export default SearchBtns
