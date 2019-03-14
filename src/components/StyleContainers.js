import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Navigation = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  height: 100vh;
  border-right: 3px #1E90FF;
`;

export const ExampleNavigation = styled(Navigation)`
  height: 100%;
  margin-right: 4px;
  border: 3px solid #1E90FF;  
`;

export const Body = styled.div`
  padding: 12px;
  height: 100vh;
`;