import React from "react";
import styled from "styled-components";
import { TbBrandAdobe } from "react-icons/tb";
import { TbBrand4Chan } from "react-icons/tb";
import { TbBrandBandlab } from "react-icons/tb";
import { TbBrandCashapp } from "react-icons/tb";
import { TbBrandDrops } from "react-icons/tb";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trsusted by 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <TbBrandAdobe className="icon" />
            <h4>A</h4>
          </div>
          <div className="slide">
            <TbBrand4Chan className="icon" />
            <h4>B</h4>
          </div>
          <div className="slide">
            <TbBrandBandlab className="icon" />
            <h4>c</h4>
          </div>
          <div className="slide">
            <TbBrandCashapp className="icon" />
            <h4>d</h4>
          </div>
          <div className="slide">
            <TbBrandDrops className="icon" />
            <h4>e</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
    
    h4 {
    color: #808080;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
    .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #808080;


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
