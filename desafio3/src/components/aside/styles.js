import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  max-width: 25%;
  width: calc((100% / 12) * 4);
  height: 94%;

  position: absolute;
  left: 30px;
  top: 30px;

  background-color: #050806;
  box-shadow: 0 0 5px 1px limegreen;
  border-radius: 5px;
  color: limegreen;

  z-index: 1;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 15px;
    text-align: center;

    img {
      flex: 1;
      width: 50%;
      height: auto;
      padding: 15px;

      background-color: limegreen;
      margin-bottom: 15px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 15px;
  border-bottom: 1px solid rgba(124, 252, 0, 0.5);
  width: 100%;
`;

export const ListTitleContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

export const ListImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 0 !important;
  background: none !important;
  margin-right: 15px;
`;

export const ListTitle = styled.h3`
  color: limegreen;
  align-items: center;
  font-size: 1rem;
  margin: 0;
`;

export const ListSubTitle = styled.p`
  color: limegreen;
  font-size: 0.8rem;
  margin: 0;
`;

export const ListButtonsContainer = styled.div`
  min-width: 25%;
  padding: 0;
  i {
    margin-left: 10px;
  }
`;

export const ButtonDelete = styled.button`
  color: #f00;
  background: transparent;
  cursor: pointer;
`;

export const ButtonArrow = styled.a`
  color: limegreen;
  font-weight: bold;
  text-decoration: none;
`;
