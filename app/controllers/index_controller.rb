# frozen_string_literal: true

class IndexController < ApplicationController
  def index
    @products = Product.all
    @cart = cookies[:cart] ? JSON.parse(cookies[:cart]) : []
  end
end
