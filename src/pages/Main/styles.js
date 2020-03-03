import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: auto 0;
`;

export const Title = styled.p`
  font-weight: bold;
  color: #333;
  font-size: 50px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: normal;
  margin-bottom: 30px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;

  .google-places-autocomplete {
    position: unset;
  }
`;

export const Icon = styled.div`
  position: absolute;

  svg {
    width: 24px;
    height: 24px;
    margin: 12px 0px 0px 16px;
    color: ${props => (props.error ? "#f00" : "rgb(204, 204, 204)")};
  }
`;

export const ErrorText = styled.p`
  color: #f00;
`;
