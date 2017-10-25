# frozen_string_literal: true

ProductType = GraphQL::ObjectType.define do
  name "ProductType"

  field :productId, !types.ID
  field :quantity, !types.Int
end
