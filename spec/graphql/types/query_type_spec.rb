require "rails_helper"

RSpec.describe Types::QueryType do
  it { is_expected.to have_field(:getCart).of_type([ProductType]) }
end
