# frozen_string_literal: true

require "rails_helper"

RSpec.describe IndexController, type: :controller do
  describe "GET index" do
    it "renders index" do
      get :index
      is_expected.to render_template(:index)
    end
  end
end
