import styled from 'styled-components';



export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px  240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL';
  
  height: 100vh;

`;
//SL- Server List
//SN - Server Name
//CI - Channel Info
//CL- CHANNEL LIST
//CD - CHANNEL DATA
//UL - USER LIST 
//UI - USER INFO