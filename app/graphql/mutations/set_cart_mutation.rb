# frozen_string_literal: true

SetCartMutation = GraphQL::Relay::Mutation.define do
  name "SetCartMutation"

  input_field :cart, !types[CartItemInputType]

  return_field :success, types.Boolean

  resolve ->(obj, args, ctx) {
    ctx[:cookies][:cart] = {
      value:  JSON.generate(args.to_h["cart"]),
      expires: 48.hour.from_now
    }

    { success: ctx[:cookies][:cart].present? }
  }
end
