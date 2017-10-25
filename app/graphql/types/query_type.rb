# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  field :getCart do
    description "Set Car Cookie"
    type types[ProductType]
    resolve ->(obj, args, ctx) {
      cart = ctx[:cookies][:cart]
      cart ? JSON.parse(cart) : []
    }
  end
end
