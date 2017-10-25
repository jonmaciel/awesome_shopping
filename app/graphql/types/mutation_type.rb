# frozen_string_literal: true

Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :setCartMutation, field: SetCartMutation.field
end
