import styled from 'styled-components'
import { device } from '../../assets/styles/device'
import left from '../../assets/images/left-icon.svg'
import right from '../../assets/images/right-icon.svg'
import check from '../../assets/images/check-icon.svg'
import card from '../../assets/images/card-icon.svg'

export const PageWrapper = styled.div`
  background-color: #f7f7f7;
  height: auto;
  padding: 65px 0;
`
export const Card = styled.div`
  background-color: #de4b4b;
  height: 596px;
  width: 30%;
  padding: 0 15px;

  p {
    font-size: 0.8rem;
    color: #fff;
    margin-left: 16px;
    line-height: 0.8;
    letter-spacing: -0.01px;
  }

  span {
    font-size: 1.2rem;
    color: #fff;
    margin-left: 15px;
    font-weight: 700;
  }
`

export const CardItem = styled.div`
  @media ${device.laptopXS} {
    margin-top: ${(props) => (props.topItem ? '54px' : '')};
    margin-left: ${(props) => (props.leftItem ? '68px' : '')};
  }
`

export const CardInformation = styled.div`
  background-color: #fff;
  width: 46%;
  padding: 0 15px;
`
export const PaymentResume = styled.div`
  width: 22%;
  background-color: #fff;
  margin-left: 20px;
  height: 285px;
`
export const LeftIcon = styled.img.attrs({
  src: `${left}`,
})`
  width: 3%;
`
export const RightIcon = styled.img.attrs({
  src: `${right}`,
})`
  position: relative;
  top: -19px;
  left: -17px;
  width: 3%;
`
export const CheckIcon = styled.img.attrs({
  src: `${check}`,
})`
  position: relative;
  top: 4px;
  left: 2px;
  width: 12.4%;
`
export const CardIcon = styled.img.attrs({
  src: `${card}`,
})`
  width: 20%;
`
export const CreditCard = styled.div`
  color: #fff;
  @media ${device.laptopXS} {
    margin-top: ${(props) => (props.topItem ? '54px' : '')};
    margin-left: ${(props) => (props.leftItem ? '68px' : '')};
  }
`

export const StepPayment = styled.div`
  color: #de4b4b;
  margin: 49px 0 49px 82px;
  label {
    margin: 0 30px 0 9px;
    font-size: 0.9rem;
    font-weight: 500;
  }
  span {
    background-color: #fff;
    padding: 4px 8px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  .no-border {
    border: none;
    border-radius: 0;
    color: #fff;
    padding: 0;
    span {
      display: none;
    }
  }
  .m-left-6 {
    margin: 0 22px 0 6px;
  }

  .m-left-9 {
    margin: 0 30px 0 9px;
  }

  .border {
    border: 1px solid #de4c4c;
    border-radius: 50px;
  }
`
export const Form = styled.form`
  .pad-left {
    padding-left: 82px;
  }
  .m-bottom-16 {
    margin-bottom: 16px;
  }
  label {
    color: #c9c9c9;
    display: block;
    font-size: 0.8rem;
  }

  .float-label {
    position: relative;
    padding-top: 3px;

    input {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 10px 0 30px 0;
      padding: 7px 5px 0 0;
      height: 28px;
      width: 93%;
      text-align: left;
      border-style: none;
      border-bottom: 1px solid #c9c9c9;
      font-size: 1rem;
      transition: all 0.1s linear;
      -webkit-transition: all 0.1s linear;
      -moz-transition: all 0.1s linear;
      -webkit-appearance: none;

      &:focus {
        background-color: #fff;
      }
      /* Change the white to any color ;) */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        background-color: #fff;
        -webkit-box-shadow: 0 0 0 30px white inset;
      }

      &::placeholder {
        color: transparent;
      }
    }

    label {
      color: #c9c9c9;
      font-size: 0.8rem;
      font-weight: 500;
      pointer-events: none;
      position: absolute;
      top: calc(50% - 23px);
      left: 77px;
      transition: all 0.1s linear;
      -webkit-transition: all 0.1s linear;
      -moz-transition: all 0.1s linear;
      padding: 5px;
      box-sizing: border-box;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
      font-size: 0.7rem;
      top: -5px;
      color: #c9c9c9;
      background-color: #fff;
    }
  }
`

CardIcon.defaultProps = {
  'data-id': 'CardIcon',
}
PageWrapper.defaultProps = {
  'data-id': 'PageWrapper',
}
Card.defaultProps = {
  'data-id': 'Card',
}
CardItem.defaultProps = {
  'data-id': 'CardItem',
}
CardInformation.defaultProps = {
  'data-id': 'CardInformation',
}
StepPayment.defaultProps = {
  'data-id': 'StepPayment',
}
PaymentResume.defaultProps = {
  'data-id': 'PaymentResume',
}
LeftIcon.defaultProps = {
  'data-id': 'LeftIcon',
}
