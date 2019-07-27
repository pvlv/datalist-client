export const schema2 = {
  title: 'Form Title',
  type: 'object',
  // required: ['title'],
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      default: 'A new task',
      minLength: 1
    },
    description: {
      type: 'string',
      title: 'Description of task'
    },
    priority: {
      type: 'string',
      title: 'Priority',
      enum: ['Low', 'Medium', 'High']
    },
    tags: {
      type: 'array',
      title: 'Related Projects',
      items: {
        type: 'string',
        enum: ['ProjA', 'ProjB']
      },
      uniqueItems: true
    },
    done: { type: 'boolean', title: 'Done?', default: false }
  }
};

export const schema = {
  title: 'Default Title',
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
    }
  }
};

export const uiSchema = {
  'ui:rootFieldId': 'formOne',
  description: {
    'ui:widget': 'textarea',
    classNames: 'task__description some-class'
  },
  tags: {
    'ui:widget': 'checkboxes'
  }
};

export const formData = {
  done: true
};

export default {
  schema,
  uiSchema,
  formData
};
