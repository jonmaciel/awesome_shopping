require 'rails_helper'

describe User, type: :model do
  describe FactoryGirl.create(:user) do
    it { is_expected.to have_attributes(name: 'user') }
  end
end
