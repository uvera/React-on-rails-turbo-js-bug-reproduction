class CarsController < ApplicationController

  def new
    @car = Car.new
  end

  def create
    @car = Car.new(mileage: 3, brand: 'test')
    @car.save

    respond_to do |format|
      format.html do
        render 'new'
      end
      format.turbo_stream do
        render 'new'
      end
    end
  end
end
