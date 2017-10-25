# frozen_string_literal: true

require "rails_helper"

RSpec.describe ProductType do
  it { is_expected.to have_field(:productId).of_type("ID!") }
  it { is_expected.to have_field(:quantity).of_type("Int!") }
end
