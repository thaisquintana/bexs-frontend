import styled from 'styled-components'
import { device } from '../../assets/styles/device'
import left from '../../assets/images/left-icon.svg'
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
  width: 40%;
  padding: 0 15px;
`
export const PaymentResume = styled.div`
  width: 28%;
  background-color: #fff;
  margin-left: 20px;
  height: 285px;
`
export const LeftIcon = styled.img.attrs({
  src: `${left}`,
})`
  width: 3%;
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
PaymentResume.defaultProps = {
  'data-id': 'PaymentResume',
}
LeftIcon.defaultProps = {
  'data-id': 'LeftIcon',
}
