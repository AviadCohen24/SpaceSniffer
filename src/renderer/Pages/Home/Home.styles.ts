/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const UsageDisplayContainer = styled.div`
  height: 80vh; // TODO: Set as the screen height
  border: 1px solid #713893;
  border-radius: 25px;
  padding: 1rem;
  position: relative;
  z-index: 1;
`;

export const ScanStateButton = styled.button`
  background: #5e0d9b;
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
  color: white;
  width: fit-content;
  padding: 0 5vw;
`;

export const ScannerConfigContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  justify-content: space-around;
`;

export const PathContainer = styled.h1`
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
  color: white;
  width: fit-content;
  height: fit-content;
  margin: 0;
  align-self: center;
`;
