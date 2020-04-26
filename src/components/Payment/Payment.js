import React from 'react'
import CardReactFormContainer from 'card-react'
import './../../../node_modules/card-react/lib/card.css'
import * as S from './styles'

const Payment = (props) => {
  return (
    <S.PageWrapper>
      <div className="container">
        <div className="grid d-flex">
          <S.Card>
            <S.CardItem className="d-flex" topItem leftItem>
              <S.LeftIcon />
              <p>Alterar forma de pagamento</p>
            </S.CardItem>
            <S.CardItem className="d-flex" topItem leftItem>
              <S.CardIcon />
              <span>Adicione um novo cartão de crédito</span>
            </S.CardItem>
            <S.CreditCard name="name" cvv="cvv" topItem leftItem>
              <div>
                <div id="card-wrapper"></div>
              </div>
            </S.CreditCard>
          </S.Card>
          <S.CardInformation>
            <CardReactFormContainer
              container="card-wrapper"
              formInputsNames={{
                number: 'CCnumber',
                expiry: 'CCexpiry',
                cvc: 'CCcvc',
                name: 'CCname',
              }}
              initialValues={{
                number: '',
                cvc: '',
                expiry: '',
                name: '',
              }}
              classes={{
                valid: 'valid-input',
                invalid: 'invalid-input',
              }}
              formatting={true}
            >
              <form>
                <div className="m-bottom-40 input-wrapper pad-left w-100">
                  <label className="label tt-uppercase color-darken fw-bold fs-8 m-bottom-20 d-block">
                    Número
                  </label>
                  <input
                    placeholder="Número do seu cartão"
                    type="text"
                    // onChange={onCleanErrors}
                    name="CCnumber"
                    className="m-bottom-10"
                  />
                  {/* {errors.CCnumber && (
                    <p className="color-danger m-top-10`">Número inválido.</p>
                  )} */}
                </div>
                <div className="m-bottom-40 input-wrapper pad-left w-100">
                  <label className="label tt-uppercase color-darken fw-bold fs-8 m-bottom-20 d-block">
                    Nome
                  </label>
                  <input
                    placeholder="Nome (igual no cartão)"
                    type="text"
                    // onChange={onCleanErrors}
                    name="CCname"
                    className="m-bottom-10"
                  />
                  {/* {errors.CCname && (
                    <p className="color-danger m-top-10`">Nome inválido.</p>
                  )} */}
                </div>
                <div className="m-bottom-40 input-wrapper pad-left w-100">
                  <label className="label tt-uppercase color-darken fw-bold fs-8 m-bottom-20 d-block">
                    Validade
                  </label>
                  <input
                    placeholder="00/0000"
                    type="text"
                    // onChange={onCleanErrors}
                    name="CCexpiry"
                    className="m-bottom-10"
                  />
                  {/* {errors.CCexpiry && (
                    <p className="color-danger m-top-10`">Validade Inválida.</p>
                  )} */}
                </div>
                <div className="m-bottom-40 input-wrapper pad-left w-100">
                  <label className="label tt-uppercase color-darken fw-bold fs-8 m-bottom-20 d-block">
                    Código de verificação
                  </label>
                  <input
                    placeholder="CVC"
                    // onChange={onCleanErrors}
                    type="text"
                    name="CCcvc"
                    className="m-bottom-10"
                  />
                  {/* {errors.CCcvc && (
                    <p className="color-danger m-top-10`">CVV inválido.</p>
                  )} */}
                </div>
                <div className="m-bottom-40 input-wrapper pad-left w-100">
                  <div>
                    <label className="label tt-uppercase color-darken fw-bold fs-8 m-bottom-20 d-block">
                      Parcelamento
                    </label>
                  </div>
                  <div className="select">
                    <label className="select-label">
                      <select
                        // value={split}
                        name="CCSplit"
                        // onChange={onChangeSplitHandler}
                        className="custom-select"
                      >
                        {/* <option>
                          a vista R$
                          {(userInfo.amount / 100).toFixed(2).replace('.', ',')}
                        </option> */}
                        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => {
                              return (
                                <option key={n} value={n}>
                                  {n} de R$
                                  {(userInfo.amount / n)
                                    .toFixed(2)
                                    .toString()
                                    .replace(".", ",")}
                                </option>
                              );
                            })} */}
                      </select>
                    </label>
                  </div>
                </div>
              </form>
            </CardReactFormContainer>
          </S.CardInformation>
          <S.PaymentResume>
            <p>Resumo do Pagamento</p>
          </S.PaymentResume>
        </div>
      </div>
    </S.PageWrapper>
  )
}

export default Payment
