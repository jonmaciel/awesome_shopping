# frozen_string_literal: true

require "capybara_helper"

RSpec.describe "Special behaviour", js: true do
  before do
    visit("/")
  end

  describe "Diogo's workshop" do
    it "has been add in cart by Diogo" do
      first('a.product-add[title="Learn RoR - Beginner"]').click
      first('a.product-add[title="Mastering RoR - Level over 9000"]').click
      find(".open-cart-popup").click

      expect(all(".cart-popup .product").first).to have_text("Learn RoR - Beginner")
      expect(all(".cart-popup .product").last).to have_text("Mastering RoR - Level ")

      first(".cart-popup .product-quantity input").set("10")

      expect(all(".cart-popup .item-price").first).to have_text("$249.90")
      expect(all(".cart-popup .item-price").last).to have_text("$9,001.00")

      expect(find(".cart-popup .total-quantity")).to have_text("Itens quantity:11")
      expect(find(".cart-popup .total-price")).to have_text("Total: $9,250.90")

      sleep 1

      Timecop.freeze(Date.today + 1.day) do
        visit("/cart")
        expect(all(".cart-popup .product").first).to have_text("Learn RoR - Beginner")
        expect(all(".cart-popup .product").last).to have_text("Mastering RoR - Level ")

        expect(find(".cart-popup .total-quantity")).to have_text("Itens quantity:11")
        expect(find(".cart-popup .total-price")).to have_text("Total: $9,250.90")
      end

      Timecop.freeze(Date.today + 49.hours) do
        visit("/cart")
        expect(first(".cart-popup")).to have_text("Empty cart ;(")
      end
    end
  end

  describe "Joao wants 22 copies of Mastering RoR - Level over 9000" do
    it "has been add in cart by Diogo" do
      first('a.product-add[title="Mastering RoR - Level over 9000"]').click
      find(".open-cart-popup").click
      first(".cart-popup input").set("2")

      expect(find(".cart-popup .total-quantity")).to have_text("2")
      expect(first(".cart-popup .item-price")).to have_text("$18,002.00")
      expect(find(".cart-popup .total-price")).to have_text("Total: $18,002.00")
    end
  end
end
