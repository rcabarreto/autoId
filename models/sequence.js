

const _ = require('lodash');
const slugify = require('slugify');

module.exports = (sequelize, DataTypes) => {
  const sequence = sequelize.define('sequence', {
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(32),
      allowNull: true,
      set(value) {
        this.setDataValue('slug', slugify(value, { replacement: '-', lower: true }));
      },
    },
    value: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      defaultValue: 0,
    },
  });

  sequence.prototype.showValue = function () {
    const json = this.toJSON();
    return _.pick(json, ['value']);
  };

  return sequence;
};
