import styled from 'styled-components'
import { device } from '../../assets/styles/device'
import left from '../../assets/images/left-icon.svg'
import right from '../../assets/images/right-icon.svg'
import chevron from '../../assets/images/chevron-down.svg'
import check from '../../assets/images/check-icon.svg'
import tip from '../../assets/images/icon-info.svg'
import card from '../../assets/images/card-icon.svg'

export const PageWrapper = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  padding: 0;
  @media ${device.laptopXS} {
    padding: 65px 0;
  }
`
export const Card = styled.div`
  background-color: #de4b4b;
  height: 266px;
  width: 100%;
  padding: 10px 15px;
  text-align: center p {
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
  @media ${device.laptopXS} {
    width: 32%;
    padding: 0 15px;
    text-align: left;
    height: 596px;
  }
`
export const CardItem = styled.div`
  width: 74%;
  margin: 20px auto;
  color: #fff;
  @media ${device.laptopXS} {
    width: 90%;
    margin-top: ${(props) => (props.topItem ? '54px' : '')};
    margin-left: ${(props) => (props.leftItem ? '68px' : '')};
    p {
      margin-left: 20px;
    }
  }
`

export const CardItemPayment = styled.div`
  width: 74%;
  margin: 20px auto;
  color: #fff;
  display: none;
  @media ${device.laptopXS} {
    display: flex;
    width: 90%;
    margin-top: ${(props) => (props.topItem ? '54px' : '')};
    margin-left: ${(props) => (props.leftItem ? '68px' : '')};
    p {
      margin-left: 20px;
    }
  }
`
export const CardItemMobile = styled.div`
  width: 74%;
  margin: 20px auto;
  color: #fff;
  display: block;
  p {
    margin-left: 83px;
  }
  @media ${device.laptopXS} {
    display: none;
  }
`
export const CardInformation = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0 15px;
  .m-20 {
    margin: 0 20px;
  }
  .pad-left {
    padding-left: 82px;
  }
  .pad-left-20 {
    padding-left: 20px;
  }
  .pad-right-20 {
    padding-right: 20px;
  }
  .pad-right {
    padding-right: 23px;
  }
  .m-top-20 {
    margin-top: 20px;
  }
  .m-top-30 {
    margin-top: 30px;
  }
  .total-splits {
    font-size: 0.7rem;
    font-weight: 500;
    color: #525151;
  }
  .payment-resume {
    padding-top: 128px;
    margin: 0 auto;
    width: 83%;
    table {
      width: 100%;

      th {
        text-align: left;
      }
    }
  }
  .confirm {
    margin: 30px auto;
    width: 86%;
  }
  .select {
    border-bottom: 1px solid #c9c9c9;
    select {
      color: #000;
      padding: 0px;
      background: #fff;
      font-size: 14px;
      width: 100%;
      border-style: none;
      height: 60px;
    }
    &-label {
      &:after {
        content: '';
        background-color: #fff;
        background-image: url(${chevron});
        width: 15px;
        height: 15px;
        position: absolute;
        right: 31px;
        top: 26px;
        background-size: contain;
        pointer-events: none;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
  @media ${device.laptopXS} {
    width: 46%;
    .select {
      select {
        padding: 0 27px;
        margin-right: 29px;
      }
    }
    .payment-resume {
      padding-top: 0;
      padding-left: 82px;
      margin: 0;
      width: 100%;
    }
    .confirm {
      margin: 30px 20px;
      width: 50%;
    }
  }
`
export const PaymentResume = styled.div`
  display: none;
  width: 20%;
  background-color: #fff;
  margin-left: 20px;
  height: 285px;
  .title {
    background-color: #f7f7f7;
    padding: 9px;
    margin: 53px 20px 25px 20px;
    border-radius: 4px;
  }
  hr {
    border: 0.5px solid #707070;
    margin: 0 24px;
  }
  .item {
    background-color: #f7f7f7;
    border-radius: 4px;
    width: 54%;
    height: 12px;
    margin: 53px 20px 25px 20px;
  }
  .price {
    background-color: #f7f7f7;
    margin: 53px 20px 25px 20px;
    border-radius: 4px;
    width: 17%;
    height: 12px;
  }
  .total {
    background-color: #c9c9c9;
    border-radius: 4px;
    width: 54%;
    height: 12px;
    margin: 53px 20px 25px 20px;
  }
  .total-price {
    background-color: #c9c9c9;
    margin: 53px 20px 25px 20px;
    border-radius: 4px;
    width: 17%;
    height: 12px;
  }
  .m-top {
    margin: 0 20px 25px 20px;
  }
  .m-top-20 {
    margin: 20px 20px 25px 20px;
  }
  @media ${device.laptopXS} {
    display: block;
  }
`
export const LeftIcon = styled.img.attrs({
  src: `${left}`,
})`
  width: 3%;
`
export const Tooltip = styled.img.attrs({
  src: `${tip}`,
})`
  width: 30%;
  position: relative;
  top: 3px;
`
export const RightIcon = styled.img.attrs({
  src: `${right}`,
})`
  position: relative;
  top: -1px;
  left: 0;
  width: 3%;
`
export const CheckIcon = styled.img.attrs({
  src: `${check}`,
})`
  position: relative;
  top: 4px;
  left: 2px;
  width: 17.3%;
`
export const CardIcon = styled.img.attrs({
  src: `${card}`,
})`
  width: 20%;
`
export const CreditCard = styled.div`
  color: #fff;
  position: relative;
  left: 26px;
  width: 87%;
  .jp-card-front {
    box-shadow: 0 8px 16px rgba(2, 2, 2, 0.2);
  }
  @media ${device.laptopXS} {
    left: 68px;
    width: 100%;
    margin-top: ${(props) => (props.topItem ? '54px' : '')};
  }
`
export const StepPayment = styled.div`
  color: #de4b4b;
  margin: 49px 0 49px 82px;
  display: none;
  .m-top-6 {
    margin-top: 6px;
  }
  .step {
    width: 70%;
    label {
      margin: 0 30px 0 9px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    span {
      background-color: #fff;
      padding: 4px 8px;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: capitalize;
    }
    .no-payment {
      top: -18px;
      left: 126px;
    }
    .payment {
      top: -1px;
      left: -3px;
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
    .left {
      left: -4px;
    }
    .m-left-16 {
      margin: 0 17px 0 16px;
    }
    .m-left-3 {
      margin: 0 17px 0 3px;
    }
    .m-left-9 {
      margin: 0 30px 0 9px;
    }
    .border {
      border: 1px solid #de4c4c;
      border-radius: 50px;
    }
  }
  @media ${device.laptopXS} {
    display: flex;
  }
`
export const Form = styled.form`
  padding: 92px 30px;

  .m-bottom-16 {
    margin-bottom: 16px;
  }
  label {
    color: #c9c9c9;
    display: block;
    font-size: 0.8rem;
  }
  .line-inputs {
    .float-label {
      .cvv {
        left: 16px;
      }
      .expiry {
        left: -8px;
      }
    }
  }
  .float-label {
    position: relative;
    padding-top: 3px;
    margin-top: 30px;
    .icon-tip {
      &:hover {
        &:after {
          content: 'CVV é um código de segurança de 3 dígitos, impresso no verso do seu cartão de crédito. ';
          position: absolute;
          left: -20px;
          top: -92px;
          width: 170px;
          background-color: #000;
          opacity: 0.8;
          color: #fff;
          padding: 14px;
          border-radius: 12px;
        }
      }
    }
    .color-danger {
      color: #eb5757;
      font-size: 0.8rem;
      margin-top: 25px;
    }
    .border-danger {
      border-bottom: 1px solid #eb5757;
    }
    .splits {
      top: -10px;
    }
    input {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin-top: 10px;
      padding: 7px 5px 0 0;
      height: 28px;
      width: 100%;
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
      position: absolute;
      top: calc(50% - 23px);
      left: 0;
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
      background-color: transparent;
    }
  }
  @media ${device.laptopXS} {
    padding: 0;
    .line-inputs {
      padding-left: 82px;
      .float-label {
        .cvv {
          padding-right: 20px;
          left: 0;
        }
      }
    }
    .float-label {
      padding-left: 82px;
      margin-right: 20px;
      label {
        left: 77px;
        input {
          width: 93%;
        }
      }
      .icon-tip {
        &:hover {
          &:after {
            top: -61px;
            left: 56px;
          }
        }
      }
    }
    .date-expiry,
    .code {
      padding-left: 0;
    }
  }
`
export const Button = styled.div`
  background-color: #de4b4b;
  border-radius: 8px;
  color: #fff;
  text-transform: uppercase;
  padding: 14px;
  text-align: center;
  width: 100%;
  font-family: SF Pro, sans-serif;
  font-weight: 600;
  margin-top: 30px;

  @media ${device.laptopXS} {
    width: 50%;
    margin-top: 0;
    margin-right: 23px;
  }
`

CardIcon.defaultProps = {
  'data-id': 'CardIcon',
}
Button.defaultProps = {
  'data-id': 'Button',
}
PageWrapper.defaultProps = {
  'data-id': 'PageWrapper',
}
Card.defaultProps = {
  'data-id': 'Card',
}
CreditCard.defaultProps = {
  'data-id': 'CreditCard',
}
CardItem.defaultProps = {
  'data-id': 'CardItem',
}
CardItemMobile.defaultProps = {
  'data-id': 'CardItemMobile',
}
CardItemPayment.defaultProps = {
  'data-id': 'CardItemPayment',
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
