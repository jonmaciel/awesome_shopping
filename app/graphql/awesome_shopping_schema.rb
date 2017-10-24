# frozen_string_literal: true

AwesomeShoppingSchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)
end
