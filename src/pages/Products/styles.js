import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: rgb(245, 245, 245);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  width: 100%;
  min-height: 100vh;
  margin: auto 0;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  flex-flow: wrap;
  padding: 16px;
`;

export const Category = styled.div`
  height: 48px;
  width: 171px;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.06);
  border-image: initial;
  margin: 4px;
  flex: 1 1 0%;
`;

export const CategoryContent = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  min-width: unset;

  svg {
    margin-right: 5px;
    color: #ffc500;
    width: 20px;
    height: 20px;
  }
`;

export const CategoryText = styled.div`
  color: rgb(51, 51, 51);
  font-size: 14px;
  margin-left: 4px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1195px;
  border-radius: 8px;
  flex-flow: wrap;
  padding: 16px;
  margin: 0 auto 30px auto;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
`;

export const Image = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  img {
    height: 96px;
    align-self: center;
    padding: 4px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  margin-top: 4px;
  margin-left: 16px;
  margin-right: 8px;
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  font-size: 14px;
  text-align: left;
  height: 208px;
  min-width: 128px;
  width: 142px;
  flex-flow: column;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(250, 250, 250);
  border-image: initial;

  hr {
    width: 100%;
    margin: 0px;
    border-top: 0.4px solid rgb(247, 247, 247);
  }
`;

export const ProductTitle = styled.div`
  padding: 8px;

  p {
    text-align: left;
    color: rgb(153, 153, 153);
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    max-height: 32px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ProductPrice = styled.div`
  margin: 6px auto;

  p {
    font-weight: bold;
    color: rgb(51, 51, 51);
  }
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 8px auto;

  background-color: #ffc500;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border: 0 solid #fff;
  border-radius: 3px;
  box-shadow: 0 0 0 0 #fff;
  width: 120px;
  height: 40px;
`;
