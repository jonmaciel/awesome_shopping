# frozen_string_literal: true

SetCartMutation = GraphQL::Relay::Mutation.define do
  name "SetCartMutation"

  input_field :cart, !types[CartItemInputType]

  return_field :success, types.Boolean

  resolve ->(obj, args, ctx) {
    ctx[:cookies].permanent[:cart] = JSON.generate(args.to_h["cart"])
    { success: ctx[:cookies][:cart].present? }
  }
end
