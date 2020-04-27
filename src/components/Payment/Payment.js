import React from 'react'
import CardReactFormContainer from 'card-react'
import './../../../node_modules/card-react/lib/card.css'
import * as S from './styles'

const Payment = (props) => {
  const [step, setStep] = React.useState(1)

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
            <S.StepPayment className="d-flex">
              <div>
                <span className={step ? 'no-border' : 'border'}>
                  {step ? (
                    <>
                      <S.CheckIcon /> <span>1</span>
                    </>
                  ) : (
                    1
                  )}
                </span>
                <label className={step ? 'm-left-6' : 'm-left-9'}>
                  Carrinho
                </label>
              </div>
              <div>
                <span>2</span>
                <label>Pagamento</label>
                <S.RightIcon />
              </div>
              <div>
                <span>3</span>
                <label>Confirmação</label>
                <S.RightIcon />
              </div>
            </S.StepPayment>
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
              <S.Form>
                <div className="pad-left m-bottom-16 float-label">
                  <input
                    placeholder="Número do seu cartão"
                    type="text"
                    // onChange={onCleanErrors}
                    name="CCnumber"
                  />
                  <label>Número do cartão</label>

                  {/* {errors.CCnumber && (
                    <p className="color-danger m-top-10`">Número inválido.</p>
                  )} */}
                </div>
                <div className="pad-left m-bottom-16 float-label">
                  <input
                    placeholder="Nome (igual no cartão)"
                    type="text"
                    // onChange={onCleanErrors}
                    name="CCname"
                  />
                  <label>Nome(Iugal ao cartão)</label>

                  {/* {errors.CCname && (
                    <p className="color-danger m-top-10`">Nome inválido.</p>
                  )} */}
                </div>
                <div className="pad-left m-bottom-16 float-label">
                  <input
                    placeholder="00/0000"
                    type="text"
                    // onChange={onCleanErrors}
                    name="CCexpiry"
                  />
                  <label>Validade</label>
                  {/* {errors.CCexpiry && (
                    <p className="color-danger m-top-10`">Validade Inválida.</p>
                  )} */}
                </div>
                <div className="pad-left m-bottom-16 float-label">
                  <input
                    placeholder="CVC"
                    // onChange={onCleanErrors}
                    type="text"
                    name="CCcvc"
                  />
                  <label>Código de verificação</label>
                  {/* {errors.CCcvc && (
                    <p className="color-danger m-top-10`">CVV inválido.</p>
                  )} */}
                </div>
                <div className="pad-left m-bottom-16 float-label">
                  <div className="select">
                    <label className="select-label">
                      <select
                        // value={split}
                        name="CCSplit"
                        // onChange={onChangeSplitHandler}
                        className="custom-select"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
                          return (
                            <option key={n} value={n}>
                              {n} de R$
                              {/* {(value / n)
                                .toFixed(2)
                                .toString()
                                .replace('.', ',')} */}
                            </option>
                          )
                        })}
                      </select>
                    </label>
                  </div>
                  <label>Parcelamento</label>
                </div>
              </S.Form>
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
