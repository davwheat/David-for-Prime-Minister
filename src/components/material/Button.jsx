import React from 'react'

import styled, { keyframes } from 'styled-components'
import { Button } from '@material-ui/core'
import theme from '../../constants/theme'

const borderAnimation = keyframes`
  0% {
      background-size:    0 3px,
                          3px 0,
                          0 3px,
                          3px 0;
  }
  25% {
      background-size:    100% 3px,
                          3px 0,
                          0 3px,
                          3px 0;
  }
  50% {
      background-size:    100% 3px,
                          3px 100%,
                          0 3px,
                          3px 0;
  }
  75% {
      background-size:    100% 3px,
                          3px 100%,
                          100% 3px,
                          3px 0;
  }
  100% {
      background-size:    100% 3px,
                          3px 100%,
                          100% 3px,
                          3px 100%;
  }
`

const Btn = ({ className, children }) => (
  <div className={className}>
    <Button className="styledButton">{children}</Button>
  </div>
)

export const CustomButton = styled(Btn)`
  .styledButton {
    border-radius: 0;

    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.getContrastText(theme.palette.primary.main)};

    padding: ${props => (props.size === 'big' ? '16px 32px' : '8px 16px')};
    font-size: ${props => (props.size === 'big' ? '1.25rem' : '0.875rem')};
    line-height: ${props => (props.size === 'big' ? '1' : '1.75')};

    &::before,
    &::after {
      content: '';
      width: 2px;
      height: 0;
      position: absolute;
      transition: height 0.2s linear;
      background: #faa;
      z-index: 999;
    }

    &::before {
      transition-delay: 0s;
      left: 0;
      top: 0;
    }

    &::after {
      transition-delay: 0.4s;
      right: 0;
      bottom: 0;
    }
  }
  && {
    width: max-content;
    overflow: hidden;
    display: block;
    position: relative;

    margin: ${theme.spacing()}px;

    &::before,
    &::after {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      transition: width 0.2s linear;
      background: #faa;
      z-index: 999;
    }

    &::before {
      right: 0;
      top: 0;
      transition-delay: 0.2s;
    }

    &::after {
      left: 0;
      bottom: 0;
      transition-delay: 0.6s;
    }

    &:hover {
      box-shadow: ${theme.shadows[8]};

      &::before {
        width: 100%;
      }
      &::after {
        width: 100%;
      }

      &::before {
        transition-delay: 0.4s;
      }

      &::after {
        transition-delay: 0s;
      }

      & .styledButton {
        background-color: ${theme.palette.secondary.dark};

        &::before,
        &::after {
          height: 100%;
        }

        &::before {
          transition-delay: 0.6s;
        }

        &::after {
          transition-delay: 0.2s;
        }
      }
    }
  }
`
