import { Serializer as RecipeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-cooking-recipe';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RecipeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
