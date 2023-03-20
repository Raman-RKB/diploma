
// import styled, { css } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const Header = styled.header`
  background-color: #009EE4;
`;

export const HeaderNav = styled.nav`
    max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const HeaderBtnMainEnter = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;

  &:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}
`;

export const Main = styled.main`
  width: 224px;
  height: 40px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;

  &:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}
`;

export const MainSearch = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
}
`;

export const SearchLogoLink = styled.a`

}
`;

export const SearchLogoImg = styled.img`
  width: 54px;
  height: auto;
}
`;

export const SearchForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
}
`;

export const SearchText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::-moz-placeholder {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

&::placeholder {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
}
`;

export const SearchTextMob = styled.input`
display: none;
}
`;

export const SearchLogoMobLink = styled.a`
 display: none;
}
`;

export const SearchLogoMobImg = styled.img`
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
}
`;

export const SearchBtn = styled.button`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;

    &:hover {
  background-color: #0080C1;
}
}
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
}
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}
}
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
}
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;

  &::-webkit-scrollbar {
  width: 0px;
  background-color: #009EE4;
    }
  &::-webkit-scrollbar-thumb {
  background-color: #0080C1;
  border-radius: 3px;
    }
}
`;

//--------------------------CardsItem----------------------------------------

export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
}
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  display: block;
    width: 270px;
  height: 270px;
  background-color: #F0F0F0;
  -o-object-fit: cover;
     object-fit: cover;
}
`;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009EE4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
}
`;

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
   margin-bottom: 4px;
}
`;

export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
}
`;
