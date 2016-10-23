
export const updateValuesFrom = (name, value) => ({
  type: 'FROM_UPDATE_VALUES',
  name, value
})

export const updateValuesTo = (name, value) => ({
  type: 'TO_UPDATE_VALUES',
  name, value
})

export const updateValuesQuotedCode = (name, value) => ({
  type: 'QUOTED_CODE_UPDATE_VALUES',
  name, value
})

export const updateValueService = (serviceId, service, description, price) => ({
  type: 'SERVICE_UPDATE_VALUES',
  service: {
      serviceId,
      service,
      description,
      price
    }
})

export const updateValueTotal = (subtotal, total, discount) => ({
  type: 'PRICES_UPDATE_VALUES',
  subtotal, total, discount
})
