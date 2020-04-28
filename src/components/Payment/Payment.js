import React from 'react'
import CardReactFormContainer from 'card-react'
import './../../../node_modules/card-react/lib/card.css'
import * as S from './styles'

const Payment = (props) => {
  const [step, setStep] = React.useState(2)
  const [split, setSplit] = React.useState(1)
  const [errors, setError] = React.useState({
    CCname: false,
    CCnumber: false,
    CCcvc: false,
    CCexpiry: false,
    CCaddress: false,
    CCCode: false,
    CCsplit: false,
  })
  const [userInfo, setUserInfo] = React.useState({
    amount: 1000,
  })

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(500, 0)
  }

  const validadeCreditCardAndSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementsByName('CCname')[0].value
    const number = document.getElementsByName('CCnumber')[0].value
    const cvv = document.getElementsByName('CCcvc')[0].value
    const split = document.getElementsByName('CCsplit')[0].value
    const fullYear = new Date().getFullYear()
    const year = fullYear.toString().slice(0, 2)
    const date = document.getElementsByName('CCexpiry')[0].value
    const dated = document.getElementsByName('CCexpiry')[0].value.split('/')
    const code =
      document.getElementsByName('CCCode')[0] &&
      document.getElementsByName('CCCode')[0].value
    const errors = {
      CCname: name.replace(/\s/g, '').length < 10,
      CCnumber: number.replace(/\D/g, '').length < 15,
      CCcvc: cvv.length < 3,
      CCexpiry: parseInt(dated[1]) < parseInt(year),
      CCsplit: split.length >= 12,
    }
    if (Object.values(errors).filter((error) => error).length > 0) {
      return setError(errors)
    }
    onSubmitHandler({ name, number, cvv, date, split })
    nextStep()
  }

  const onSubmitHandler = (params) => {
    const { number, cvv, name, date, split } = params
    const amount = parseInt(userInfo.amount)
    console.log('submit:', name, number, cvv, date, split, amount)
  }

  const onCleanErrors = (event) => {
    const {
      target: { name },
    } = event
    setError({
      ...errors,
      [name]: false,
    })
  }

  const onChangeSplitHandler = ({ target: { value } }) => {
    if (value > 12) {
      return setSplit(12)
    }

    return setSplit(value)
  }

  return (
    <S.PageWrapper>
      <div className="container">
        <div className="grid d-flex">
          <S.Card>
            <S.CardItemMobile topItem leftItem>
              <S.LeftIcon />
              <p>
                <strong>Etapa {step === 2 ? 2 : 3}</strong> de 3
              </p>
            </S.CardItemMobile>
            <S.CardItemPayment topItem leftItem>
              <S.LeftIcon />
              <p>Alterar forma de pagamento</p>
            </S.CardItemPayment>
            <S.CardItem className="d-flex" topItem leftItem>
              <S.CardIcon />
              <span>Adicione um novo cartão de crédito</span>
            </S.CardItem>
            <S.CreditCard name="name" cvv="cvv" topItem>
              <div>
                <div id="card-wrapper"></div>
              </div>
            </S.CreditCard>
          </S.Card>
          <S.CardInformation>
            <S.StepPayment>
              <div className="step">
                <span className="no-border">
                  <S.CheckIcon />
                </span>
                <label className="m-left-16">Carrinho</label>
                <S.RightIcon />
              </div>
              <div className={step === 2 ? 'step m-top-6 step2' : 'step'}>
                <span className={step === 2 ? 'border' : 'no-border'}>
                  {step === 2 ? (
                    2
                  ) : (
                    <>
                      <S.CheckIcon className="left" /> <span>2</span>
                    </>
                  )}
                </span>
                <label className={step === 2 ? 'm-left-9' : 'm-left-3'}>
                  Pagamento
                </label>
                <S.RightIcon
                  className={step === 2 ? 'no-payment' : 'payment'}
                />
              </div>
              <div className={step === 3 ? 'step m-top-6' : 'step m-top-6'}>
                <span className="border">3</span>
                <label className={step === 3 ? 'm-left-9' : 'm-left-16'}>
                  Confirmação
                </label>
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
              {step === 2 ? (
                <S.Form>
                  <div className="m-bottom-16 float-label">
                    <input
                      placeholder="Número do seu cartão"
                      type="text"
                      onChange={onCleanErrors}
                      name="CCnumber"
                      className={errors.CCnumber ? 'border-danger' : ''}
                    />
                    <label>Número do cartão</label>
                    {errors.CCnumber && (
                      <span className="color-danger m-top-10`">
                        Número de cartão inválido
                      </span>
                    )}
                  </div>
                  <div className="m-bottom-16 float-label ">
                    <input
                      placeholder="Nome (igual no cartão)"
                      type="text"
                      onChange={onCleanErrors}
                      className={errors.CCname ? 'border-danger' : ''}
                      name="CCname"
                    />
                    <label>Nome (igual ao cartão)</label>
                    {errors.CCname && (
                      <span className="color-danger m-top-10">
                        Insira seu nome completo
                      </span>
                    )}
                  </div>
                  <div className="d-flex d-flex-space-between line-inputs">
                    <div className="m-bottom-16 float-label date-expiry">
                      <input
                        placeholder="00/0000"
                        type="text"
                        onChange={onCleanErrors}
                        name="CCexpiry"
                        maxLength="7"
                        className={errors.CCexpiry ? 'border-danger' : ''}
                      />
                      <label className="expiry">Validade</label>
                      {errors.CCexpiry && (
                        <span className="color-danger m-top-10">
                          Data inválida
                        </span>
                      )}
                    </div>
                    <div className="pad-left-20 m-bottom-16 float-label code">
                      <input
                        placeholder="CVC"
                        onChange={onCleanErrors}
                        type="text"
                        name="CCcvc"
                        maxLength="3"
                        className={errors.CCcvc ? 'border-danger' : ''}
                      />
                      <label className="cvv icon-tip">
                        CVV <S.Tooltip />
                      </label>
                      {errors.CCcvc && (
                        <span className="color-danger">Código inválido</span>
                      )}
                    </div>
                  </div>
                  <div className="m-bottom-16 float-label">
                    <div
                      className={
                        errors.CCsplit ? 'select border-danger' : 'select'
                      }
                    >
                      <div className="select-label">
                        <select
                          value={split}
                          name="CCsplit"
                          onChange={onChangeSplitHandler}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
                            return (
                              <option key={n} value={n}>
                                {n} de R$
                                {(userInfo.amount / n)
                                  .toFixed(2)
                                  .toString()
                                  .replace('.', ',')}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                    {errors.CCsplit && (
                      <span className="color-danger">
                        Insira o número de parcelas
                      </span>
                    )}
                    <label className="splits">Número de parcelas</label>
                  </div>
                  <div className="m-bottom-30 d-flex d-flex-end">
                    <S.Button onClick={validadeCreditCardAndSubmit}>
                      Continuar
                    </S.Button>
                  </div>
                </S.Form>
              ) : null}
              {step === 3 ? (
                <>
                  <div className="payment-resume">
                    <h2>
                      <span>Confirmação de compra</span>
                    </h2>
                    <div>
                      <p className="m-top-30">
                        Confira sua compra antes de avançar:
                      </p>
                      <p className="m-top-30"> 3 itens adicionados</p>
                      <table className="m-top-30">
                        <thead>
                          <tr>
                            <th>
                              <p>Descrição</p>
                            </th>
                            <th>
                              <p>Valor</p>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {[1, 2, 3].map((n) => {
                                return (
                                  <p key={n} value={n}>
                                    {n}º produto
                                  </p>
                                )
                              })}
                            </td>
                            <td>
                              {[1, 2, 3].map((n) => {
                                return (
                                  <p key={n} value={n}>
                                    R$ 0,00
                                  </p>
                                )
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="m-top-30">
                        Valor total: R${' '}
                        {userInfo.amount
                          .toFixed(2)
                          .toString()
                          .replace('.', ',')}
                      </p>
                      <span className="total-splits">
                        {split} parcelas de{' '}
                        {(userInfo.amount / split)
                          .toFixed(2)
                          .toString()
                          .replace('.', ',')}
                      </span>
                      <span className="total-splits m-top-30 d-block">
                        Data da compra: {new Date().toLocaleDateString('pt-br')}
                      </span>
                    </div>
                  </div>
                  <div className="m-bottom-30 d-flex d-flex-end">
                    <S.Button
                      onClick={onSubmitHandler}
                      className="m-top-30 confirm"
                    >
                      Confirmar
                    </S.Button>
                  </div>
                </>
              ) : null}
            </CardReactFormContainer>
          </S.CardInformation>
          <S.PaymentResume>
            <div className="title"></div>
            <hr />
            <ul>
              <li className="d-flex">
                <div className="item m-top-20"></div>
                <div className="price m-top-20"></div>
              </li>
              <li className="d-flex">
                <div className="item m-top"></div>
                <div className="price m-top"></div>
              </li>
              <li className="d-flex">
                <div className="item m-top"></div>
                <div className="price m-top"></div>
              </li>
            </ul>
            <hr />
            <div className="d-flex">
              <div className="total m-top-20"></div>
              <div className="total-price m-top-20"></div>
            </div>
          </S.PaymentResume>
        </div>
      </div>
    </S.PageWrapper>
  )
}

export default Payment
