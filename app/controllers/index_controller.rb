# frozen_string_literal: true

class IndexController < ApplicationController
  def index
    @products = Product.all
  end
end
