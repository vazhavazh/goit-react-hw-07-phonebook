import styled from '@emotion/styled';

export const AppStyled = styled.div`
  @mixin mobile {
    @media screen and (min-width: 320px) {
      @content;
    }
  }

  @mixin tablet {
    @media screen and (min-width: 768px) {
      @content;
    }
  }

  @mixin desktop {
    @media screen and (min-width: 1280px) {
      @content;
    }
  }

  @mixin retina {
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      @content;
    }
  }

  padding: 20px;
  /* padding-left: 20px;
    padding-right: 20px; */
  width: $mobile;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: $tablet) {
    width: $tablet;
    padding: 32px;
    /* padding-right: 32px; */
  }

  @media (min-width: $desktop) {
    width: $desktop;
    /* padding-left: 16px;
      padding-right: 16px; */
    padding: 16px;
  }
`;

export const H1 = styled.h1`
  font-size: 36px;
  margin: 0 0 20px;
`;

export const H2 = styled.h2`
  font-size: 28px;
  margin: 0px 0px 20px;
`;
