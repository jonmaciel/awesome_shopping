require "rails_helper"

describe "set_cart_mutation" do
  let(:cart) { '{ cart: [{productId: "1", quantity: 2}, {productId: 2, quantity: 4}] }' }
  let(:context) { { cookies: { cart: {} } } }

  let(:query) {
    <<-GRAPHQL
      mutation {
        setCartMutation (input: #{cart}) {
          success
        }
      }
    GRAPHQL
  }

  let(:result) {
    AwesomeShoppingSchema.execute(query, context: context).to_h
  }

  it "returns right values" do
    expect(result["data"]["setCartMutation"]["success"]).to be_truthy
  end
end
