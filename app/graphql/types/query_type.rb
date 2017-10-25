# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  field :getCart, types.String do
    description "Set Car Cookie"
    type types[CartItemInputType]
    resolve ->(obj, args, ctx) {
      cart = ctx[:cookies][:cart]
      cart ? JSON.parse(cart) : []
    }
  end
end
