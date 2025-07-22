import { useState } from 'react'
import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  InputGroup,
  Row,
  NextPrevious,
  Fracao,
  Realizado
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, finish } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'
import Card from '../Card'
import { useFormik, setNestedObjectValues } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const [currentStep, setCurrentStep] = useState(1)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      homeNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      city: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório.'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'Digite um CEP válido (ex: 12345-678)')
        .required('O campo é obrigatório.'),
      homeNumber: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório.'),
      complement: Yup.string().notRequired().nullable(),

      cardDisplayName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      cardNumber: Yup.string()
        .matches(
          /^(\d{4} ){3}\d{4}$/,
          'Digite um número de cartão válido (16 dígitos)'
        )
        .required('O campo é obrigatório.'),
      expiresMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Digite um mês válido (01 a 12)')
        .required('O campo é obrigatório.'),
      expiresYear: Yup.string()
        .matches(/^\d{2}$/, 'Digite um ano válido (ex: 25)')
        .required('O campo é obrigatório.'),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'Digite um código válido (3 dígitos)')
        .required('O campo é obrigatório.')
    }),
    onSubmit: async (values) => {
      try {
        await purchase({
          delivery: {
            receiver: values.fullName,
            address: {
              city: values.city,
              description: values.address,
              number: Number(values.homeNumber),
              zipCode: values.cep,
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardDisplayName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          }))
        }).unwrap()
        setCurrentStep(currentStep + 1)
      } catch (error) {
        console.error('Erro ao realizar a compra:', error)
      }
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const finaliza = () => {
    dispatch(finish())
    dispatch(close())
    setCurrentStep(1)
  }

  interface FormValues {
    fullName: string
    address: string
    city: string
    cep: string
    homeNumber: string
    complement: string
    cardDisplayName: string
    cardNumber: string
    expiresMonth: string
    expiresYear: string
    cardCode: string
  }

  const handleNextStep = () => {
    if (currentStep === 2) {
      const requiredFields: (keyof FormValues)[] = [
        'fullName',
        'address',
        'city',
        'cep',
        'homeNumber'
      ]
      const isAnyFieldEmpty = requiredFields.some(
        (field) => !form.values[field]
      )

      if (isAnyFieldEmpty) {
        const dirtyFields: Partial<Record<keyof FormValues, boolean>> = {}
        Object.keys(form.values).forEach((field) => {
          dirtyFields[field as keyof FormValues] = true
        })
        form.setTouched(dirtyFields)
      } else {
        setCurrentStep(currentStep + 1)
      }
    } else if (currentStep === 3) {
      form.handleSubmit()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {currentStep === 1 && (
            <>
              {items.length === 0 ? (
                <h3>O carrinho está vazio, por favor adicione algum item.</h3>
              ) : (
                <>
                  <ul>
                    {items.map((item) => (
                      <CartItem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h3>{item.nome}</h3>
                          <span>{formataPreco(item.preco)}</span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          type="button"
                        />
                      </CartItem>
                    ))}
                  </ul>
                  <Prices>
                    <span>Valor total</span> {formataPreco(getTotalPrice())}
                  </Prices>
                  <NextPrevious>
                    <Button
                      onClick={handleNextStep}
                      title="clique aqui para continuar com a compra"
                      type="button"
                    >
                      Continuar com a entrega
                    </Button>
                    <Button onClick={closeCart} title="Voltar" type="button">
                      Voltar
                    </Button>
                  </NextPrevious>
                </>
              )}
            </>
          )}
          {currentStep === 2 && (
            <>
              <Card title="Entrega">
                <Row>
                  <InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('fullName', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.values.address}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('address', form.errors.address)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>{getErrorMessage('city', form.errors.city)}</small>
                  </InputGroup>
                  <Fracao>
                    <InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        mask="99999-999"
                      />
                      <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="homeNumber">Número</label>
                      <input
                        id="homeNumber"
                        type="text"
                        name="homeNumber"
                        value={form.values.homeNumber}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />
                      <small>
                        {getErrorMessage('homeNumber', form.errors.homeNumber)}
                      </small>
                    </InputGroup>
                  </Fracao>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                </Row>
              </Card>
              <NextPrevious>
                <Button
                  onClick={handleNextStep}
                  title="Continuar com o pagamento"
                  type="button"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={handlePreviousStep}
                  title="Voltar para o carrinho"
                  type="button"
                >
                  Voltar para o carrinho
                </Button>
              </NextPrevious>
            </>
          )}
          {currentStep === 3 && (
            <>
              <Card title="Pagamento">
                <Row>
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      mask="9999 9999 9999 9999"
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <Fracao>
                    <InputGroup>
                      <label htmlFor="expiresMonth">Mês de expiração</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        mask="99"
                      />
                      <small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expiresYear">Ano de expiração</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        mask="99"
                      />
                      <small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </small>
                    </InputGroup>
                  </Fracao>
                  <InputGroup>
                    <label htmlFor="cardCode">Código de segurança</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      mask="999"
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
              </Card>
              <NextPrevious>
                <Button
                  onClick={handleNextStep}
                  title="clique aqui para continuar"
                  type="button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processando...' : 'Continuar'}
                </Button>
                <Button
                  onClick={handlePreviousStep}
                  title="Voltar"
                  type="button"
                >
                  Voltar
                </Button>
              </NextPrevious>
            </>
          )}
          {currentStep === 4 && (
            <>
              <h1>Pedido realizado - {data?.orderId}</h1>
              <Realizado>
                <div>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.{' '}
                </div>
                <div>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </div>
                <div>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </div>
                <div>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </div>
              </Realizado>
              <NextPrevious>
                <Button onClick={finaliza} title="Concluir" type="button">
                  Concluir
                </Button>
              </NextPrevious>
            </>
          )}
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
