export const schema = {
  title: 'Добавление нового товара',
  type: 'object',
  properties: {
    code: {
      type: 'string',
      title: 'Код'
    },
    type: {
      type: 'string',
      title: 'Тип',
      anyOf: [
        {
          type: 'string',
          title: 'Шина',
          enum: ['tyre']
        },
        {
          type: 'string',
          title: 'Гайка',
          enum: ['nuts']
        },
        {
          type: 'string',
          title: 'Болт',
          enum: ['screw']
        }
      ]
    },
    addedBy: {
      type: 'string',
      title: 'Кто добавил',
      anyOf: [
        {
          type: 'string',
          title: 'ООО Рассвет',
          enum: ['0']
        },
        {
          type: 'string',
          title: 'ООО Персектива',
          enum: ['1']
        },
        {
          type: 'string',
          title: 'ООО Детали',
          enum: ['2']
        }
      ]
    },
    bench: {
      type: 'string',
      title: 'Партия'
    },
    params: {
      type: 'object',
      title: 'Параметры для шин',
      properties: {
        material: {
          type: 'string',
          title: 'Материалы шин',
          anyOf: [
            {
              type: 'string',
              title: 'Резина',
              enum: ['0']
            },
            {
              type: 'string',
              title: 'Каучук',
              enum: ['1']
            }
          ]
        },
        diameter: {
          type: 'string',
          title: 'Диаметр шин',
          anyOf: [
            {
              type: 'string',
              title: '18',
              enum: ['0']
            },
            {
              type: 'string',
              title: '22',
              enum: ['1']
            }
          ]
        },
        width: {
          type: 'number',
          title: 'Ширина шин'
        }
      }
    }
  }
};

export const uiSchema = {
  'ui:rootFieldId': 'form'
};

export const formData = {
  done: true
};

export default {
  schema,
  uiSchema,
  formData
};
