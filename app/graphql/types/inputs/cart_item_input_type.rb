# frozen_string_literal: true

CartItemInputType = GraphQL::InputObjectType.define do

  name "CartItemInput"

  argument :productId, !types.ID
  argument :quantity, !types.Int
end
