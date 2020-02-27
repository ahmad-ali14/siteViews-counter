const moingoose = require('mongoose');
const schema = moingoose.Schema;

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };

  const visitScema = new schema({

    page:{
      type: String,
      required: true
    },
    counter:{
        type: Number,
        required: true
    }
  }, schemaOptions);

const visits = moingoose.model('visits', visitScema, 'visits');

module.exports= visits;