import { Serializer as IngredientSerializer } from
  '../mixins/regenerated/serializers/i-i-s-cooking-ingredient';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(IngredientSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
