require 'rails_helper'

describe Product, type: :model do
  describe FactoryGirl.create(:product) do
    it { is_expected.to have_attributes(name: 'Product') }
    it { is_expected.to have_attributes(price: 1) }
  end
end
