
export const updateValuesFrom = (name, value) => ({
  type: 'FROM_UPDATE_VALUES',
  name, value
})

export const updateValuesTo = (name, value) => ({
  type: 'TO_UPDATE_VALUES',
  name, value
})

export const updateValuesQuotedCode= (name, value) => ({
  type: 'QUOTED_CODE_UPDATE_VALUES',
  name, value
})

export const generateQuoted= () => ({
  type: 'QUOTED_CODE_UPDATE_VALUES'
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
