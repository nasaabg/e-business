module Api
  module V1
    class OrdersController < ApplicationController
      before_action :set_order, only: [:show, :update, :destroy]

      # GET /orders
      def index
        @orders = current_user.orders

        render json: @orders
      end

      # GET /orders/1
      def show
        render json: @order
      end

      # POST /orders
      def create
        @order = Order.new(user: current_user)
        order_params[:products].map do |attrs|
          @order.order_products.build(attrs)
        end

        if @order.save
          render json: @order
        else
          render json: @order.errors
        end
      end

      # PATCH/PUT /orders/1
      def update
        if @order.update(order_params)
          render json: @order
        else
          render json: @order.errors, status: :unprocessable_entity
        end
      end

      # DELETE /orders/1
      def destroy
        @order.destroy
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_order
        @order = Order.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def order_params
        params.require(:order).permit(products: [:product_id, :quantity])
      end
    end

  end
end

