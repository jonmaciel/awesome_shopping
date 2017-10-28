# frozen_string_literal: true

require "capybara_helper"

RSpec.describe "Cart engine", js: true, reset_sessions: true do
  before do
    visit("/")
  end

  describe "SPA behaviour" do
    it "touggle cart showing" do
      visit("/cart")
      expect(page).to have_selector(".cart-popup")
      visit("/")
      expect(page).to_not have_selector(".cart-popup")
    end
  end

  describe "cart popup" do
    it "open a empty cart" do
      expect(page).to_not have_text("Empty cart ;(")
      find(".open-cart-popup").click
      expect(page).to have_text("Empty cart ;(")
      expect(page).to_not have_selector(".product-cart-count")
      expect(find(".cart-popup")).to_not have_selector(".product")
    end

    it "adds item" do
      first(".product-add").click
      expect(find(".product-cart-count")).to have_text("1")
      find(".open-cart-popup").click
      expect(find(".cart-popup")).to_not have_text("Empty cart ;(")
      expect(page).to_not have_selector(".product-cart-count")
      expect(find(".cart-popup")).to have_selector(".product")
    end

    it "removes item by cart" do
      first(".product-add").click
      find(".open-cart-popup").click
      find(".cart-popup .product-remove").click
      expect(page).to have_text("Empty cart ;(")
    end

    describe "totals" do
      it "shows totals" do
        first(".product-add").click
        find(".open-cart-popup").click
        expect(find(".cart-popup")).to have_text("Itens quantity:")
        expect(find(".cart-popup")).to have_text("1")
        expect(find(".cart-popup")).to have_text("Total:")
        expect(find(".cart-popup")).to have_text("$24.99")
      end

      it "increases totals" do
        first(".product-add").click
        find(".open-cart-popup").click
        expect(find(".cart-popup")).to have_text("1")
        expect(find(".cart-popup")).to have_text("$24.99")
        first(".product-add").click
        find(".open-cart-popup").click
        expect(find(".cart-popup")).to have_text("2")
        expect(find(".cart-popup")).to have_text("$49.98")

        first(".cart-popup input").set("2")
        expect(find(".cart-popup")).to have_text("3")
        expect(find(".cart-popup")).to have_text("$74.97")
        first(".cart-popup .product-remove").click
        expect(find(".cart-popup")).to have_text("2")
        expect(find(".cart-popup")).to have_text("$24.99")

        first(".cart-popup .product-remove").click
        expect(find(".cart-popup")).to_not have_text("Itens quantity:")
        expect(find(".cart-popup")).to_not have_text("Total:")
      end
    end
  end
end
